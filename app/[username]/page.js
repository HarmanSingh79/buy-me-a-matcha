import React from 'react'
import PaymentPage from '@/components/PaymentPage';
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectdb';
import User from '@/models/User';

const Page = async ({ params }) => {
  const { username } = await params;

  //if the username is not in the database, then show a 404 page
    await connectDB()
    let u=await User.findOne({username:username})
    if(!u){
      return notFound()
    }

    return (
      <div>
        <PaymentPage username={username} />
      </div>
    )
}

export default Page

export async function generateMetadata({params}){
  const { username } = await params;
  return{
    title:`Support ${username} - Buy Me A Matcha`
  }
}