"use client";

import React from 'react';
import { TrendingUp } from 'lucide-react';

const Trending = () => {
  const trendingItems = [
    { rank: 1, name: 'RHINO' },
    { rank: 2, name: 'KAI' },
    { rank: 3, name: 'COMPUTERAI', color: 'text-pink-500' },
    { rank: 4, name: 'BCN' },
    { rank: 5, name: 'ETHR' },
    { rank: 6, name: 'BUBI' },
    { rank: 7, name: 'FLX' },
    { rank: 8, name: 'THEPUG' },
    { rank: 9, name: 'KEKIUS' },
    { rank: 10, name: 'POW' },
    { rank: 11, name: 'CKAT' },
    { rank: 12, name: 'BITBULL' },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-24">
        <div className="flex items-center py-2">
          <div className="flex items-center space-x-1 text-gray-600 shrink-0">
            <TrendingUp className="w-4 h-4" />
            <span>Trending</span>
          </div>
          <div className="flex-1 overflow-x-auto no-scrollbar">
            <div className="flex space-x-4 pl-4 min-w-max">
              {trendingItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-1 whitespace-nowrap">
                  <span className="text-gray-400 text-sm">#{item.rank}</span>
                  <a 
                    href="#" 
                    className={`text-sm hover:text-pink-500 ${item.color || ''}`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
