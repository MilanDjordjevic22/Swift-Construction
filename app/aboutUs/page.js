"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import RequestQuoteForm from '../components/RequestQuoteForm';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";

export default function AboutUs() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <AboutSection imageUrl="/aboutbanner.jpg"/>
    <WhyChooseUs/>
    <Reviews/>
    <RequestQuoteForm/>
    <Footer/>
  </div>
  );
}

