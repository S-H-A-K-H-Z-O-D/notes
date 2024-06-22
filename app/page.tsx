import { Navbar, Titles } from "@/app/components";

export default function Home() {
  return (
    <main className="container h-full px-0">
      <Navbar />
      <div className="my-4 px-[clamp(1rem,_4vw,_2rem)]">
        <Titles />
      </div>
    </main>
  );
}
