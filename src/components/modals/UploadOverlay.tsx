"use client";

import { useState, useRef, useCallback, useEffect } from 'react';
import { X, Upload, FileText, Database, BarChart3 } from 'lucide-react';
import { useQuery } from '@/lib/store';

interface UploadOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadOverlay = ({ isOpen, onClose }: UploadOverlayProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { updateCurrentDataset, updateCurrentDatasetSource } = useQuery();

  const allowedTypes = ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/json'];
  const allowedExtensions = ['.csv', '.xlsx', '.json'];

  const validateFile = (file: File): boolean => {
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    return allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);
  };

  const processFile = useCallback(async (file: File) => {
    if (!validateFile(file)) {
      setError('Please upload a CSV, XLSX, or JSON file.');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      // Simulate file processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update the current dataset
      updateCurrentDataset(file.name.split('.')[0]);
      updateCurrentDatasetSource('Uploaded');

      onClose();
    } catch (err) {
      setError('Failed to process file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [updateCurrentDataset, updateCurrentDatasetSource, onClose]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      processFile(files[0]);
    }
  }, [processFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  }, [processFile]);

  const handleSampleSelect = useCallback((sampleType: 'sales' | 'finance') => {
    setIsUploading(true);
    setError(null);

    // Simulate loading sample data
    setTimeout(() => {
      if (sampleType === 'sales') {
        updateCurrentDataset('Sales_Transactions');
        updateCurrentDatasetSource('Sample');
      } else {
        updateCurrentDataset('Finance_Analysis');
        updateCurrentDatasetSource('Sample');
      }
      setIsUploading(false);
      onClose();
    }, 1000);
  }, [updateCurrentDataset, updateCurrentDatasetSource, onClose]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  }, [onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Focus the overlay when opened
      overlayRef.current?.focus();
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-title"
    >
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-full max-w-lg overflow-hidden transition-all duration-200 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 id="upload-title" className="text-lg font-semibold text-gray-900">
            Upload Dataset
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            aria-label="Close upload dialog"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Drop Zone */}
          <div
            className={`
              relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer
              ${isDragOver 
                ? 'border-primary bg-blue-50 scale-[1.02]' 
                : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }
              ${isUploading ? 'pointer-events-none opacity-50' : ''}
            `}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            aria-label="Click to upload file or drag and drop"
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".csv,.xlsx,.json"
              onChange={handleFileSelect}
              disabled={isUploading}
            />
            
            <div className="flex flex-col items-center space-y-3">
              <div className={`
                p-3 rounded-full transition-colors duration-200
                ${isDragOver ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}
              `}>
                <Upload className="h-6 w-6" />
              </div>
              
              <div className="space-y-1">
                <p className="font-medium text-gray-900">
                  {isUploading ? 'Processing...' : 'Drop files here or click to browse'}
                </p>
                <p className="text-sm text-gray-500">
                  Supports CSV, XLSX, and JSON files
                </p>
              </div>
            </div>

            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent"></div>
                  <span className="text-sm font-medium text-gray-700">Processing file...</span>
                </div>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-3 text-sm text-gray-500 bg-white">or use sample data</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Sample Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => handleSampleSelect('sales')}
              disabled={isUploading}
              className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg group-hover:bg-orange-200 transition-colors duration-150">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900">Use Sales — Transactions (sample)</p>
                <p className="text-sm text-gray-500">Sample sales transaction data</p>
              </div>
            </button>

            <button
              onClick={() => handleSampleSelect('finance')}
              disabled={isUploading}
              className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="p-2 bg-green-100 text-green-600 rounded-lg group-hover:bg-green-200 transition-colors duration-150">
                <Database className="h-4 w-4" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900">Use Finance — Analysis (sample)</p>
                <p className="text-sm text-gray-500">Sample financial analysis data</p>
              </div>
            </button>
          </div>

          {/* Footer Info */}
          <div className="flex items-start space-x-2 p-3 bg-blue-50 rounded-lg">
            <FileText className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-700">
              <p className="font-medium">Supported formats:</p>
              <p>CSV, Excel (.xlsx), and JSON files up to 50MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};