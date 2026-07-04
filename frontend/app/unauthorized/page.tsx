"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="bg-red-500 p-8 text-center flex justify-center">
          <ShieldAlert className="h-20 w-20 text-white" />
        </div>
        <div className="p-8 text-center space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">Access Denied</h1>
          <p className="text-slate-600 text-lg">
            You do not have permission to view this page. Please log in with the appropriate account to continue.
          </p>
          <div className="pt-4">
            <Link href="/login">
              <Button className="w-full h-12 text-base rounded-xl">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Return to Login
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
