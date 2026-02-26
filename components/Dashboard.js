"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { updateProfile, fetchUser, fetchuser } from '@/actions/useractions'
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter()
  const [form, setForm] = useState({})
  const [showRazorpayId, setShowRazorpayId] = useState(false)
  const [showRazorpaySecret, setShowRazorpaySecret] = useState(false)

  useEffect(() => {
    if (!session) {
      router.push('/login')
    } else {
      getData()
    }
  }, [router, session])

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setForm(u)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name)
    toast('Profile Updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className='md:text-2xl text-md font-bold text-center justify-center m-4'>
        Welcome To Your Dashboard!
      </div>
      <form action={handleSubmit} className="container mx-auto md:w-[40vw] w-[80vw]">
        <div>Name</div>
        <input name="name" value={form.name || ""} onChange={handleChange} type="text" className="w-full p-1 rounded bg-slate-800 border border-slate-700" />

        <div className='my-1'>Email</div>
        <input name="email" value={form.email || ""} onChange={handleChange} type="text" className="w-full p-2 rounded bg-slate-800 border border-slate-700" />

        <div className='my-1'>Username</div>
        <input name="username" value={form.username || ""} onChange={handleChange} type="text" className="w-full p-2 rounded bg-slate-800 border border-slate-700" />

        <div className='my-1'>Profile Picture</div>
        <input name="profilepic" value={form.profilepic || ""} onChange={handleChange} type="text" className="w-full p-2 rounded bg-slate-800 border border-slate-700" />

        <div className='my-1'>Cover Picture</div>
        <input name="coverpic" value={form.coverpic || ""} onChange={handleChange} type="text" className="w-full p-2 rounded bg-slate-800 border border-slate-700" />

        <div className='my-1'>Razorpay ID</div>
        <div className='relative'>
          <input name="razorpayId" value={form.razorpayId || ""} onChange={handleChange} type={showRazorpayId ? "text" : "password"} className="w-full p-2 pr-10 rounded bg-slate-800 border border-slate-700" />
          <span className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setShowRazorpayId(!showRazorpayId)}>
            <img className='p-1' width={30} src={showRazorpayId ? "hide.png" : "show.png"} alt="toggle password" />
          </span>
        </div>

        <div className='my-1'>Razorpay Secret</div>
        <div className='relative'>
          <input name="razorpaySecret" value={form.razorpaySecret || ""} onChange={handleChange} type={showRazorpaySecret ? "text" : "password"} className="w-full p-2 pr-10 rounded bg-slate-800 border border-slate-700" />
          <span className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setShowRazorpaySecret(!showRazorpaySecret)}>
            <img className='p-1' width={30} src={showRazorpaySecret ? "hide.png" : "show.png"} alt="toggle password" />
          </span>
        </div>


        <button type="submit" className="text-white rounded-lg bg-linear-to-r from-green-400 via-green-500 to-green-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 mt-6 w-full">Save</button>
      </form>

    </>
  )
}

export default Dashboard
