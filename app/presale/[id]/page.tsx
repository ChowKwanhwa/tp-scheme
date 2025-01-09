'use client';

import { useParams } from 'next/navigation';
import { getPresaleConfig, defaultPresaleConfig } from '@/app/config/presales';
import PresaleCard from '@/app/components/PresaleCard';
import BuyCard from '@/app/components/BuyCard';
import TokenomicCard from '@/app/components/TokenomicCard';
import FaqAccordion from '@/app/components/FaqAccordion';

export default function PresalePage() {
  const params = useParams();
  const presaleConfig = params.id ? getPresaleConfig(params.id as string) : defaultPresaleConfig;

  if (!presaleConfig) {
    return <div>Presale not found</div>;
  }

  return (
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
              poolAddress={params.id as string}
              tokenAddress={params.id as string}
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
    </main>
  );
}
