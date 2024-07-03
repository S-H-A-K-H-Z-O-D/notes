import { EditIcon, TrashIcon } from "@/app/components/common/Icons";
import Image from "next/image";
import DeleteModal from "@/app/components/common/DeleteModal";
import CrudTitleModal from "@/app/components/landing/titles/CrudTitleModal";
import Link from "next/link";

const TitleCard = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="relative shadow-[0_0_10px_0px_rgb(0,0,0,0.1)] rounded-xl min-w-[250px] transition-scale duration-200 hover:scale-105">
      <Link href={`/notes/${link}`} className="p-5 block">
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

        <div className="h-[40px]"></div>
      </Link>

      <div className="absolute bottom-5 left-5">
        <CrudTitleModal title={title}>
          <span className="[&_svg_path]:stroke-blue border border-blue rounded-md p-2 w-[40px] h-[40px] flex items-center justify-center hover:bg-lightBlue">
            <EditIcon />
          </span>
        </CrudTitleModal>
      </div>

      <div className="absolute bottom-5 right-5">
        <DeleteModal>
          <span className="border border-destructive rounded-md p-2 w-[40px] h-[40px] flex items-center justify-center hover:bg-lightRed">
            <TrashIcon />
          </span>
        </DeleteModal>
      </div>
    </div>
  );
};
export default TitleCard;
