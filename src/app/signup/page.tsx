import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
function signup() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Card className="border">
      <CardHeader>
        <CardTitle>SignUp</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <input type="text" placeholder="Username" className="border border-gray-400 rounded px-4 py-2" />
          <input type="email" placeholder="Email" className="border border-gray-400 rounded px-4 py-2" />
          <input type="password" placeholder="Password" className="border border-gray-400 rounded px-4 py-2" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  </div>
  )
}

export default signup