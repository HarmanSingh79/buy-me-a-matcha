"use client"
import React from 'react';

export default function Contact() {
    const [status, setStatus] = React.useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };

        setStatus('Sending...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent!');
                e.target.reset(); // Clear the form
            } else {
                setStatus('Error sending message.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error sending message.');
        }
    }

    return (
        <div className="min-h-screen bg-[#0b101e] text-slate-300 font-sans selection:bg-purple-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 pointer-events-none"></div>

            <div className="relative container mx-auto px-6 py-24 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Get in <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-600">Touch</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Have a question about setting up your creator page? Need help with a contribution? We're here to help you brew up success.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="mt-22 flex flex-col gap-8">
                        <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Chat with us</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#111827] p-3 rounded-lg border border-slate-800 text-purple-500 text-xl">
                                        📧
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Email Support</h4>
                                        <p className="text-slate-400 text-sm mb-1">We typically reply within 24 hours.</p>
                                        <a href="mailto:hello@buymeamatcha.com" className="text-green-400 hover:text-green-300 transition-colors">harmansinghnew1@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#111827] p-4 rounded-lg border border-slate-800 text-purple-500 text-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16" height="16" width="16">
                                            <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Twitter / X</h4>
                                        <p className="text-slate-400 text-sm mb-1">For quick questions and platform updates.</p>
                                        <a href="#" className="text-green-400 hover:text-green-300 transition-colors">@HARMAN7997</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-xl">
                    <div className='text-xl text-center mb-5 font-extrabold '>Write Your Issue</div>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full mt-2 bg-[#0b101e] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full mt-2 bg-[#0b101e] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full mt-2 bg-[#0b101e] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full mt-2 bg-[#0b101e] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-slate-600"
                                    placeholder="Tell us a little more about what you need..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'Sending...'} // Disable button while sending
                                className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {status === 'Message sent!' && (
                                <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                            )}
                            {status === 'Error sending message.' && (
                                <p className="text-red-400 text-center mt-4">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}