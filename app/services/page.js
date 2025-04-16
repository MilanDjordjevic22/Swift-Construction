"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import MainServices from "../components/MainServices";
import ServicesProvided from "../components/ServicesProvided";
import Reviews from "../components/Reviews";
import RequestQuoteForm from '../components/RequestQuoteForm';
import Footer from '../components/Footer';
export default function Services() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <MainServices imageUrl="/servicebanner.jpg"/>
    <ServicesProvided/>
    <Reviews/>
    <RequestQuoteForm/>
    <Footer/>
  </div>
  );
}
