import Hero from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";
import Services from "@/components/landing/Services";
import Offer from "@/components/landing/Offer";
export default function Home() {
  return (
   <main>
  <div className="min-h-screen bg-gradient-to-r from-red-200 via-yellow-200/30 to-blue-200/45  overflow-hidden">
  <Hero></Hero>
  <Services></Services>
  <Testimonials></Testimonials>
  <Offer></Offer>
  </div>
   </main>
  );
}
