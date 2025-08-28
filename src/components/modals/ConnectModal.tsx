"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Database, Cloud, Server, HardDrive, FileSpreadsheet } from 'lucide-react';
import { useQuery } from '@/lib/store';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const dataProviders = [
  { id: 'snowflake', name: 'Snowflake', icon: Database },
  { id: 'bigquery', name: 'BigQuery', icon: Cloud },
  { id: 'redshift', name: 'Redshift', icon: Database },
  { id: 'postgres', name: 'Postgres', icon: Database },
  { id: 'mysql', name: 'MySQL', icon: Database },
  { id: 'sqlserver', name: 'SQL Server', icon: Server },
  { id: 'oracle', name: 'Oracle', icon: Database },
  { id: 's3', name: 'S3', icon: HardDrive },
  { id: 'googlesheets', name: 'Google Sheets', icon: FileSpreadsheet },
];

export const ConnectModal = ({ isOpen, onClose, onContinue }: ConnectModalProps) => {
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const { updateCurrentDatasetSource } = useQuery();

  const handleProviderSelect = (providerId: string) => {
    setSelectedProvider(providerId);
  };

  const handleContinue = () => {
    if (selectedProvider) {
      const provider = dataProviders.find(p => p.id === selectedProvider);
      if (provider) {
        updateCurrentDatasetSource(provider.name);
        onContinue();
      }
    }
  };

  const handleClose = () => {
    setSelectedProvider('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Connect a data source
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <div className="grid grid-cols-3 gap-4">
            {dataProviders.map((provider) => {
              const Icon = provider.icon;
              const isSelected = selectedProvider === provider.id;
              
              return (
                <button
                  key={provider.id}
                  onClick={() => handleProviderSelect(provider.id)}
                  className={`
                    relative p-4 bg-white border rounded-xl transition-all duration-150 ease-in-out
                    hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#5A57D6] focus:ring-opacity-50
                    ${isSelected 
                      ? 'border-[#4f84ff] bg-blue-50 shadow-sm' 
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`
                      p-3 rounded-lg transition-colors duration-150
                      ${isSelected 
                        ? 'bg-[#4f84ff] text-white' 
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      <Icon size={24} />
                    </div>
                    <span className={`
                      text-sm font-medium transition-colors duration-150
                      ${isSelected ? 'text-[#4f84ff]' : 'text-gray-700'}
                    `}>
                      {provider.name}
                    </span>
                  </div>
                  
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#4f84ff] rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <DialogFooter className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex gap-3 w-full justify-end">
            <Button
              variant="outline"
              onClick={handleClose}
              className="px-6 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleContinue}
              disabled={!selectedProvider}
              className={`
                px-6 transition-all duration-150
                ${selectedProvider 
                  ? 'bg-[#4f84ff] hover:bg-[#3f74ef] text-white shadow-sm' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              Continue
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;