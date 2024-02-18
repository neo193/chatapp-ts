"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Home from '../app/home/page'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {auth,provider} from '@/app/utils/config'
import {signInWithPopup} from 'firebase/auth'
import { useRouter } from 'next/navigation';
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";



const Login = () => {
  const words = [
    {
      text: "Join",
    },
    {
      text: "the",
    },
    {
      text: "Conversation",
    },
    {
      text: ".",
    },
    {
      text: "Log in",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const router=useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    username: username,
    password: password,
  };
const handleGoogleLoginClick = async (event: any) => {
  
  event.preventDefault();
  try {
    const result = await signInWithPopup(auth, provider);
    userData.username=result.user.displayName || "Guest"
    userData.password=""
    const email = result.user.email
  // optional-> //check email is present in user database then
    router.push('/home')
  } catch (error) {
    console.error("Error during Google sign-in:", error);
  }
};
const handleLogin = async (event: any)=>{
  event.preventDefault();
  const response = await axios.post('/api/login', userData)
    console.log('Pre: Status Received: ', response.data.status)
    if ( response.data.status === 200 ){
      router.push('/home');
    } else {
      console.log("Status code: ",response.data.status);
    }
  }

  return (
    <div className="flex  bg-black   h-screen">
  
    <BackgroundGradientAnimation className=' h-screen w-[70%]'>
      <div className="absolute z-50 inset-0 bg-gradient-to-r from-transparent to-black flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Join the conversation. Log in.
        </p>
      </div>
    </BackgroundGradientAnimation>
   
      <div className='flex  items-center'>
     
      <Card className="border-none bg-black text-white">
     
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
          <div className="flex flex-col space-y-2">
            <input type="text"  onChange={(e) => setUsername(e.target.value)} placeholder="Username" className=" bg-[#324DA5] rounded px-4 py-2" />
            <input type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" className=" bg-[#324DA5] rounded px-4 py-2" />
            <button onClick={handleLogin}className="bg-blue-500 text-white px-4 py-2 rounded border hover:border-black">Submit</button>
            <hr></hr>
            <Button onClick={handleGoogleLoginClick} className='bg-white text-black font-bold border hover:border-black'>
    <img src="https://i.ibb.co/dLjTcXH/google.png" className='h-5 w-5 mr-2' alt="Google Logo" />
    Sign in with Google
</Button>

          </div>
          </form>
        </CardContent>
        <CardFooter>
          <Link href="/signup">Don't have a account? <span className='font-bold hover:underline'>Sign Up</span></Link>
      
        </CardFooter>
      </Card>
      </div>
    </div>
  );
};

export default Login;
