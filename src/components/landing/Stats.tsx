import React from "react";

const statsData = [
 { label: "18+", subLabel: "Followers social media" },
  { label: "800k", subLabel: "Registration booked" },
  { label: "25y", subLabel: "Year of experience" }
];

const Stats = ()=>{
  return (
   <section className="py-6  flex flex-col md:flex-row  gap-4 md:gap-14 ">
      {statsData.map((stat)=>(
        <div key={stat.label} className="flex items-start gap-1 ">
          <div className="w-8 h-8 bg-indigo-700 rounded flex-shrink-0"></div>
          <div className="relative">
          <span className="text-indigo-700  text-2xl md:text-3xl font-bold">{stat.label}</span>
            <p className="text-black   text-sm font-bold ">{stat.subLabel}</p>
          </div>
        </div>
       
      ))}
   
   </section>
  )
}

export default Stats