import { note_titles_data } from "@/app/constants";
import TitleCard from "@/app/components/landing/titles/TitleCard";
import Link from "next/link";
import { ChevronRightIcon, PlusIcon } from "lucide-react";
import CrudTitleModal from "@/app/components/landing/titles/CrudTitleModal";

const Titles = ({ layout = false }) => {
  return (
    <div
      className={`${layout ? "relative border-r pt-5 h-[calc(100vh-65px)] min-w-[320px]" : "mt-10"}`}
    >
      <div className={`${layout && "px-[clamp(1rem,_2vw,_1.6rem)]"}`}>
        <h1 className="font-semibold text-3xl text-center">Qayd mavzulari</h1>
        {layout && (
          <Link href="/">
            <div className="bg-secondary absolute rounded-r-full py-4 px-1 left-full z-100">
              <ChevronRightIcon />
            </div>
          </Link>
        )}

        <CrudTitleModal>
          <span
            className={`flex ${layout ? "justify-center w-full" : "justify-end"} items-center my-5 hover:shadow-lg border border-primary px-4 py-1.5 rounded-md hover:text-primary-foreground hover:bg-primary`}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <PlusIcon className="mr-1" /> Mavzu qo'shish
          </span>
        </CrudTitleModal>
      </div>

      <div
        className={`grid gap-8 ${layout ? "grid-cols-1 h-[calc(100vh-199px)] overflow-y-auto py-4 px-[clamp(1rem,_2vw,_1.6rem)]" : "grid-cols-4 max-xl:grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 pb-8"}`}
      >
        {note_titles_data.map((item) => (
          <TitleCard link={item.name} title={item.name} key={item.name} />
        ))}
      </div>
    </div>
  );
};
export default Titles;
