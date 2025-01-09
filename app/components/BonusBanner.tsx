'use client';

import { useState } from 'react';

export default function BonusBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const shapes = [
    'circle',
    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
    'polygon(50% 0%, 0% 100%, 100% 100%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  ];

  const colors = [
    '#FF9B9B',  // 粉红
    '#FFD700',  // 金色
    '#87CEEB',  // 天蓝
    '#98FB98',  // 浅绿
    '#DDA0DD',  // 浅紫
    '#FFB6C1'   // 浅粉红
  ];

  if (!isVisible) return null;

  return (
    <div className="w-full" style={{
      backgroundColor: '#FFF8E7',
      height: '40px',
      overflow: 'hidden',
    }}>
      {/* 飘落的彩絮容器 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        pointerEvents: 'none',
        height: '100px' // 增加高度以显示完整动画
      }}>
        {Array.from({ length: 30 }).map((_, i) => {
          const size = 6 + Math.random() * 6; // 6-12px
          const shapeIndex = i % shapes.length;
          const colorIndex = i % colors.length;
          const startPosition = Math.random() * 100;
          
          return (
            <div
              key={i}
              className={`confetti-${i}`}
              style={{
                position: 'absolute',
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: colors[colorIndex],
                clipPath: shapes[shapeIndex],
                left: `${startPosition}%`,
                top: '-20px',
                opacity: 0.7,
                willChange: 'transform',
                animation: `
                  fall-${i} ${3 + Math.random() * 2}s linear infinite ${-Math.random() * 2}s
                `
              }}
            />
          );
        })}
      </div>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-24 h-full">
        <div className="flex items-center justify-center h-full relative">
          <span className="text-sm text-gray-800">
            Complete your token's bonding curve progress on PinkMeme to receive a $1,000 bonus reward.
          </span>
          <a 
            href="#" 
            className="ml-2 bg-pink-500 text-white px-3 py-0.5 rounded text-sm font-medium hover:bg-pink-600"
          >
            Go!
          </a>
          
          {/* 关闭按钮 */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 p-1 hover:text-gray-600"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        ${Array.from({ length: 30 }).map((_, i) => `
          @keyframes fall-${i} {
            0% {
              transform: translateY(0) rotate(0deg) translateX(0);
            }
            33% {
              transform: translateY(30px) rotate(${90 + Math.random() * 180}deg) translateX(${-5 + Math.random() * 10}px);
            }
            66% {
              transform: translateY(60px) rotate(${180 + Math.random() * 180}deg) translateX(${5 + Math.random() * 10}px);
            }
            100% {
              transform: translateY(100px) rotate(${360 + Math.random() * 180}deg) translateX(${-5 + Math.random() * 10}px);
            }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
}
