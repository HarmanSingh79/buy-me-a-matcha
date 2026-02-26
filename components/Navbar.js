"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  return (
    <nav className='bg-gray-900 items-center text-white flex justify-between md:h-15 px-4'>
      <div>
        <Link href={"/"} className="logo font-bold md:text-xl text-sm flex md:gap-1 items-center justify-center">
        <img width={40} src="/matcha2.gif" alt="matcha cup" />
        <span>Buy Me A Matcha!</span>
        </Link>
      </div>

      <div className="relative flex justify-center items-center">
        {session && <div>
          <button onClick={() => setShowdropdown(!showdropdown)} onBlur={()=>{setTimeout(() => {
            setShowdropdown(false)
          }, 200); }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 from-purple-600 to-blue-500 hover:bg-linear-to-bl bg-blue-700 bg-linear-to-br hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 md:py-2.5 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-3 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
            </ul>
          </div>
        </div>}

        <div>
          {session && <button className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 md:py-2.5 py-1 text-center rounded-md leading-5" onClick={() => { signOut({ callbackUrl: '/' }) }}>Logout</button>}
        </div>

        <div>
          {!session && <Link href={"/login"}>
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center rounded-xl leading-5">Login</button></Link>}
        </div>
      </div>
    </nav >
  )
}

export default Navbar
