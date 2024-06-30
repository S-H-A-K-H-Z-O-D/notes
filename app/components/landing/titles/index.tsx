import { note_titles_data } from "@/app/constants";
import TitleCard from "@/app/components/landing/titles/TitleCard";
import Link from "next/link";
import { ChevronRightIcon, PlusIcon } from "lucide-react";
import CrudTitleModal from "@/app/components/landing/titles/CrudTitleModal";
import { SearchIcon } from "@/app/components/common/Icons";
import React from "react";

const Titles = ({ layout = false }) => {
  return (
    <div
      className={`${layout ? "relative border-r pt-5 h-[calc(100vh-65px)] min-w-[320px]" : "mt-10"}`}
    >
      <div className={`${layout && "px-[clamp(1rem,_2vw,_1.6rem)]"}`}>
        <h1 className="font-semibold text-3xl text-center">Qayd mavzulari</h1>
        {layout && (
          <Link href="/">
            <div className="bg-secondary absolute rounded-r-full py-4 px-1 left-full z-100 top-4">
              <ChevronRightIcon />
            </div>
          </Link>
        )}

        <div className={`flex items-center justify-between gap-2`}>
          <div className={`relative ${layout ? "w-full" : "w-[300px]"}`}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none [&_svg_path]:stroke-muted-foreground">
              <SearchIcon />
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="Search..."
            />
          </div>

          <CrudTitleModal>
            <span
              className={`flex gap-1 ${layout ? "justify-center w-full px-2" : "justify-end px-4 max-sm:px-2"} items-center my-5 hover:shadow-lg border border-primary py-1.5 rounded-md hover:text-primary-foreground hover:bg-primary`}
            >
              <PlusIcon />{" "}
              {!layout && <p className="max-sm:hidden">{"Mavzu qo'shish"}</p>}
            </span>
          </CrudTitleModal>
        </div>
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
