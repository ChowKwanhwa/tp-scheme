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
import { getPresaleConfig, defaultPresaleConfig } from './config/presales';

export default function Home() {
  const searchParams = useSearchParams();
  const bscAddress = searchParams.get('bsc');
  const presaleConfig = bscAddress ? getPresaleConfig(bscAddress) : defaultPresaleConfig;

  if (!presaleConfig) {
    return <div>Presale not found</div>;
  }

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
                name={presaleConfig.name}
                symbol={presaleConfig.symbol}
                decimals={presaleConfig.decimals}
                about={presaleConfig.about}
                totalSupply={presaleConfig.totalSupply}
                poolAddress={bscAddress || ""}
                tokenAddress={bscAddress || ""}
                tokensForPresale={presaleConfig.tokensForPresale}
                tokensForLiquidity={presaleConfig.tokensForLiquidity}
                softCap={presaleConfig.softCap}
                hardCap={presaleConfig.hardCap}
                presaleRate={presaleConfig.presaleRate}
                listingRate={presaleConfig.listingRate}
                startTime={presaleConfig.startTime}
                endTime={presaleConfig.endTime}
                unsoldTokens={presaleConfig.unsoldTokens}
                listingOn={presaleConfig.listingOn}
                liquidityPercent={presaleConfig.liquidityPercent}
                liquidityUnlockedTime={presaleConfig.liquidityUnlockedTime}
                bannerImage={presaleConfig.bannerImage}
                logoImage={presaleConfig.logoImage}
                socials={presaleConfig.socials}
              />
            </div>

            {/* BuyCard - takes up 1 column */}
            <div className="lg:col-span-1">
              <BuyCard
                minBnb={0.2}
                maxBnb={2}
                minBuy="0.2 BNB"
                maxBuy="2 BNB"
                progress={45}
                raised="180/200 BNB"
              />
            </div>
          </div>

          {/* TokenomicCard and FaqAccordion */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <TokenomicCard
                tokenName={presaleConfig.symbol}
                presalePercent={presaleConfig.tokenomics.presalePercent}
                liquidityPercent={presaleConfig.tokenomics.liquidityPercent}
                unlockedPercent={presaleConfig.tokenomics.unlockedPercent}
                burntPercent={presaleConfig.tokenomics.burntPercent}
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