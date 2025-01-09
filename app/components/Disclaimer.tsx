import React from 'react';

const Disclaimer = () => {
  return (
    <div className="text-sm text-gray-600">
      Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss 
      occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be 
      found via{' '}
      <a 
        href="https://academy.binance.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-600"
      >
        Binance Academy
      </a>
      .
    </div>
  );
};

export default Disclaimer;
