"use client";

import { useState } from "react";

const NoteCard = () => {
  const [isLess, setIsLess] = useState(true);
  return (
    <div className="shadow-[0_0_10px_0px_rgb(0,0,0,0.1)] p-5 rounded-lg">
      <p className={`${isLess && "line-clamp-2"}`}>
        Doʻstlik — ijtimoiy-axloqiy va psixologik tushuncha. Oʻzaro hurmat,
        yoqtirish, manfaatlarning umumiyligi, yaqinlik, bir-birini tushunishga
        asoslangan kishilar oʻrtasidagi munosabat shaklini ifodalaydi.
        Kishilarning muloqot shakli sifatidagi Do'stlik qonqardoshlik,
        oʻrtoqlik, birodarlik tushunchalariga yaqin, lekin psixologik nuqtai
        nazardan esa ulardan oʻzining alohidaligi, tanlash xususiyati,
        his-tuygʻu bilan farq qiladi.
      </p>
      <div className="flex justify-end text-blue">
        <button
          onClick={() => setIsLess(!isLess)}
          className="pt-2 pr-5 underline"
        >
          {isLess ? "to'liq ko'rsat" : "yop"}
        </button>
      </div>
    </div>
  );
};
export default NoteCard;
