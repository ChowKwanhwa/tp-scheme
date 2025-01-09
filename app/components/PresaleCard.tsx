'use client';

import Image from 'next/image';
import { Card, CardContent } from "./ui/card";
import CopyButton from './CopyButton';

interface PresaleCardProps {
  name: string;
  symbol: string;
  decimals: number;
  about: string;
  totalSupply: string;
  poolAddress: string;
  tokenAddress: string;
  tokensForPresale: string;
  tokensForLiquidity: string;
  softCap: string;
  hardCap: string;
  presaleRate: string;
  listingRate: string;
  startTime: string;
  endTime: string;
  unsoldTokens: string;
  listingOn: string;
  liquidityPercent: string;
  liquidityUnlockedTime: string;
  bannerImage: string;
  logoImage: string;
  socials: {
    website: string;
    twitter: string;
    telegram: string;
  };
}

const PresaleCard: React.FC<PresaleCardProps> = ({
  name,
  symbol,
  decimals,
  about,
  totalSupply,
  poolAddress,
  tokenAddress,
  tokensForPresale,
  tokensForLiquidity,
  softCap,
  hardCap,
  presaleRate,
  listingRate,
  startTime,
  endTime,
  unsoldTokens,
  listingOn,
  liquidityPercent,
  liquidityUnlockedTime,
  bannerImage,
  logoImage,
  socials,
}) => {
  return (
    <Card className="w-full">
      <div className="relative w-full h-48">
        <Image
          src={bannerImage}
          alt={`${name} Banner`}
          fill
          priority
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="relative -mt-12 flex justify-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-white">
          <Image
            src={logoImage}
            alt={`${name} Logo`}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">{name} Presale</h2>
          <div className="flex justify-center gap-2 mt-2">
            <a href={socials.website} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href={socials.telegram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-600">{about}</p>
          </div>

          {/* Dotted line separator */}
          <div className="border-t border-dotted border-gray-300" />

          <div>
            <h3 className="text-lg font-semibold mb-2">Token</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Address:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 max-w-[200px] truncate">{tokenAddress}</span>
                  <CopyButton text={tokenAddress} />
                </div>
              </div>
              <div className="flex justify-between">
                <span>Name:</span>
                <span className="text-gray-600">{name}</span>
              </div>
              <div className="flex justify-between">
                <span>Symbol:</span>
                <span className="text-gray-600">{symbol}</span>
              </div>
              <div className="flex justify-between">
                <span>Decimals:</span>
                <span className="text-gray-600">{decimals}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Supply:</span>
                <span className="text-gray-600">{totalSupply}</span>
              </div>
            </div>
          </div>

          {/* Dotted line separator */}
          <div className="border-t border-dotted border-gray-300" />

          <div>
            <h3 className="text-lg font-semibold mb-2">Pool Info</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Address:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 max-w-[200px] truncate">{poolAddress}</span>
                  <CopyButton text={poolAddress} />
                </div>
              </div>
              <div className="flex justify-between">
                <span>Tokens for Presale:</span>
                <span className="text-gray-600">{tokensForPresale}</span>
              </div>
              <div className="flex justify-between">
                <span>Tokens for Liquidity:</span>
                <span className="text-gray-600">{tokensForLiquidity}</span>
              </div>
              <div className="flex justify-between">
                <span>Soft Cap:</span>
                <span className="text-gray-600">{softCap}</span>
              </div>
              <div className="flex justify-between">
                <span>Hard Cap:</span>
                <span className="text-gray-600">{hardCap}</span>
              </div>
              <div className="flex justify-between">
                <span>Presale Rate:</span>
                <span className="text-gray-600">{presaleRate}</span>
              </div>
              <div className="flex justify-between">
                <span>Listing Rate:</span>
                <span className="text-gray-600">{listingRate}</span>
              </div>
              <div className="flex justify-between">
                <span>Start Time:</span>
                <span className="text-gray-600">{startTime}</span>
              </div>
              <div className="flex justify-between">
                <span>End Time:</span>
                <span className="text-gray-600">{endTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Unsold Tokens:</span>
                <span className="text-gray-600">{unsoldTokens}</span>
              </div>
              <div className="flex justify-between">
                <span>Listing On:</span>
                <span className="text-gray-600">{listingOn}</span>
              </div>
              <div className="flex justify-between">
                <span>Liquidity Percent:</span>
                <span className="text-gray-600">{liquidityPercent}</span>
              </div>
              <div className="flex justify-between">
                <span>Liquidity Unlocked Time:</span>
                <span className="text-gray-600">{liquidityUnlockedTime}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PresaleCard;
