import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base text-center">
        <div className="md:text-5xl text-3xl font-bold flex gap-2 items-center justify-center">
          Buy Me A Matcha
          <span>
            <img className="rounded-full" width={70} src="/matcha.gif" alt="matcha gif"/>
          </span>
        </div>
        <p className="text-center md:text-left">A crowdfunding platform for creators. Get funded by your fans and followers.</p>

        <p className="text-center md:text-left">Unleash the power of your fans and get your projects funded.</p>

        <div className="flex gap-4 ">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 rounded-full text-center leading-5">Start Here!</button></Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 rounded-full text-center leading-5">Read More</button></Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className='text-white container mx-auto md:py-8 py-5'>
        <h2 className="font-bold text-center text-2xl mb-7">Fuel your creativity, one Matcha at a time</h2>
        <div className='flex gap-5 justify-around p-4 text-center'>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt=""></img>
            <p className="font-bold text-center">Share Ideas</p>
            <p>Let your community in on your creative journey and goals.</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt=""></img>
            <p className="font-bold text-center">Get Funded</p>
            <p>Receive direct, hassle-free contributions from your audience.</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt=""></img>
            <p className="font-bold text-center">Build Together</p>
            <p>Grow a dedicated fanbase that helps bring your ideas to life.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* 
      <div className='text-white container mx-auto py-16'>
        <h2 className="font-bold text-center text-2xl mb-7">Learn More About Us</h2>
        
      </div> */}

    </>
  );
}
