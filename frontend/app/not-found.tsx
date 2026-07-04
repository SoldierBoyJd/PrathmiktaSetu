"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-6"
      >
        <div className="flex justify-center mb-8 relative">
          <div className="text-[150px] font-black text-slate-200 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <Search className="h-10 w-10 text-teal-500" />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Page not found</h1>
        <p className="text-slate-600 text-lg max-w-sm mx-auto">
          The page you are looking for doesn't exist or has been moved to a different location.
        </p>
        
        <div className="pt-4">
          <Link href="/login">
            <Button className="h-12 px-8 text-base rounded-full shadow-lg shadow-blue-500/30">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
