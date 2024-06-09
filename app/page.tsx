import { Navbar } from "@/app/components";
import Titles from "@/app/components/landing/titles/NoteTitles";

export default function Home() {
  return (
    <main className="container h-full p-4">
      <Navbar />
      <Titles />
    </main>
  );
}
