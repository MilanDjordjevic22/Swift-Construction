"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";

export default function Careers() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <h1>CAREERS</h1>
  </div>
  );
}
