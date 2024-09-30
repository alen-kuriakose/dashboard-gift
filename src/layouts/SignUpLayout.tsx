'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

// Assume we have a signup image
import signupImage from "@/assets/images/loginImage.jpg";

interface User {
  username: string;
  email: string;
  password: string;
}

export const SignUpPageLayout = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    // For this example, we'll just store it in localStorage
    const newUser: User = { username, email, password };
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page after successful signup
    router.push('/login');
  };

  return (
    <div className="w-full lg:grid h-full lg:grid-cols-2 bg-white">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-dark dark:text-white">Sign Up</h1>
            <p className="text-balance text-muted-foreground text-dark dark:text-white">
              Create an account to get started
            </p>
          </div>
          <form onSubmit={handleSignUp} className="grid gap-4">
            <div className="grid gap-2 text-dark dark:text-white">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="johndoe"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2 text-dark dark:text-white">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-dark dark:text-white">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-dark dark:text-white">
            Already have an account?{" "}
            <Link href="/" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block p-4 align-middle md:flex">
        <Image
          src={signupImage}
          alt="Sign Up Image"
          className="h-[98%] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};