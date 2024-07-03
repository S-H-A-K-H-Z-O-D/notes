import { Navbar, Titles } from "./components";
import React from "react";

export default function Home() {
  return (
    <main className="container h-full px-0 relative">
      <Navbar />
      <div className="my-4 px-[clamp(1rem,_4vw,_2rem)]">
        <Titles />
      </div>
    </main>
  );
}
