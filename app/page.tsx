'use client';

import { useSearchParams } from 'next/navigation';
import BonusBanner from './components/BonusBanner';
import Header from './components/Header';
import PresaleCard from './components/PresaleCard';
import Trending from './components/Trending';
import BuyCard from './components/BuyCard';
import TokenomicCard from './components/TokenomicCard';
import FaqAccordion from './components/FaqAccordion';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';

export default function Home() {
  const searchParams = useSearchParams();
  const bscAddress = searchParams.get('bsc') || '0x4E467a7F6f3C0c35248aF42937417B3321eAA5e1';

  return (
    <>
      <BonusBanner/>
      <Header />
      <Trending />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
          {/* PresaleCard and BuyCard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* PresaleCard - takes up 2 columns on large screens */}
            <div className="lg:col-span-2">
              <PresaleCard
                name="ToadSwap"
                symbol="TOAD"
                decimals={18}
                about="ToadSwap is a revolutionary DeFi platform that combines the best features of AMM and orderbook trading."
                totalSupply="1,000,000,000"
                poolAddress={bscAddress}
                tokenAddress={bscAddress}
                tokensForPresale="500,000,000"
                tokensForLiquidity="300,000,000"
                softCap="100 BNB"
                hardCap="200 BNB"
                presaleRate="100,000 TOAD per BNB"
                listingRate="90,000 TOAD per BNB"
                startTime="2025-01-15 14:00 UTC"
                endTime="2025-01-22 14:00 UTC"
                unsoldTokens="Burn"
                listingOn="PancakeSwap"
                liquidityPercent="60%"
                liquidityUnlockedTime="2026-01-15 14:00 UTC"
              />
            </div>

            {/* BuyCard - takes up 1 column */}
            <div className="lg:col-span-1">
              <BuyCard
                presaleEndsIn="3 days 5 hours 32 minutes"
                minBnb={0.1}
                maxBnb={2}
                minBuy="0.1 BNB"
                maxBuy="2 BNB"
                progress={45}
                raised="90/200 BNB"
              />
            </div>
          </div>

          {/* TokenomicCard and FaqAccordion */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <TokenomicCard
                tokenName="TOAD"
                presalePercent={50}
                liquidityPercent={30}
                unlockedPercent={10}
                burntPercent={10}
              />
              <FaqAccordion />
            </div>
          </div>

          {/* Top Divider */}
          <div className="w-full h-[1px] bg-gray-200 my-6" />

          {/* Disclaimer */}
          <Disclaimer />

          {/* Bottom Divider */}
          <div className="w-full h-[1px] bg-gray-200 my-6" />
          <Footer />
        </div>
      </main>
    </>
  );
}