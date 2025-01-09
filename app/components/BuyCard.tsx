'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import Web3 from 'web3';
import { toast } from 'sonner';

interface BuyCardProps {
  minBnb: number;
  maxBnb: number;
  minBuy: string;
  maxBuy: string;
  progress: number;
  raised: string;
}

const PRESALE_ADDRESS = '0x4048F599B9b00B166e1b7003de0C359782a1b675';

export default function BuyCard({
  minBnb,
  maxBnb,
  minBuy,
  maxBuy,
  progress,
  raised,
}: BuyCardProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 30,
    seconds: 0
  });
  const [amount, setAmount] = useState(minBnb.toString());
  const [isBlinking, setIsBlinking] = useState(false);
  const [balance, setBalance] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 监听钱包地址变化
  useEffect(() => {
    const checkAccount = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAddress(accounts[0]);
          }
        } catch (error) {
          console.error('Error checking account:', error);
        }
      }
    };

    checkAccount();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        } else {
          setAddress(null);
        }
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {});
      }
    };
  }, []);

  // 获取余额
  useEffect(() => {
    const getBalance = async () => {
      if (!address || typeof window === 'undefined' || !window.ethereum) return;

      try {
        // BSC Mainnet chain ID (56 in decimal, 0x38 in hex)
        const BSC_CHAIN_ID = '0x38';
        const BSC_CHAIN_ID_DECIMAL = 56;
        
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const currentChainIdDecimal = parseInt(chainId, 16);
        console.log('Current chain ID (hex):', chainId);
        console.log('Current chain ID (decimal):', currentChainIdDecimal);
        
        if (currentChainIdDecimal !== BSC_CHAIN_ID_DECIMAL) {
          console.log('Switching to BSC network...');
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: BSC_CHAIN_ID }],
            });
          } catch (switchError: any) {
            // 如果 BSC 网络没有添加，则添加它
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
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com/']
                  }
                ]
              });
            } else {
              throw switchError;
            }
          }
        }

        // 确保我们已经连接到钱包
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const web3 = new Web3(window.ethereum);
        
        // 获取余额（返回的是 Wei）
        const balanceWei = await web3.eth.getBalance(address);
        console.log('Balance in Wei:', balanceWei);
        
        // 转换为 BNB（Ether）
        const balanceBNB = web3.utils.fromWei(balanceWei, 'ether');
        console.log('Balance in BNB:', balanceBNB);
        
        setBalance(balanceBNB);
      } catch (error) {
        console.error('Error getting balance:', error);
        setError('Error getting wallet balance');
      }
    };

    getBalance();
  }, [address]);

  const GAS_RESERVE = 0.002; // 预留 0.003 BNB 作为 gas 费用

  const handleMaxClick = () => {
    console.log('Max button clicked');
    console.log('Current address:', address);
    console.log('Current balance (raw):', balance);

    if (!balance) {
      console.log('No balance available');
      return;
    }

    const walletBalance = parseFloat(balance);
    console.log('Wallet balance (parsed):', walletBalance);
    console.log('Min BNB required:', minBnb);
    console.log('Max BNB allowed:', maxBnb);

    // 计算可用余额（总余额减去 gas 预留）
    const availableBalance = Math.max(0, walletBalance - GAS_RESERVE);
    console.log('Available balance after gas reserve:', availableBalance);

    if (availableBalance < minBnb) {
      const error = `Insufficient balance. Minimum buy amount is ${minBnb} BNB (plus ${GAS_RESERVE} BNB for gas)`;
      console.log('Error:', error);
      setError(error);
      return;
    }

    const maxAmount = Math.min(availableBalance, maxBnb);
    console.log('Setting max amount:', maxAmount);
    setAmount(maxAmount.toFixed(4));
    setError(null);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setError(null);
    
    if (value === '') {
      setAmount('');
      return;
    }
    
    const numValue = Number(value);
    if (isNaN(numValue)) return;
    
    if (numValue > maxBnb) {
      setAmount(maxBnb.toString());
    } else {
      setAmount(value);
    }
  };

  const handleBuyNow = async () => {
    console.log('Buy Now clicked');
    console.log('Current amount:', amount);
    console.log('Current address:', address);
    console.log('Current balance:', balance);

    setError(null);

    if (!address) {
      setError('Please connect your wallet first');
      return;
    }

    if (!window.ethereum) {
      setError('Please install MetaMask');
      return;
    }

    const amountNum = parseFloat(amount);
    console.log('Amount in number:', amountNum);
    console.log('Min BNB:', minBnb);
    
    // 检查最小购买金额
    if (amountNum < minBnb) {
      console.log('Amount is less than minimum');
      setError(`Amount is less than minimum (${minBnb} BNB)`);
      return;
    }

    // 检查最大购买金额
    if (amountNum > maxBnb) {
      console.log('Amount exceeds maximum');
      setError(`Maximum buy amount is ${maxBnb} BNB`);
      return;
    }

    // 检查钱包余额
    if (balance) {
      const balanceNum = parseFloat(balance);
      console.log('Balance in number:', balanceNum);
      console.log('Required amount:', amountNum);
      
      if (balanceNum < amountNum) {
        console.log('Insufficient balance');
        setError('Insufficient balance');
        return;
      }
    }

    try {
      console.log('Starting transaction...');
      setIsLoading(true);
      const web3 = new Web3(window.ethereum);

      // 将数量转换为 Wei
      const amountWei = web3.utils.toWei(amount, 'ether');
      console.log('Amount in Wei:', amountWei);

      // 请求用户授权
      console.log('Requesting account access...');
      await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      // 发送交易
      const transaction = {
        from: address,
        to: PRESALE_ADDRESS,
        value: '0x' + BigInt(amountWei).toString(16), // 直接使用 BigInt 转换为十六进制
        gas: '0x5208', // 21000 in hex
      };

      console.log('Sending transaction:', transaction);

      // 请求用户确认交易
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transaction],
      });

      toast.success('Transaction submitted!');
      console.log('Transaction hash:', txHash);

    } catch (error: any) {
      console.error('Transaction error:', error);
      setError(error.message || 'Transaction failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    const blinkTimer = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(blinkTimer);
    };
  }, []);

  const formatTimeLeft = () => {
    const { hours, minutes, seconds } = timeLeft;
    return (
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-1">
          <div className="flex flex-col items-center">
            <div className="bg-pink-500 text-white text-2xl font-bold px-3 py-2 rounded-lg min-w-[3rem] text-center">
              {hours.toString().padStart(2, '0')}
            </div>
            <span className="text-xs text-gray-500 mt-1">HOUR</span>
          </div>
          <div className="text-2xl font-bold text-pink-500">:</div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-500 text-white text-2xl font-bold px-3 py-2 rounded-lg min-w-[3rem] text-center">
              {minutes.toString().padStart(2, '0')}
            </div>
            <span className="text-xs text-gray-500 mt-1">MIN</span>
          </div>
          <div className="text-2xl font-bold text-pink-500">:</div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-500 text-white text-2xl font-bold px-3 py-2 rounded-lg min-w-[3rem] text-center">
              {seconds.toString().padStart(2, '0')}
            </div>
            <span className="text-xs text-gray-500 mt-1">SEC</span>
          </div>
        </div>
        <div className={`mt-3 text-sm font-medium ${isBlinking ? 'text-pink-600' : 'text-pink-500'} animate-bounce`}>
          🔥 Don&apos;t miss out! Time is running out! 🔥
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
        Make sure the website is <span className="font-semibold">pinksale.finance</span>
      </div>
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-pink-600 animate-pulse" />
        <CardContent className="p-6 space-y-6">
          {/* Presale ends in */}
          <div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-3">Presale Ends In:</div>
              {formatTimeLeft()}
            </div>
            <Progress 
              value={progress} 
              className="mt-4 h-2 bg-gradient-to-r from-pink-500 to-pink-600"
            />
          </div>

          {/* Amount raised */}
          <div className="border border-pink-100 bg-pink-50 rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-1">Amount Raised:</div>
            <div className="text-lg font-bold text-pink-600">{raised}</div>
          </div>

          {/* Amount to buy */}
          <div>
            <div className="text-sm text-gray-500 mb-1">Amount to Buy:</div>
            <div className="relative">
              <input
                type="number"
                min={minBnb}
                max={maxBnb}
                step="0.1"
                value={amount}
                onChange={handleAmountChange}
                className="w-full h-10 pl-3 pr-20 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <div className="absolute right-0 top-0 h-full flex items-center">
                <button
                  onClick={handleMaxClick}
                  type="button"
                  className="h-full px-2 text-sm font-medium text-pink-500 hover:text-pink-600 border-l border-gray-200 hover:bg-gray-50 active:bg-gray-100"
                >
                  MAX
                </button>
                <div className="px-3 text-gray-400">BNB</div>
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-sm text-gray-500">Min Buy: {minBuy}</span>
              <span className="text-sm text-gray-500">Max Buy: {maxBuy}</span>
            </div>
            {address && balance && (
              <div className="text-right mt-1 text-xs text-gray-400">
                Balance: {parseFloat(balance).toFixed(4)} BNB
              </div>
            )}
            {error && (
              <div className="mt-2 text-sm text-red-500">
                {error}
              </div>
            )}
          </div>

          {/* Buy button */}
          <button 
            onClick={handleBuyNow}
            disabled={isLoading || !address}
            type="button"
            className="w-full h-12 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-bold text-lg hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {isLoading ? 'Processing...' : 'Buy Now'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>

          {/* Additional info with urgency */}
          <div className="text-center space-y-2">
            <div className="text-sm text-gray-500">
              Make sure you have enough BNB to pay for the transaction fees
            </div>
            <div className="text-xs text-pink-500 font-medium animate-pulse">
              ⚡ Limited time opportunity - Join the presale now! ⚡
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
