import NoteCard from "@/app/components/landing/notes/NoteCard";
import Link from "next/link";
import { ChevronLeftIcon, PlusIcon } from "lucide-react";
import CrudNoteModal from "@/app/components/landing/notes/CrudNoteModal";

const Notes = ({ params }: { params: { name: string } }) => {
  const arr = [1, 5, 6, 8, 5, 32, 5];
  return (
    <div className="p-8 pl-12 w-full max-md:px-5 h-[calc(100vh-65px)] overflow-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="inline-block bg-secondary p-2 rounded-md md:hidden"
        >
          <ChevronLeftIcon />
        </Link>
        <h1 className="flex justify-center w-full text-3xl font-medium max-md:justify-start">
          {params.name}
        </h1>
      </div>

      <div className="my-8">
        <CrudNoteModal>
          <span
            className={`flex gap-1 justify-end items-center hover:shadow-lg border border-primary 
            px-4 py-1.5 rounded-md hover:text-primary-foreground hover:bg-primary max-[450px]:justify-center`}
          >
            <PlusIcon /> {"Estalma qo'shish"}
          </span>
        </CrudNoteModal>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-start max-lg:grid-cols-1">
        {arr.map((item) => (
          <NoteCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
