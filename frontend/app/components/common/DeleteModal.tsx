"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

const DeleteModal = ({ children }: any) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="px-10 py-12 max-w-[500px] [&_svg]:hidden scale-90">
          <div className="flex justify-center">
            <Image
              src="/delete-warning.svg"
              alt="delete warning"
              width={150}
              height={150}
            />
          </div>

          <DialogHeader className="-mt-10">
            <DialogTitle className="text-2xl text-center">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Haqiqatdan ham o'chirishga ishonchingiz komilmi?
            </DialogTitle>
          </DialogHeader>

          <div className="flex gap-8">
            <DialogClose className="w-full">
              <div className="flex justify-end mt-4">
                <Button variant="outline" className="w-full text-lg">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Yo'q
                </Button>
              </div>
            </DialogClose>

            <DialogClose className="w-full">
              <div className="flex justify-end mt-4">
                <Button variant="destructive" className="w-full text-lg">
                  Ha
                </Button>
              </div>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default DeleteModal;
