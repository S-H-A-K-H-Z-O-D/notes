import { note_titles_data } from "@/app/constants";
import TitleCard from "@/app/components/landing/titles/TitleCard";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import CrudTitleModal from "@/app/components/common/CrudTitleModal";

const Titles = ({ layout = false }) => {
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-3xl text-center">Qayd mavzulari</h1>

      <CrudTitleModal>
        <span className="flex justify-end items-center my-5 hover:shadow-lg border border-primary px-4 py-1.5 rounded-md hover:text-primary-foreground hover:bg-primary">
          <PlusIcon className="mr-1" /> Mavzu qo'shish
        </span>
      </CrudTitleModal>

      <div className={`grid grid-cols-4 gap-8 ${layout && "grid-cols-1"}`}>
        {note_titles_data.map((item) => (
          <Link href={`/notes/${item.name}`} key={item.name}>
            <TitleCard title={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Titles;
