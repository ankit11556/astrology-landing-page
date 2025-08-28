'use client'
import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
const Offer = ()=>{
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

   useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 5);
      targetDate.setHours(0, 0, 0, 0); 

      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    calculateTimeLeft();
    
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return(
    <section className="bg-gradient-to-r from-red-200 via-yellow-200/30 to-blue-200/45 py-10  flex justify-center flex-col gap-4 items-center">
      <div className="flex flex-col text-center">
      <p className="text-black text-xl font-bold">Join Our Webinar</p>
      <h2 className="text-black flex justify-center text-3xl font-bold">Limited-Time <p className="pl-2 text-blue-500">Offer!</p></h2>
      <p className="text-black inline-block max-w-lg min-w-sm p-2">
        Get 'The Guide' now and enjoy a special one-month free access to our upcoming AI-scoring platform with over 5000 test questions. Act fast – this offer expires in [Countdown Timer]
      </p>
      </div>

      <div className=" flex bg-white justify-center min-w-64 gap-2 px-2 rounded text-center">
        <div className="px-2 border-r text-center py-2">
          <span className="text-sky-500 text-2xl font-bold">{timeLeft.days}</span>
          <p className="text-gray-500 text-sm">Days</p>
        </div>

        <div className="px-2 border-r text-center py-2">
          <span className="text-sky-500 text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <p className="text-gray-500 text-sm">Hour</p>
        </div>

        <div className="px-2 border-r text-center py-2">
          <span className="text-sky-500 text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <p className="text-gray-500 text-sm">Minute</p>
        </div>

        <div className="px-2  text-center py-2">
          <span className="text-black text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <p className="text-gray-500 text-sm">Second</p>
        </div>
      </div>
      <button className="py-3 px-12 text-white bg-indigo-600 rounded mt-6 font-bold flex justify-center gap-2">
        
      <span className=" text-2xl"><CiCalendar/></span> Visit Now
        
        </button>
    </section>
  )
}

export default Offer 