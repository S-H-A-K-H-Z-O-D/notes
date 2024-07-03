"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Card } from "@/app/components/ui/card";
import TextareaField from "@/app/components/form/TextareaField";
import { Button } from "@/app/components/ui/button";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

interface IForm {
  note: string;
}

const MassageWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openWindow = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const isAuth = pathname.includes("auth");

  const methods = useForm<IForm>();
  const { handleSubmit } = methods;

  const onSubmit = (values: IForm) => {
    console.log(values);
  };

  return (
    <div className={`fixed top-20 right-0 ${isAuth && "hidden"}`}>
      <div className="flex items-start">
        <button
          onClick={openWindow}
          className={`transition-transform duration-300 transform ${isOpen ? "-translate-x-[315px] max-sm:-translate-x-[283px]" : "translate-x-0"}`}
        >
          <div className="bg-secondary rounded-l-full py-4 px-1 mt-2">
            {isOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </div>
        </button>

        <Card
          className={`fixed top-20 right-0 py-5 px-7 max-sm:px-3 shadow-[0_0_20px_5px_rgb(0,0,0,0.3)] border-none transition-transform duration-300 transform ${isOpen ? "translate-x-0 right-4" : "translate-x-full"}`}
        >
          <h5 className="font-medium mb-1">Taklif va shikoyatlaringiz</h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextareaField
              methods={methods}
              name="note"
              required
              placeholder="Matnni kiriting..."
            />

            <div className="flex justify-between items-end mt-4">
              <p className="text-sm mb-1">Fikringiz muhim!</p>
              <Button>Yuborish</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};
export default MassageWindow;
