"use client";

import { useState, useRef } from "react";
import CrudTitleModal from "@/app/components/landing/titles/CrudTitleModal";
import { EditIcon, TrashIcon } from "@/app/components/common/Icons";
import DeleteModal from "@/app/components/common/DeleteModal";
import CrudNoteModal from "@/app/components/landing/notes/CrudNoteModal";

const NoteCard = () => {
  const [isLess, setIsLess] = useState(true);

  const toggleText = () => {
    setIsLess(!isLess);
  };

  const note =
    "Doʻstlik — ijtimoiy-axloqiy va psixologik tushuncha. Oʻzaro hurmat, yoqtirish, manfaatlarning umumiyligi, yaqinlik, bir-birini tushunishga asoslangan kishilar oʻrtasidagi munosabat shaklini ifodalaydi. Kishilarning muloqot shakli sifatidagi Do'stlik qonqardoshlik, oʻrtoqlik, birodarlik tushunchalariga yaqin, lekin psixologik nuqtai nazardan esa ulardan oʻzining alohidaligi, tanlash xususiyati, his-tuygʻu bilan farq qiladi.";

  return (
    <div className="shadow-[0_0_10px_0px_rgb(0,0,0,0.1)] p-5 rounded-lg">
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isLess ? "line-clamp-2 max-h-16" : "max-h-screen"}`}
      >
        <p>
          Doʻstlik — ijtimoiy-axloqiy va psixologik tushuncha. Oʻzaro hurmat,
          yoqtirish, manfaatlarning umumiyligi, yaqinlik, bir-birini tushunishga
          asoslangan kishilar oʻrtasidagi munosabat shaklini ifodalaydi.
          Kishilarning muloqot shakli sifatidagi Do'stlik qonqardoshlik,
          oʻrtoqlik, birodarlik tushunchalariga yaqin, lekin psixologik nuqtai
          nazardan esa ulardan oʻzining alohidaligi, tanlash xususiyati,
          his-tuygʻu bilan farq qiladi.
        </p>
      </div>

      <div className="flex justify-between items-start mt-3">
        <div className="flex gap-3 mt-2">
          <CrudNoteModal note={note}>
            <span className="[&_svg_path]:stroke-blue border border-blue rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center hover:bg-lightBlue">
              <EditIcon />
            </span>
          </CrudNoteModal>
          <DeleteModal>
            <span className="border border-destructive rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center hover:bg-lightRed">
              <TrashIcon />
            </span>
          </DeleteModal>
        </div>
        <div className="flex justify-end text-blue">
          <button onClick={toggleText} className="pt-2 pr-5 underline">
            {isLess ? "to'liq ko'rsat" : "yop"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
