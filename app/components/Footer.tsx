"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-pink-500 text-2xl font-bold">🌸 PinkSale</span>
            </div>
            <p className="text-sm text-gray-600">
              PinkSale helps everyone to create their own tokens and token sales in few seconds.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold mb-3 uppercase text-sm">Useful Links</h3>
            <ul className="-space-y-0.5">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500 leading-relaxed">
                  Pools alert
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500 leading-relaxed">
                  KYC & Audit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500 leading-relaxed">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500 leading-relaxed">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-pink-500 leading-relaxed">
                  Pinksale V1
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2L15 22L11 13L2 9L22 2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>

            {/* PinkSale Price */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2 uppercase text-sm">PinkSale Price</h3>
              <div className="text-sm text-gray-600">$0.00</div>
            </div>
          </div>

          {/* Interface */}
          <div>
            <h3 className="font-semibold mb-4 uppercase text-sm">Interface</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-500">
                  <Sun size={16} />
                  <span>Light mode</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-500">
                  <Moon size={16} />
                  <span>Dark mode</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
