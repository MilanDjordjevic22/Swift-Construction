"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import RequestQuoteForm from '../components/RequestQuoteForm';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

export default function AboutUs() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <AboutSection imageUrl="/mainbanner2.jpg"/>
    <RequestQuoteForm/>
    <Footer/>
  </div>
  );
}

