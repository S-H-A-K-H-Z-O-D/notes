import { EditIcon, TrashIcon } from "@/app/components/common/Icons";
import img from "@/public/for_titles.jpg";
import Image from "next/image";

const TitleCard = ({ title }: { title: string }) => {
  return (
    <div className="shadow-[0_0_10px_0px_rgb(0,0,0,0.1)] rounded-xl p-5">
      <h3 className="font-medium text-xl text-center">{title}</h3>

      <div className="flex justify-center mt-4 mb-7">
        <Image
          className="ml-7"
          src="/for_titles.jpg"
          alt="A book with a pencil"
          width={100}
          height={100}
        />
      </div>

      <div className="flex justify-between">
        <button className="border border-border rounded-md p-2 w-[40px] h-[40px] flex items-center justify-center hover:bg-secondary">
          <EditIcon />
        </button>
        <button className="border border-destructive rounded-md p-2 w-[40px] h-[40px] flex items-center justify-center hover:bg-lightRed">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
export default TitleCard;
