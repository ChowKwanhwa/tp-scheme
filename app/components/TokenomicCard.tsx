"use client"

import React from 'react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface TokenomicCardProps {
  tokenName: string;
  presalePercent: number;
  liquidityPercent: number;
  unlockedPercent: number;
  burntPercent: number;
}

const TokenomicCard: React.FC<TokenomicCardProps> = ({
  tokenName,
  presalePercent,
  liquidityPercent,
  unlockedPercent,
  burntPercent
}) => {
  const data = {
    labels: ['Presale', 'Liquidity', 'Unlocked', 'Burnt'],
    datasets: [
      {
        data: [presalePercent, liquidityPercent, unlockedPercent, burntPercent],
        backgroundColor: [
          '#ff6b81', // pink for Presale
          '#2196f3', // blue for Liquidity
          '#ffd700', // yellow for Unlocked
          '#808080', // grey for Burnt
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // 禁用默认图例
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    cutout: '60%',
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };

  // 自定义图例数据
  const legendItems = [
    { color: '#ff6b81', label: 'Presale' },
    { color: '#2196f3', label: 'Liquidity' },
    { color: '#ffd700', label: 'Unlocked' },
    { color: '#808080', label: 'Burnt' }
  ];

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Tokenomics</h2>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-[600px]">
            {/* 圆环图 */}
            <div className="relative w-[250px] aspect-square">
              <div className="relative">
                <Doughnut data={data} options={options} />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="text-sm text-pink-500 -translate-y-6">{tokenName}</div>
                </div>
              </div>
            </div>

            {/* 自定义图例 */}
            <div className="flex flex-col gap-3">
              {legendItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-sm" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenomicCard;
