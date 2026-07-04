"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, Eye, EyeOff, Mail, Lock, User, UserCheck, ShieldAlert } from 'lucide-react';
import { toast } from 'sonner';

import { api } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const registerSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number."),
  confirmPassword: z.string(),
  role: z.enum(['citizen', 'mp']),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'citizen',
    },
  });

  const selectedRole = watch('role');
  const password = watch('password');

  const getPasswordStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    try {
      await api.post('/auth/register', {
        email: data.email,
        full_name: data.full_name,
        password: data.password,
        role: data.role,
      });
      
      toast.success("Registration successful! Please log in.");
      router.push('/login');
    } catch (error: any) {
      toast.error(error.response?.data?.detail || "Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-0 shadow-2xl bg-white/60 backdrop-blur-xl">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-3xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription className="text-slate-500 text-base">
            Join the platform to participate in local governance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            <div className="space-y-3">
              <Label>I am registering as a...</Label>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setValue('role', 'citizen')}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center transition-all",
                    selectedRole === 'citizen' ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 hover:border-slate-300 text-slate-500"
                  )}
                >
                  <UserCheck className="h-8 w-8 mb-2" />
                  <span className="font-semibold">Citizen</span>
                </div>
                <div 
                  onClick={() => setValue('role', 'mp')}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center transition-all",
                    selectedRole === 'mp' ? "border-teal-600 bg-teal-50 text-teal-700" : "border-slate-200 hover:border-slate-300 text-slate-500"
                  )}
                >
                  <ShieldAlert className="h-8 w-8 mb-2" />
                  <span className="font-semibold">MP</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="full_name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="full_name"
                  placeholder="Mahatma Gandhi"
                  className={`pl-10 h-11 ${errors.full_name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  {...register('full_name')}
                />
              </div>
              {errors.full_name && (
                <p className="text-sm text-red-500 font-medium">{errors.full_name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="m.gandhi@example.com"
                  className={`pl-10 h-11 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className={`pl-10 h-11 ${errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    {...register('password')}
                  />
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500 font-medium">{errors.password.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    className={`pl-10 h-11 pr-10 ${errors.confirmPassword ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    {...register('confirmPassword')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 font-medium">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            {/* Password strength indicator */}
            {password && (
              <div className="space-y-1 mt-1">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div 
                    className={cn(
                      "h-full transition-all duration-300",
                      getPasswordStrength() <= 25 ? "bg-red-500" :
                      getPasswordStrength() <= 50 ? "bg-orange-500" :
                      getPasswordStrength() <= 75 ? "bg-blue-500" : "bg-teal-500"
                    )}
                    style={{ width: `${getPasswordStrength()}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500 text-right">
                  {getPasswordStrength() <= 25 ? "Weak" :
                   getPasswordStrength() <= 50 ? "Fair" :
                   getPasswordStrength() <= 75 ? "Good" : "Strong"}
                </p>
              </div>
            )}

            <Button type="submit" className="w-full h-11 text-base font-semibold" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-sm w-full text-center text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
