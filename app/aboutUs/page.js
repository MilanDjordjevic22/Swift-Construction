"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";

export default function AboutUs() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <h1>ABOUT US</h1>
  </div>
  );
}
