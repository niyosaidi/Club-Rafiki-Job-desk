
import React, { useState, useCallback, useEffect, useRef } from 'react';
import * as pdfjs from 'pdfjs-dist';
import mammoth from 'mammoth';
import { useLanguage } from '../contexts/LanguageContext';
import { AppMode } from '../types';
import { DocumentArrowUpIcon } from './icons';

// Set up the PDF.js worker to avoid errors.
// This is a requirement for pdf.js to work in a web environment.
pdfjs.GlobalWorkerOptions.workerSrc = 'https://esm.sh/pdfjs-dist@4.5.136/build/pdf.worker.mjs';

interface FileUploadScreenProps {
  mode: AppMode.CV_REVIEW | AppMode.LETTER_REVIEW;
  onFileParsed: (text: string) => void;
}

export default function FileUploadScreen({ mode, onFileParsed }: FileUploadScreenProps): React.ReactNode {
  const { t } = useLanguage();
  const [error, setError] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parsePdf = async (file: File) => {
    const reader = new FileReader();
    return new Promise<string>((resolve, reject) => {
      reader.onload = async (event) => {
        if (!event.target?.result) return reject(new Error("Failed to read file"));
        try {
          const pdf = await pdfjs.getDocument(event.target.result).promise;
          let text = '';
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item: any) => item.str).join(' ');
          }
          resolve(text);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsArrayBuffer(file);
    });
  };

  const parseDocx = async (file: File) => {
    const reader = new FileReader();
    return new Promise<string>((resolve, reject) => {
      reader.onload = async (event) => {
        if (!event.target?.result) return reject(new Error("Failed to read file"));
        try {
          const result = await mammoth.extractRawText({ arrayBuffer: event.target.result as ArrayBuffer });
          resolve(result.value);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsArrayBuffer(file);
    });
  };

  const processFile = useCallback(async (file: File | null) => {
    if (!file) return;

    setError(null);
    setIsParsing(true);

    try {
      if (file.type === 'application/pdf') {
        const text = await parsePdf(file);
        onFileParsed(text);
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const text = await parseDocx(file);
        onFileParsed(text);
      } else {
        throw new Error(t.fileUploadScreen.error.fileType);
      }
    } catch (err) {
      console.error("File parsing error:", err);
      setError(err instanceof Error ? err.message : t.fileUploadScreen.error.default);
      setIsParsing(false);
    }
  }, [onFileParsed, t]);

  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault(); // Necessary to allow drop
    e.stopPropagation();
  };
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
          processFile(e.target.files[0]);
      }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-50 dark:bg-slate-900 p-8">
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{t.fileUploadScreen.title[mode]}</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">{t.modeDetails[mode].description}</p>
        
        {isParsing ? (
          <div className="flex flex-col items-center justify-center p-10 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-3 h-3 bg-rafiki-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-rafiki-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-rafiki-blue-500 rounded-full animate-bounce"></div>
            <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300">{t.fileUploadScreen.uploading}</p>
          </div>
        ) : (
          <>
            <input 
              type="file" 
              id="file-upload" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.docx"
              disabled={isParsing}
            />
            <label
              htmlFor="file-upload"
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center p-10 rounded-2xl border-2 border-dashed cursor-pointer transition-colors duration-300
                ${isDragOver ? 'border-rafiki-blue-500 bg-rafiki-blue-50 dark:bg-rafiki-blue-500/10' : 'border-slate-300 dark:border-slate-700 hover:border-rafiki-blue-400 dark:hover:border-rafiki-blue-600 bg-white dark:bg-slate-950/50'}`}
            >
              <DocumentArrowUpIcon className="w-12 h-12 text-slate-400 dark:text-slate-500 mb-4"/>
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">{t.fileUploadScreen.prompt}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.fileUploadScreen.supportedFormats}</p>
            </label>
            {error && (
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
                {error}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
