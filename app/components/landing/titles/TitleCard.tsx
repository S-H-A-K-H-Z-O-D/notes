import { EditIcon, TrashIcon } from "@/app/components/common/Icons";
import Image from "next/image";
import DeleteModal from "@/app/components/common/DeleteModal";
import CrudTitleModal from "@/app/components/common/CrudTitleModal";

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
        <CrudTitleModal title={title}>
          <span className="border border-border rounded-md p-2 w-[40px] h-[40px] flex items-center justify-center hover:bg-secondary">
            <EditIcon />
          </span>
        </CrudTitleModal>
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
