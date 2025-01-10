'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PresaleSearch() {
  const router = useRouter();
  const [contract, setContract] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (contract && /^0x[a-fA-F0-9]{40}$/.test(contract)) {
      // 默认使用 BSC 链
      router.push(`/presale?chain=bsc&contract=${contract}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
      <input
        type="text"
        value={contract}
        onChange={(e) => setContract(e.target.value)}
        placeholder="输入合约地址 (0x...)"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        搜索
      </button>
    </form>
  );
}
