import React from "react";

const Services = ()=>{
  return(
    <section className="flex flex-col md:flex-row gap-6 py-y px-4  md:px-10 m-10">
      <div className="h-auto text-card-foreground flex flex-col gap-2 rounded-xl hover:shadow-lg transition-shadow border border-purple-100 text-center text-black bg-white p-4">
        <div className="flex w-ful justify-center">
        <span className="bg-purple-100  inline-block p-3 ">🔮</span>
        </div>
        <h3 className="font-bold">Birth Chart Analysis</h3>
        <p className="text-xs font-light">Complete personality analysis and life path guidance through your cosmic blueprint</p>
      </div>

      <div className="h-auto text-card-foreground flex flex-col gap-4 rounded-xl hover:shadow-lg transition-shadow border border-sky-100 text-center p-4 bg-white text-black">
        <div className="flex w-ful justify-center">
        <span className="bg-sky-100  inline-block p-3 ">💎</span>
        </div>
        <h3 className="font-bold">Gemstone Therapy</h3>
        <p className="text-xs">Personalized gemstone recommendations to enhance positive energies and well-being</p>
      </div>

      <div className="h-auto text-card-foreground flex flex-col gap-4 rounded-xl hover:shadow-lg transition-shadow border border-green-100 text-center p-4 bg-white text-black">
        <div className="flex w-ful justify-center">
        <span className="bg-green-100  inline-block p-3">🏠</span>
        </div>
        <h3 className="font-bold">Vastu Consultation</h3>
        <p className="text-xs">Harmonize your living spaces with ancient principles for prosperity and peace</p>
      </div>
    </section>
  )
};

export default Services