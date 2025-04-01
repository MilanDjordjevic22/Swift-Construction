"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import MainServices from "../components/MainServices";
import RequestQuoteForm from '../components/RequestQuoteForm';
import Footer from '../components/Footer';
export default function Services() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <MainServices imageUrl="/mainbanner2.jpg"/>
    <RequestQuoteForm/>
    <Footer/>
  </div>
  );
}
