"use client";

import { HeroData } from "@/app/api/hero/route";
import { useEffect, useState } from "react";
import { Star, ThumbsUp, ShieldCheck } from "lucide-react";
import Stats from "./Stats";
import { CiCalendar } from "react-icons/ci";

export default function Hero(){
  const [hero,setHero] = useState<HeroData | null>(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("")
  useEffect(()=>{
    fetch("/api/hero")
    .then((res)=>res.json())
    .then((data)=>{
      setHero(data);
      setLoading(false);
    })
    .catch((err)=>{
      setError("Failed to load data");
      setLoading(false)
    });
  },[]);

  if (loading) return <p className="text-center py-10 text-black text-3xl">Loading...</p>
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>
  return(
     <section className="px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-24  mx-auto max-w-6xl mt-16 pb-0">
      <div className="md:w-1/2 space-y-2  md:pt-4 pt-2">
    <h1 className="text-4xl font-bold text-black">
        {hero?.title}
     </h1>
        <p className="text-muted text-black">{hero?.subtitle}</p>
        <a
          href={hero?.ctaLink}
          className="inline-block bg-primary bg-indigo-600 text-white px-6 py-3 rounded mt-2"
        >
         <button className="flex gap-2 items-center font-bold">
         <span className="text-2lg text-center"><CiCalendar/></span> 
          {hero?.ctaText}
          </button> 
        </a>

        <div className="flex gap-2 mt-4 ">
          {hero?.badges.map((badge) => {
            const Icon =
              badge.icon === "Star"
                ? Star
                : badge.icon === "ThumbsUp"
                ? ThumbsUp
                : ShieldCheck;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-black  px-3 py-1 rounded"
              >
                <Icon className="w-4 h-4 text-primary dark:text-primary-dark" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
        <Stats></Stats>
      </div>

      <div className="md:w-1/2 mt-2 md:mt-0 flex justify-center pt-1">
      <div className="relative p-8 rounded-full border text-purple-400 overflow-visible">
        <img
          src={hero?.imageUrl}
          alt="Astrologer"
          className="w-full rounded-full shadow-lg max-w-[300px] h-auto aspect-[360/465] relative z-10"
        />
        <span className="absolute bottom-12 left-2 bg-purple-500 rounded-full p-2 shadow-lg animate-bounce delay-1000 z-10">
      🌙
        </span >
        <span className="right-12 -bottom-8 absolute text-6xl text-amber-400/30">
        <img src="/softStar.png" alt=""  className="w-18 h-30"/>
        </span>
        <span className="absolute top-13 right-4 bg-yellow-300 rounded-full p-2 shadow-lg animate-bounce">
          ☀️
        </span>
        <span>
          <img src="/vector.svg" alt=""  className="w-4 absolute top-26 right-4"/>
        </span>
        <span>
          <img src="/star2.png" alt=""  className="w-10 absolute top-9"/>
        </span>
        </div>
      </div>
    </section>
  )

}