"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import RequestQuoteForm from '../components/RequestQuoteForm';
import Footer from '../components/Footer';


export default function FAQ() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <RequestQuoteForm/>
    <Footer/>
  </div>
  );
}
