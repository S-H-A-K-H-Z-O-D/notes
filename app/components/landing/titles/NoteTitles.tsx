import { Button } from "@/app/components/ui/button";
import { note_titles_data } from "@/app/constants";
import TitleCard from "@/app/components/landing/titles/TitleCard";
import Link from "next/link";

const Titles = () => {
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-3xl text-center">Qayd mavzulari</h1>

      <div className="flex justify-end items-center my-5">
        <Button>Qo'shish</Button>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {note_titles_data.map((item) => (
          <Link href="#" key={item.name}>
            <TitleCard title={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Titles;
