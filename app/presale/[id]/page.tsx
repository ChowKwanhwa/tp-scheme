'use client';

import Image from 'next/image';

export default function PresalePage() {
  const presaleData = {
    name: 'Toad Presale',
    status: 'Ended',
    description: 'Toad - An emerging cryptocurrency token inspired by PEPE',
    features: [
      '0% TAX',
      '100% LP burned at launch',
      '0% Team tokens',
      'The development team behind TOAD remains anonymous, following the tradition of Bitcoin\'s founder, Satoshi Nakamoto. This ensures a focus on the technology and community rather than individual personalities.'
    ],
    token: {
      address: 'FViMpSphQr2bX81STYyn1XjU3SRfdF3NcMCQzTbFCzq',
      name: 'Toad',
      symbol: '$TOAD',
      decimals: 4,
      totalSupply: '420,538,339,864,937.5'
    },
    pool: {
      type: 'Manual Listing',
      address: '2XkbGTsDZiHsYF5tRPUZ3GDzNxWrWasTQdFHzj',
      tokensForPresale: '309,999,999,999,983 $TOAD',
      softCap: '42.9 SOL',
      hardCap: '43 SOL',
      presaleRate: '1 SOL = 7,209,302,325,581 $TOAD',
      startTime: '2024.05.30 18:00 (UTC)',
      endTime: '2024.05.30 21:00 (UTC)',
      unsoldTokens: '🔥 Burn',
      liquidityPercent: '(Manual Listing)'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner and Logo */}
      <div className="relative w-full h-48 bg-green-800">
        <Image
          src="/toad-banner.jpg"
          alt="Toad and Pepe Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 rounded-full bg-orange-400 overflow-hidden">
            <Image
              src="/toad-logo.png"
              alt="Toad Logo"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* Title and Status */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">{presaleData.name}</h1>
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
            {presaleData.status}
          </span>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-pink-500 hover:text-pink-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.224 17.871c-.095.066-.192.13-.292.191-.018.011-.036.022-.054.033-.091.055-.183.108-.277.159-.034.018-.068.036-.103.054-.088.045-.177.088-.267.129-.042.019-.085.037-.127.055-.085.035-.171.069-.258.101-.048.018-.096.036-.145.053-.082.027-.165.052-.248.077-.054.016-.108.032-.163.047-.08.021-.161.039-.242.057-.059.013-.118.027-.178.039-.078.015-.156.027-.235.039-.063.01-.126.021-.19.029-.076.01-.152.017-.229.024-.066.006-.132.013-.199.017-.074.005-.148.008-.223.01-.069.002-.138.005-.207.005-.07 0-.139-.003-.208-.005-.074-.002-.149-.005-.222-.01-.067-.004-.133-.011-.199-.017-.077-.007-.153-.014-.229-.024-.064-.008-.127-.019-.19-.029-.079-.012-.157-.024-.235-.039-.06-.012-.119-.026-.178-.039-.081-.018-.162-.036-.242-.057-.055-.015-.109-.031-.163-.047-.083-.025-.166-.05-.248-.077-.049-.017-.097-.035-.145-.053-.087-.032-.173-.066-.258-.101-.042-.018-.085-.036-.127-.055-.09-.041-.179-.084-.267-.129-.035-.018-.069-.036-.103-.054-.094-.051-.186-.104-.277-.159-.018-.011-.036-.022-.054-.033-.1-.061-.197-.125-.292-.191-.054-.037-.107-.075-.159-.114-.019-.014-.039-.028-.058-.043V7.429c0-.172.127-.315.294-.339l6.901-.981c.085-.012.171.02.233.082.062.061.097.146.097.234v9.098c0 .199-.077.389-.217.54-.043.046-.088.091-.135.134-.054.051-.11.1-.167.148zM6.5 18c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25S7.19 18 6.5 18zm3.5-8.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <p className="text-gray-600 mb-4">{presaleData.description}</p>
          <ul className="space-y-2">
            {presaleData.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>

        {/* Token Info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Token</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-sm font-mono break-all">{presaleData.token.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p>{presaleData.token.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Symbol</p>
                <p>{presaleData.token.symbol}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Decimals</p>
                <p>{presaleData.token.decimals}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Supply</p>
                <p>{presaleData.token.totalSupply}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pool Info */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Pool Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Manual Listing</p>
                <p className="text-blue-500">Liquidity will not be automatically added!</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-sm font-mono break-all">{presaleData.pool.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tokens For Presale</p>
                <p>{presaleData.pool.tokensForPresale}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Soft Cap</p>
                <p>{presaleData.pool.softCap}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Hard Cap</p>
                <p>{presaleData.pool.hardCap}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Presale Rate</p>
                <p>{presaleData.pool.presaleRate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Start Time</p>
                <p>{presaleData.pool.startTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">End Time</p>
                <p>{presaleData.pool.endTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Unsold Tokens</p>
                <p>{presaleData.pool.unsoldTokens}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Liquidity Percent</p>
                <p>{presaleData.pool.liquidityPercent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
