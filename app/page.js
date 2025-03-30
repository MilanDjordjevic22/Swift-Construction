"use client";

import { useRouter } from "next/navigation";
import NavBar from "./components/navbar";

export default function Home() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
  </div>
  );
}
