"use client";

import { useRouter } from "next/navigation";
import NavBar from "./components/navbar";
import HeroBanner from "./components/herobanner";

export default function Home() {
  
const router = useRouter();

  return (
  <div className="flex flex-col min-h-screen"> 
    <NavBar/>
    <HeroBanner imageUrl="/mainbanner2.jpg"
      />
    <h1>HOME</h1>
  </div>
  );
}
