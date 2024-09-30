"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import landingImage from "@/assets/images/loginImage.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface User {
  username: string;
  email: string;
  password: string;
}
export const LandingPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter()
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === email && u.password === password);
    if (email==="admin@test.com"&&password==="password") {
      router.push('/dashboard');
    } else {
      console.log(email==="admin@test.com",password==="password")
      console.log(email,password)
      alert('Invalid email or password');
    }
  };
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 h-full bg-white">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold text-dark dark:text-white">
                Login
              </h1>
              <p className="text-balance text-muted-foreground text-dark dark:text-white">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2 text-dark dark:text-white">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center text-dark dark:text-white">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <Button type="submit" className="w-full" onClick={(event)=>handleLogin(event)}>
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-dark dark:text-white">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block p-4  align-middle md:flex ">
          <Image
            src={landingImage}
            alt="Image"
            className="h-[98%] w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  );
};
