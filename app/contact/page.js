"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import Help from "../components/Help";
import RequestQuoteForm from '../components/RequestQuoteForm';
import Footer from '../components/Footer';

export default function Contact() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <Help/>
    <RequestQuoteForm/>
    <Footer/>
  </div>
  );
}
