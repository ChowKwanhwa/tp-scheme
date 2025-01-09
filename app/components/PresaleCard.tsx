'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, Twitter, Send } from "lucide-react";
import { CopyButton } from "./CopyButton";

interface PresaleCardProps {
  // Token Info
  name: string;
  symbol: string;
  decimals: number;
  about: string;
  totalSupply: string;
  bannerImage?: string;
  tokenLogo?: string;
  
  // Pool Info
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
}

const PresaleCard: React.FC<PresaleCardProps> = ({
  // Token Info
  name,
  symbol,
  decimals,
  about,
  totalSupply,
  bannerImage = "/toad-banner.png",
  tokenLogo = "/toad-logo.png",
  
  // Pool Info
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
}) => {
  return (
    <Card className="w-full overflow-visible">
      <div className="relative text-center">
        {/* Banner Image */}
        <div className="relative h-32">
          <Image
            src={bannerImage}
            alt="Banner"
            className="object-cover rounded-t-lg"
            fill
            priority
          />
        </div>

        {/* Token Logo */}
        <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-background">
            <Image
              src={tokenLogo}
              alt="Logo"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>

      <CardContent>
        {/* Title and Social Links */}
        <div className="mt-12 mb-6 text-center">
          <h2 className="text-xl font-semibold mb-4">{name} Presale</h2>
          <div className="flex justify-center gap-6 mb-6">
            <Link
              href="#"
              className="text-pink-500 hover:text-pink-600"
            >
              <Globe2 className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-pink-500 hover:text-pink-600"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-pink-500 hover:text-pink-600"
            >
              <Send className="w-5 h-5" />
            </Link>
          </div>
          <div className="border-t border-dotted border-gray-200"></div>
        </div>

        <div className="space-y-6">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-3">About</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">{about}</p>
          </div>

          {/* Token Details Section */}
          <div>
            <h3 className="font-bold text-lg mb-3">Token</h3>
            <div className="divide-y divide-dotted divide-gray-200">
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Address:</span>
                <div className="flex items-center gap-2 max-w-[60%]">
                  <span className="text-sm text-muted-foreground truncate">
                    {tokenAddress}
                  </span>
                  <CopyButton text={tokenAddress} />
                </div>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Name:</span>
                <span className="text-sm text-muted-foreground">{name}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Symbol:</span>
                <span className="text-sm text-muted-foreground">{symbol}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Decimals:</span>
                <span className="text-sm text-muted-foreground">{decimals}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Total Supply:</span>
                <span className="text-sm text-muted-foreground">{totalSupply}</span>
              </div>
            </div>
          </div>

          {/* Pool Info Section */}
          <div>
            <h3 className="font-bold text-lg mb-3">Pool Info</h3>
            <div className="divide-y divide-dotted divide-gray-200">
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Address:</span>
                <div className="flex items-center gap-2 max-w-[60%]">
                  <span className="text-sm text-muted-foreground truncate">
                    {poolAddress}
                  </span>
                  <CopyButton text={poolAddress} />
                </div>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Tokens for Presale:</span>
                <span className="text-sm text-muted-foreground">{tokensForPresale}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Tokens for Liquidity:</span>
                <span className="text-sm text-muted-foreground">{tokensForLiquidity}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Soft Cap:</span>
                <span className="text-sm text-muted-foreground">{softCap}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Hard Cap:</span>
                <span className="text-sm text-muted-foreground">{hardCap}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Presale Rate:</span>
                <span className="text-sm text-muted-foreground">{presaleRate}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Listing Rate:</span>
                <span className="text-sm text-muted-foreground">{listingRate}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Start Time:</span>
                <span className="text-sm text-muted-foreground">{startTime}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">End Time:</span>
                <span className="text-sm text-muted-foreground">{endTime}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Unsold Tokens:</span>
                <span className="text-sm text-muted-foreground">{unsoldTokens}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Listing On:</span>
                <span className="text-sm text-muted-foreground">{listingOn}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Liquidity Percent:</span>
                <span className="text-sm text-muted-foreground">{liquidityPercent}</span>
              </div>
              
              <div className="py-3 flex items-center justify-between">
                <span className="text-sm font-medium">Liquidity Unlocked Time:</span>
                <span className="text-sm text-muted-foreground">{liquidityUnlockedTime}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PresaleCard;
