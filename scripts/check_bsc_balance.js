require('dotenv').config();
const Web3 = require('web3');
const axios = require('axios');
const fs = require('fs');

// BSC Mainnet RPC URL from .env
const BSC_RPC_URL = process.env.BSC_CHAINSTACK_ENDPOINT;

// Contract addresses
const BUSD_ADDRESS = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const USDT_ADDRESS = '0x55d398326f99059ff775485246999027b3197955';
const WBNB_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const PANCAKE_ROUTER = '0x10ED43C718714eb63d5aA57B78B54704E256024E';

// Initialize Web3
const web3 = new Web3(BSC_RPC_URL);

// Minimum ABI to get token info
const minABI = [
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "type": "function"
  }
];

// Router ABI for price checking
const routerABI = [
  {
    "inputs": [
      {"internalType": "uint256", "name": "amountIn", "type": "uint256"},
      {"internalType": "address[]", "name": "path", "type": "address[]"}
    ],
    "name": "getAmountsOut",
    "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
  }
];

async function getBNBPrice() {
  try {
    const router = new web3.eth.Contract(routerABI, PANCAKE_ROUTER);
    const oneToken = web3.utils.toBN(10).pow(web3.utils.toBN(18)); // BNB has 18 decimals
    const amounts = await router.methods.getAmountsOut(
      oneToken.toString(),
      [WBNB_ADDRESS, BUSD_ADDRESS]
    ).call();
    return amounts[1] / Math.pow(10, 18);
  } catch (error) {
    console.error('Error getting BNB price:', error.message);
    return 0;
  }
}

async function getTokenBalance(tokenAddress, address) {
  try {
    const contract = new web3.eth.Contract(minABI, tokenAddress);
    const balance = await contract.methods.balanceOf(address).call();
    const decimals = await contract.methods.decimals().call();
    return balance / Math.pow(10, decimals);
  } catch (error) {
    console.error(`Error getting balance for token ${tokenAddress}:`, error.message);
    return 0;
  }
}

async function getBNBBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
  } catch (error) {
    console.error('Error getting BNB balance:', error.message);
    return 0;
  }
}

async function checkWalletAssets() {
  try {
    // Read addresses from CSV file
    const addresses = fs.readFileSync('address.csv', 'utf8')
      .split('\n')
      .map(addr => addr.trim())
      .filter(addr => addr);

    let grandTotal = 0;

    for (const address of addresses) {
      console.log(`\n========== Checking assets for address: ${address} ==========\n`);

      // 并行获取所有余额和价格
      const [
        bnbBalance,
        bnbPrice,
        busdBalance,
        usdtBalance
      ] = await Promise.all([
        getBNBBalance(address),
        getBNBPrice(),
        getTokenBalance(BUSD_ADDRESS, address),
        getTokenBalance(USDT_ADDRESS, address)
      ]);

      // 计算 BNB 价值
      const bnbValue = bnbBalance * bnbPrice;
      console.log(`BNB Balance: ${parseFloat(bnbBalance).toFixed(8)} BNB`);
      console.log(`BNB Price: $${bnbPrice.toFixed(2)}`);
      console.log(`Value: $${bnbValue.toFixed(2)}\n`);

      // BUSD 余额和价值
      console.log(`BUSD Balance: ${busdBalance.toFixed(2)} BUSD`);
      console.log(`Value: $${busdBalance.toFixed(2)}\n`);

      // USDT 余额和价值
      console.log(`USDT Balance: ${usdtBalance.toFixed(2)} USDT`);
      console.log(`Value: $${usdtBalance.toFixed(2)}\n`);

      // 计算总价值
      const totalValue = bnbValue + busdBalance + usdtBalance;
      console.log(`Total Portfolio Value: $${totalValue.toFixed(2)}`);
      console.log('='.repeat(60));
      
      grandTotal += totalValue;
    }

    if (addresses.length > 1) {
      console.log(`\nGrand Total for All Addresses: $${grandTotal.toFixed(2)}`);
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkWalletAssets();
