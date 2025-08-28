"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">adaapt</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Product
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Resources
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </Link>
              <Link 
                href="https://demo.adaapt.ai/"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Try Free
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Product
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Solutions
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Resources
              </Link>
              <hr className="border-gray-200" />
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </Link>
              <Link 
                href="https://demo.adaapt.ai/"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-fit"
              >
                Try Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}