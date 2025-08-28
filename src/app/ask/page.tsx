"use client";

import React, { useState } from 'react';
import { ArrowRight, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@/lib/store';
import Navigation from '@/components/sections/navigation';
import ConnectModal from '@/components/modals/ConnectModal';
import DatasetChooserModal from '@/components/modals/DatasetChooserModal';
import UploadOverlay from '@/components/modals/UploadOverlay';

const promptCards = [
  "Show me sales performance by region",
  "What are the top performing products?",
  "Analyze customer retention trends", 
  "Compare revenue growth year over year",
  "Identify seasonal sales patterns",
  "Show margin analysis by category"
];

export default function AskPage() {
  const router = useRouter();
  const { state, updateQueryText } = useQuery();
  const [inputValue, setInputValue] = useState(state.query_text || '');
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isDatasetModalOpen, setIsDatasetModalOpen] = useState(false);
  const [isUploadOverlayOpen, setIsUploadOverlayOpen] = useState(false);

  const handleSendQuery = () => {
    if (inputValue.trim()) {
      updateQueryText(inputValue.trim());
      router.push('/results');
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
    updateQueryText(prompt);
    // Focus the input after setting the value
    setTimeout(() => {
      const input = document.getElementById('ask-input');
      if (input) {
        input.focus();
      }
    }, 0);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendQuery();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ask Adaapt
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get AI-powered insights from your data. Ask questions in natural language and receive intelligent analysis tailored to your business needs.
          </p>
        </div>

        {/* Dataset Scope Pill */}
        {state.current_dataset && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-sm text-gray-600">
                Scope: <span className="font-medium">{state.current_dataset}</span> — {state.current_dataset_source}
              </span>
            </div>
          </div>
        )}

        {/* Ask Input Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <input
              id="ask-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What insights would you like to explore?"
              className="w-full h-16 px-6 pr-14 text-lg border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
            <button
              onClick={handleSendQuery}
              disabled={!inputValue.trim()}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Send query"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Try These Prompts Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Try these prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {promptCards.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptClick(prompt)}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200 text-left group focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {prompt}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-col items-center space-y-4 max-w-md mx-auto">
          <button
            onClick={() => setIsConnectModalOpen(true)}
            className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Add Connection
          </button>
          
          <button
            onClick={() => setIsUploadOverlayOpen(true)}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md px-2 py-1"
          >
            <Upload className="w-4 h-4" />
            <span className="text-sm">Upload a file — try without sign-up</span>
          </button>
        </div>
      </main>

      <ConnectModal 
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        onContinue={() => {
          setIsConnectModalOpen(false);
          setIsDatasetModalOpen(true);
        }}
      />

      <DatasetChooserModal 
        isOpen={isDatasetModalOpen}
        onClose={() => setIsDatasetModalOpen(false)}
      />

      <UploadOverlay 
        isOpen={isUploadOverlayOpen}
        onClose={() => setIsUploadOverlayOpen(false)}
      />
    </div>
  );
}