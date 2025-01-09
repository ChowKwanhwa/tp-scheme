interface PresaleConfig {
  name: string;
  symbol: string;
  decimals: number;
  about: string;
  totalSupply: string;
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
  tokenomics: {
    presalePercent: number;
    liquidityPercent: number;
    unlockedPercent: number;
    burntPercent: number;
  };
  socials: {
    website: string;
    twitter: string;
    telegram: string;
  };
}

const presales: { [key: string]: PresaleConfig } = {
  "2XfuoErTtDXnisY1F4PRTUrZ5GDXnsWJrWaz91Qi61Hy": {
    name: "ToadSwap",
    symbol: "TOAD",
    decimals: 18,
    about: "ToadSwap is a revolutionary DeFi platform that combines the best features of AMM and orderbook trading.",
    totalSupply: "1,000,000,000",
    tokensForPresale: "500,000,000",
    tokensForLiquidity: "300,000,000",
    softCap: "100 BNB",
    hardCap: "200 BNB",
    presaleRate: "100,000 TOAD per BNB",
    listingRate: "90,000 TOAD per BNB",
    startTime: "2025-01-15 14:00 UTC",
    endTime: "2025-01-22 14:00 UTC",
    unsoldTokens: "Burn",
    listingOn: "PancakeSwap",
    liquidityPercent: "60%",
    liquidityUnlockedTime: "2026-01-15 14:00 UTC",
    bannerImage: "/toad-banner.png",
    logoImage: "/toad-logo.png",
    tokenomics: {
      presalePercent: 50,
      liquidityPercent: 30,
      unlockedPercent: 10,
      burntPercent: 10
    },
    socials: {
      website: "https://www.toadsol.eu/",
      twitter: "https://x.com/ToadS0L",
      telegram: "https://t.me/Toadsol"
    }
  },
  "0x5E467a7F6f3C0c35248aF42937417B3321eAA5e2": {
    name: "BybyTrump",
    symbol: "BYBY",
    decimals: 18,
    about: "BybyTrump - An emerging cryptocurrency token inspired by PEPE",
    totalSupply: "1,000,000,000,000",
    tokensForPresale: "600,000,000,000",
    tokensForLiquidity: "300,000,000,000",
    softCap: "50 BNB",
    hardCap: "100 BNB",
    presaleRate: "6,000,000,000 BYBY per BNB",
    listingRate: "5,400,000,000 BYBY per BNB",
    startTime: "2025-01-20 14:00 UTC",
    endTime: "2025-01-27 14:00 UTC",
    unsoldTokens: "Burn",
    listingOn: "PancakeSwap",
    liquidityPercent: "70%",
    liquidityUnlockedTime: "2026-01-20 14:00 UTC",
    bannerImage: "/default-banner.jpg",
    logoImage: "/byby-logo.jpg",
    tokenomics: {
      presalePercent: 60,
      liquidityPercent: 30,
      unlockedPercent: 5,
      burntPercent: 5
    },
    socials: {
      website: "https://www.bybytrump.com/",
      twitter: "https://x.com/bybytrump",
      telegram: "https://t.me/bybytrump"
    }
  }
};

export const getPresaleConfig = (address: string): PresaleConfig | null => {
  return presales[address] || null;
};

export const defaultPresaleConfig: PresaleConfig = presales["0x5E467a7F6f3C0c35248aF42937417B3321eAA5e2"];
