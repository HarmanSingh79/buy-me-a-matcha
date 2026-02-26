"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import {useRouter} from 'next/navigation'
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {
    const [paymentForm, setPaymentForm] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams=useSearchParams()
    const router=useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Thank you for the donation!', {
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
            // Clean URL without triggering full re-render
            window.history.replaceState(null, '', `/${username}`)
        }
    }, [searchParams])


    const handleChange = (e) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
        // console.log(paymentForm)
    }

    //for getting the data of the successful payments and displaying them on the page according to the amount paid
    const getData = async () => {
        let u = await fetchuser(username)
        setCurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        // console.log(u, dbpayments)
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentForm)
        let orderId = a.id;
        var options = {
            "key": currentUser.razorpayId, // Enter the Key ID generated from the Dashboard
            amount: Number.parseInt(amount) * 100, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Buy Me A Matcha", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <div>
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
                <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

                <div className="cover w-full relative">
                    <img className='h-[50vh] w-full' src={currentUser.coverpic} alt="cover image" />
                    <div className='absolute overflow-hidden -bottom-11 md:left-[46%] left-[33%] border-3 border-white rounded-lg cursor-pointer'>
                        <img className='rounded-lg' width={130} height={130} src={currentUser.profilepic} alt="profile image" />
                    </div>
                </div>

                <div className="info flex flex-col justify-center items-center my-15 gap-2">
                    <div className='font-bold text-3xl cursor-pointer'>
                        {username}
                    </div>
                    <div className='text-sm'>
                        {currentUser.name} is exploring nature
                    </div>
                    <div className='text-gray-400 text-sm'>
                        {payments.length} Payments •  ₹{payments.reduce((a,b)=>a+Number(b.amount),0)} raised
                    </div>

                    <div className="payment flex gap-3 w-[80%] mt-7 flex-col md:flex-row">
                        <div className="leaderboard md:w-1/2 w-full bg-slate-900 text-white rounded-lg p-6 overflow-y-auto max-h-96">
                            <h2 className='text-2xl font-bold mb-4'>Supporters</h2>
                            {payments.length == 0 && <li>No payments yet!</li>}
                            <ul className='mx-3 text-lg'>
                                {payments.map((p, i) => {
                                    return <li key={i} className='my-3 flex gap-2 items-center'>
                                        <img width={30} src="avatar.gif" alt="profile gif" />
                                        <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span>
                                    </li>
                                })}
                            </ul>
                        </div>

                        <div className="makePayment md:w-1/2 w-full bg-slate-900 text-white rounded-lg p-6">
                            <h2 className='text-2xl font-bold mb-4'>Make a Payment</h2>
                            <div className="flex gap-2 flex-col w-full">
                                <input name="name" onChange={handleChange} value={paymentForm.name} className='w-full p-3 hover:bg-slate-700 bg-slate-800 rounded-lg' type="text" placeholder='Enter the name' />

                                <input name="message" onChange={handleChange} value={paymentForm.message} className='w-full p-3 hover:bg-slate-700 bg-slate-800 rounded-lg' type="text" placeholder='Enter the message' />

                                <input name="amount" onChange={handleChange} value={paymentForm.amount} className='w-full p-3 hover:bg-slate-700 bg-slate-800 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder='Enter the amount' />

                                <button onClick={() => { pay(paymentForm.amount) }} type="button" className="text-white rounded-lg bg-linear-to-r  from-green-400 via-green-500 to-green-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 disabled:bg-gray-500 disabled:from-gray-500 disabled:via-gray-500 disabled:to-gray-500 disabled:shadow-none disabled:cursor-not-allowed" disabled={paymentForm.name?.length < 3 || paymentForm.message?.length < 4 || !paymentForm.amount || Number(paymentForm.amount) < 1}>Pay</button>
                            </div>

                            <div className="flex gap-2 mt-5">
                                <button onClick={() => { pay(10) }} className='bg-slate-800 hover:bg-slate-700 p-1 rounded-lg px-3 text-sm font-semibold'>Pay ₹10</button>
                                <button onClick={() => { pay(20) }} className='bg-slate-800 hover:bg-slate-700 p-1 rounded-lg px-3 text-sm font-semibold'>Pay ₹20</button>
                                <button onClick={() => { pay(60) }} className='bg-slate-800 hover:bg-slate-700 p-1 rounded-lg px-3 text-sm font-semibold'>Pay ₹60</button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PaymentPage
