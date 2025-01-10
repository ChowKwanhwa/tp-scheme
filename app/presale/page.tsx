'use client';

import { useSearchParams } from 'next/navigation';
import { getPresaleConfig, defaultPresaleConfig } from '../config/presales';
import PresaleCard from '../components/PresaleCard';
import BuyCard from '../components/BuyCard';
import TokenomicCard from '../components/TokenomicCard';
import FaqAccordion from '../components/FaqAccordion';
import Header from '../components/Header';
import Trending from '../components/Trending';
import BonusBanner from '../components/BonusBanner';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';

export default function PresalePage() {
  const searchParams = useSearchParams();
  const chain = searchParams.get('chain');
  const contract = searchParams.get('contract');

  // 直接使用合约地址作为标识符
  const presaleConfig = contract ? getPresaleConfig(contract) : defaultPresaleConfig;

  if (!presaleConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Presale Not Found</h1>
          <p className="text-gray-600">The requested presale does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <BonusBanner />
      <Header />
      <Trending />
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
              poolAddress={contract || ""}
              tokenAddress={contract || ""}
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
              minBnb={presaleConfig.buyCard.minBnb}
              maxBnb={presaleConfig.buyCard.maxBnb}
              minBuy={`${presaleConfig.buyCard.minBnb} BNB`}
              maxBuy={`${presaleConfig.buyCard.maxBnb} BNB`}
              progress={presaleConfig.buyCard.progress}
              raised={presaleConfig.buyCard.amountRaised}
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
      </div>

      {/* Top Divider */}
      <div className="w-full h-[1px] bg-gray-200 my-6" />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4">
        <Disclaimer />
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-[1px] bg-gray-200 my-6" />
      
      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4">
        <Footer />
      </div>
    </main>
  );
}
