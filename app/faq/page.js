"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";

export default function FAQ() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <h1>FAQ</h1>
  </div>
  );
}
