import React from 'react';

interface DisclaimerProps {
  className?: string;
}

export default function Disclaimer({ className }: DisclaimerProps) {
  return (
    <div className={`${className} py-8 bg-white`}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold">Disclaimer</h2>
        </div>
        <div className="text-gray-600">
          <p className="mb-2">
            Cryptocurrency investments are subject to high market risks. Please make your investments cautiously. 
            We will not be responsible for your investment losses.
          </p>
          <p>
            The information provided on this platform is for general information purposes only and does not constitute 
            investment advice, financial advice, trading advice, or any other sort of advice.
          </p>
        </div>
      </div>
    </div>
  );
}
