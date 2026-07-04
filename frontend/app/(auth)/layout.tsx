import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-slate-900">
      {/* Left side: Branding / Illustration */}
      <div className="md:w-1/2 bg-blue-900 text-white flex flex-col justify-center items-center p-12 relative overflow-hidden">
        {/* Subtle glassmorphism circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-md text-center">
          <div className="flex justify-center mb-8">
            {/* Logo placeholder */}
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-white/30">
              <span className="text-3xl font-bold text-teal-300">CI</span>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
            Constituency <span className="text-teal-300">Intelligence</span>
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            AI-powered platform connecting citizens with their representatives for smarter, data-driven local governance.
          </p>
        </div>
      </div>

      {/* Right side: Auth Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-white md:bg-transparent shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.05)] z-20">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
