'use client';

import Image from 'next/image';
import WalletConnect from './WalletConnect';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="h-[72px] flex items-center justify-between">
          {/* Left group */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image 
                src="/pinksale-logo.png" 
                alt="PinkSale" 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
              <span className="text-base font-medium">PinkSale</span>
            </div>
            
            {/* Search bar - hide on mobile */}
            <div className="hidden sm:block relative">
              <input 
                type="text" 
                placeholder="Search by token name, symbol, or address"
                className="w-[280px] h-10 pl-4 pr-10 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#9ca3af"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right group */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Create button - hide on mobile */}
            <button className="hidden sm:flex items-center gap-1.5 h-9 px-4 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2.5V9.5M2.5 6H9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Create</span>
            </button>

            {/* Network selector */}
            <button className="flex items-center gap-2 h-9 px-3 bg-gray-100 rounded-lg text-sm">
              <Image 
                src="/bsc-logo.png" 
                alt="BSC" 
                width={16} 
                height={16}
                className="w-4 h-4"
              />
              <span className="hidden sm:inline">BSC MAINNET</span>
            </button>

            {/* Wallet connect */}
            <div className="shrink-0">
              <WalletConnect />
            </div>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="sm:hidden py-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by token name, symbol, or address"
              className="w-full h-10 pl-4 pr-10 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#9ca3af"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}