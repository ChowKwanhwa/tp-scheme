"use client"

import React from 'react';
import {
  Card,
} from "@/components/ui/card";

interface BuyCardProps {
  presaleEndsIn: string;
  minBnb: number;
  maxBnb: number;
  minBuy: string;
  maxBuy: string;
  progress: number;
  raised: string;
}

const BuyCard: React.FC<BuyCardProps> = ({
  presaleEndsIn,
  minBnb,
  maxBnb,
  minBuy,
  maxBuy,
  progress,
  raised
}) => {
  return (
    <Card className="p-6 space-y-4">
      {/* Warning Message */}
      <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-center text-sm">
        Make sure the website is pinksale.finance!
      </div>

      {/* Presale Timer */}
      <div className="space-y-2">
        <div className="text-sm">Presale Ends In:</div>
        <div className="text-lg font-semibold">{presaleEndsIn}</div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="h-2 bg-gray-200 rounded">
          <div 
            className="h-full bg-pink-500 rounded" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>{raised}</span>
          <span>{maxBuy}</span>
        </div>
      </div>

      {/* Amount Input */}
      <div className="space-y-2">
        <div className="text-sm">Amount(max. {maxBnb} BNB)</div>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="0.0"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-pink-600 transition-colors">
              MAX
            </button>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <button className="w-full bg-pink-500 text-white py-2 rounded font-medium hover:bg-pink-600 transition-colors">
        Buy
      </button>

      {/* Min/Max Buy */}
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Min Buy: {minBuy}</span>
        <span>Max Buy: {maxBuy}</span>
      </div>
    </Card>
  );
};

export default BuyCard;
