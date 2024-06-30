import { Navbar } from "@/app/components";

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="container px-0">
        <Navbar />
        <div className="my-4 px-[clamp(1rem,_4vw,_2rem)]">{children}</div>
      </div>
    </section>
  );
}
