import { Navbar, Titles } from "../components";

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div>
        <Navbar layout={true} />
        <div className="flex">
          <div className="max-md:hidden">
            <Titles layout={true} />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
