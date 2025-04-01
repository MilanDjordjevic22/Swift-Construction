"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import FaqSection from "../components/FaqSection";
import Accordion from "../components/Accordion";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import RequestQuoteForm from '../components/RequestQuoteForm';
import Footer from '../components/Footer';


export default function FAQ() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <FaqSection imageUrl="/mainbanner2.jpg"/>
    <Accordion/>
    <WhyChooseUs/>
    <Reviews/>
    <RequestQuoteForm/>
    <Footer/>
  </div>
  );
}
