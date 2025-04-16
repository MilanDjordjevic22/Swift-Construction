"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import CareersSection from "../components/CareersSection";
import CareerPositions from "../components/CareerPositions";
import Footer from "../components/Footer";


export default function Careers() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <CareersSection imageUrl="/careerbanner.jpg"/>
    <CareerPositions/>
    <Footer/>
  </div>
  );
}
