'use client';

import {
  ThirdwebProvider,
  coinbaseWallet,
  walletConnect,
  ConnectWallet,
  useAddress,
  useDisconnect,
  useConnectionStatus,
  useWallet,
  useSwitchChain,
} from "@thirdweb-dev/react";
import { Binance } from "@thirdweb-dev/chains";
import { InjectedWallet, WalletOptions } from "@thirdweb-dev/wallets";
import { useEffect, useRef } from "react";

const clientId = process.env.THIRDWEB_CLIENT_ID || "";

// BSC 链的配置
const BSC_CHAIN_ID = "0x38"; // BSC Mainnet
const BSC_RPC = "https://bsc-dataseed.binance.org/";

// 创建 MetaMask 钱包配置
const metamaskWallet = () => ({
  id: "metamask",
  meta: {
    name: "MetaMask",
    iconURL: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
    urls: {
      chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
      firefox: "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",
      brave: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    },
  },
  create: (options: WalletOptions) => {
    if (typeof window === 'undefined' || !window.ethereum?.isMetaMask) {
      throw new Error('MetaMask not installed');
    }
    return new InjectedWallet({
      ...options,
      dappMetadata: {
        name: "PinkSale",
        url: window.location.href,
      },
      walletId: "metamask"
    });
  }
});

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
  create: (options: WalletOptions) => {
    if (typeof window === 'undefined' || !window.ethereum?.isTokenPocket) {
      throw new Error('TokenPocket not installed');
    }
    return new InjectedWallet({
      ...options,
      dappMetadata: {
        name: "PinkSale",
        url: window.location.href,
      },
      walletId: "tokenpocket"
    });
  }
});

const WalletInfo = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const connectionStatus = useConnectionStatus();
  const wallet = useWallet();
  const switchChain = useSwitchChain();
  const previousStatus = useRef(connectionStatus);
  
  // 处理连接状态变化
  useEffect(() => {
    const handleConnection = async () => {
      // 当钱包刚连接成功时
      if (previousStatus.current !== "connected" && connectionStatus === "connected" && address) {
        console.log("Connected wallet address:", address);
        
        try {
          // 请求切换到 BSC 链
          if (window.ethereum) {
            try {
              // 首先尝试切换到 BSC
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: BSC_CHAIN_ID }],
              });
            } catch (switchError: any) {
              // 如果链不存在，则添加 BSC 链
              if (switchError.code === 4902) {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: BSC_CHAIN_ID,
                      chainName: 'Binance Smart Chain',
                      nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18
                      },
                      rpcUrls: [BSC_RPC],
                      blockExplorerUrls: ['https://bscscan.com/']
                    }
                  ]
                });
              } else {
                throw switchError;
              }
            }
          }
          
          // 使用 ThirdWeb 的 switchChain
          await switchChain(Binance.chainId);
          
        } catch (error) {
          console.error("Error switching to BSC:", error);
        }
      }
    };

    handleConnection();
    previousStatus.current = connectionStatus;
  }, [connectionStatus, address, switchChain]);

  // 处理断开连接
  useEffect(() => {
    const handleDisconnect = async () => {
      try {
        if (previousStatus.current === "connected" && connectionStatus === "disconnected") {
          if (window.ethereum?.isMetaMask || window.ethereum?.isTokenPocket) {
            await window.ethereum.request({
              method: "wallet_requestPermissions",
              params: [{ eth_accounts: {} }],
            });
          }

          if (typeof window !== 'undefined') {
            localStorage.clear();
            window.location.reload();
          }
        }
      } catch (error) {
        console.error("Error disconnecting:", error);
      }
    };

    handleDisconnect();
  }, [connectionStatus]);
  
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
        walletConnect({
          projectId: clientId,
          qrModalOptions: {
            themeMode: "light",
          },
        }),
        coinbaseWallet()
      ]}
    >
      <WalletInfo />
    </ThirdwebProvider>
  );
};

export default WalletConnect;
