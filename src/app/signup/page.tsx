"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {auth,provider} from '@/app/utils/config'
import {signInWithPopup} from 'firebase/auth'
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { useState } from 'react';
function signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState("")
  const userData = {
    username: username,
    password: password,
    email:email
  };
  const handleGoogleRegisterClick = async (event: any) => {
    event.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result)
      userData.username=result.user.displayName || "Guest"
      userData.password=""
      userData.email=result.user.email || ""
       setEmail(result.user.email ||"")
      console.log("--------")
    console.log(userData)
    } catch (error) {
      console.error("Error during Google sign-up:", error);
    }
  };
  const handleRegister =()=>{
console.log(userData)
  }
  return (
    <div className="flex justify-center items-center h-screen bg-black">
       <BackgroundGradientAnimation className=' h-screen w-[70%]'>
      <div className="absolute z-50 inset-0 bg-gradient-to-r from-transparent to-black flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Ready to connect? Sign up.
        </p>
      </div>
    </BackgroundGradientAnimation>
    <Card className="border-none bg-black text-white">
      <CardHeader>
        <CardTitle>SignUp</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2 ">
          <input type="text"  onChange={(e) => setUsername(e.target.value)} placeholder="Username" className=" bg-[#324DA5] rounded px-4 py-2" />
          <input type="email"    onChange={(e) => setEmail(e.target.value)}placeholder="Email" className=" bg-[#324DA5] rounded px-4 py-2" />
          <input type="password"    onChange={(e) => setPassword(e.target.value)} placeholder="Password" className=" bg-[#324DA5] rounded px-4 py-2" />
          <button onClick={handleRegister}className="bg-blue-500 text-white px-4 py-2 rounded border hover:border-black">Submit</button>
            <hr></hr>
            <Button onClick={handleGoogleRegisterClick}className='bg-white text-black font-bold border hover:border-black'>
    <img src="https://i.ibb.co/dLjTcXH/google.png" className='h-5 w-5 mr-2' alt="Google Logo" />
    Sign up with Google
</Button>
        </div>
      </CardContent>
      <CardFooter>
      <Link href="/"><span className='font-bold hover:underline'>Log In</span></Link>
      </CardFooter>
    </Card>
  </div>
  )
}

export default signup