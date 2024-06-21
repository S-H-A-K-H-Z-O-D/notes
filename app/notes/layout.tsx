import { Navbar, Titles } from "@/app/components";

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div>
        <Navbar />
        <div className="flex">
          <Titles layout={true} />
          {children}
        </div>
      </div>
    </section>
  );
}
