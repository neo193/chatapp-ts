import { NextResponse } from 'next/server';
import axios from 'axios';
import { validateUser } from '../../utils/database/db';

type UserData = {
    username: string,
    password: string
}

export async function POST(req: Request){
    // const data = await req.json();
    // const userData : UserData = {
    //     username: data.username,
    //     password: data.password
    // }
    // console.log("Backend",data)
    // const response = validateUser(userData)

    try {
        const data = await req.json();
        const userData : UserData = {
            username: data.username,
            password: data.password
        }
        console.log("Backend",data)
        const response = validateUser(userData)
        console.log("Response from DB: ", response)
        if (response){
            return NextResponse.json({status: 200});
        } else {
            console.log('Executing False Tree')
            return NextResponse.json({status: 400});
        }
    } catch (error) {
        console.log('Caught an exception')
        return NextResponse.json({status: 500, error: "Internal Server Error"});
    }
}