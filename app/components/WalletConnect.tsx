'use client';

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  ConnectWallet,
  useAddress,
} from "@thirdweb-dev/react";
import { Binance } from "@thirdweb-dev/chains";
import { InjectedWallet, WalletOptions } from "@thirdweb-dev/wallets";

const clientId = process.env.THIRDWEB_CLIENT_ID || "";

// 创建 TokenPocket 钱包配置
const tokenPocketWallet = () => ({
  id: "tokenpocket",
  meta: {
    name: "TokenPocket",
    iconURL: "https://www.tokenpocket.pro/favicon.ico",
    urls: {
      chrome: "https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii",
      android: "https://play.google.com/store/apps/details?id=vip.mytokenpocket",
      ios: "https://apps.apple.com/us/app/tp-global-wallet/id6444625622",
    },
  },
  create: (options: WalletOptions) => new InjectedWallet({
    ...options,
    dappMetadata: {
      name: "PinkSale",
      url: typeof window !== 'undefined' ? window.location.href : '',
    }
  }),
});

const WalletInfo = () => {
  const address = useAddress();
  
  if (address) {
    console.log("Connected wallet address:", address);
  }
  
  return <ConnectWallet 
    theme="light"
    btnTitle="Connect Wallet"
    modalTitle="Connect your wallet"
    modalSize="wide"
    style={{
      backgroundColor: '#ec4899',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '6px 16px',
      fontSize: '14px',
      fontWeight: '500',
      height: '36px',
    }}
  />;
};

const WalletConnect = () => {
  return (
    <ThirdwebProvider 
      activeChain={Binance}
      clientId={clientId}
      supportedWallets={[
        metamaskWallet(),
        tokenPocketWallet(),
        walletConnect(),
        coinbaseWallet()
      ]}
    >
      <WalletInfo />
    </ThirdwebProvider>
  );
};

export default WalletConnect;
