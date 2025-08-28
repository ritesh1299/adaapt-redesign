'use client';

import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface QueryState {
  query_text: string;
  current_dataset: string;
  current_dataset_source: string;
}

interface QueryContextType {
  state: QueryState;
  updateQueryText: (text: string) => void;
  updateCurrentDataset: (dataset: string) => void;
  updateCurrentDatasetSource: (source: string) => void;
  updateState: (updates: Partial<QueryState>) => void;
}

const QueryContext = createContext<QueryContextType | undefined>(undefined);

export function QueryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QueryState>({
    query_text: '',
    current_dataset: 'Sales_Transactions',
    current_dataset_source: 'Sample'
  });

  const updateQueryText = (text: string) => {
    setState(prev => ({ ...prev, query_text: text }));
  };

  const updateCurrentDataset = (dataset: string) => {
    setState(prev => ({ ...prev, current_dataset: dataset }));
  };

  const updateCurrentDatasetSource = (source: string) => {
    setState(prev => ({ ...prev, current_dataset_source: source }));
  };

  const updateState = (updates: Partial<QueryState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const value: QueryContextType = {
    state,
    updateQueryText,
    updateCurrentDataset,
    updateCurrentDatasetSource,
    updateState
  };

  return React.createElement(
    QueryContext.Provider,
    { value },
    children
  );
}

export function useQuery(): QueryContextType {
  const context = useContext(QueryContext);
  
  if (context === undefined) {
    throw new Error('useQuery must be used within a QueryProvider');
  }
  
  return context;
}