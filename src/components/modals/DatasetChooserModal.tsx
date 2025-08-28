"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Database, CheckCircle } from "lucide-react";
import { useQuery } from "@/lib/store";

interface DatasetChooserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Dataset {
  id: string;
  name: string;
  source: string;
  status: "Ready" | "Processing" | "Error";
}

const mockDatasets: Dataset[] = [
  { id: "1", name: "Sales_Transactions", source: "Snowflake", status: "Ready" },
  { id: "2", name: "Regional_Sales", source: "BigQuery", status: "Ready" },
  { id: "3", name: "Finance_Analysis", source: "Postgres", status: "Ready" },
  { id: "4", name: "Marketing_Leads", source: "Google Sheets", status: "Ready" },
];

export const DatasetChooserModal = ({ isOpen, onClose }: DatasetChooserModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const { updateCurrentDataset } = useQuery();

  const filteredDatasets = mockDatasets.filter(dataset =>
    dataset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dataset.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUseDataset = () => {
    if (selectedDataset) {
      const dataset = mockDatasets.find(d => d.id === selectedDataset);
      if (dataset) {
        updateCurrentDataset(dataset.name);
        onClose();
      }
    }
  };

  const handleClose = () => {
    setSelectedDataset(null);
    setSearchTerm("");
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setSelectedDataset(null);
      setSearchTerm("");
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-text-primary">
            Choose a dataset
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <Input
              placeholder="Search datasets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 border-border focus:ring-2 focus:ring-[#5A57D6] focus:ring-opacity-50 focus:border-[#5A57D6] transition-all duration-200"
            />
          </div>

          {/* Dataset List */}
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {filteredDatasets.length === 0 ? (
              <div className="text-center py-8 text-text-secondary">
                No datasets found matching your search.
              </div>
            ) : (
              filteredDatasets.map((dataset) => (
                <div
                  key={dataset.id}
                  onClick={() => setSelectedDataset(dataset.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedDataset === dataset.id
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-white hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        selectedDataset === dataset.id 
                          ? "bg-primary/10" 
                          : "bg-muted"
                      }`}>
                        <Database className={`h-4 w-4 ${
                          selectedDataset === dataset.id 
                            ? "text-primary" 
                            : "text-text-secondary"
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-primary">
                          {dataset.name}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {dataset.source}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-success-green/10 text-success-green border-success-green/20 hover:bg-success-green/10"
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {dataset.status}
                      </Badge>
                      {selectedDataset === dataset.id && (
                        <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1 border-border hover:bg-muted focus:ring-2 focus:ring-[#5A57D6] focus:ring-opacity-50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleUseDataset}
              disabled={!selectedDataset}
              className="flex-1 bg-primary hover:bg-primary/90 text-white disabled:bg-muted disabled:text-text-secondary disabled:cursor-not-allowed focus:ring-2 focus:ring-[#5A57D6] focus:ring-opacity-50 transition-all duration-200"
            >
              Use dataset
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};