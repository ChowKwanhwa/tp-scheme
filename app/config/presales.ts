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
  buyCard: {
    minBnb: number;
    maxBnb: number;
    amountRaised: string;
    progress: number;
  };
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

// 添加类型定义使代码更清晰
type ContractAddress = string;
type PresaleMap = { [contract: ContractAddress]: PresaleConfig };

const presales: PresaleMap = {
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
    buyCard: {
      minBnb: 0.1,
      maxBnb: 2,
      amountRaised: "90/200 BNB",
      progress: 45
    },
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
    buyCard: {
      minBnb: 0.004,
      maxBnb: 2,
      amountRaised: "180/200 BNB",
      progress: 90
    },
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

export const getPresaleConfig = (contract: ContractAddress): PresaleConfig | null => {
  return presales[contract] || null;
};

export const defaultPresaleConfig: PresaleConfig = presales["0x5E467a7F6f3C0c35248aF42937417B3321eAA5e2"];
