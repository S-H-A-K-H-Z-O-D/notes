"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { PlusIcon } from "lucide-react";
import InputField from "@/app/components/form/InputField";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface IForm {
  title: string;
}

const CrudTitleModal = ({ children, title = "" }: any) => {
  const methods = useForm<IForm>();
  const { handleSubmit, formState, setValue } = methods;

  const onSubmit = (values: IForm) => {
    console.log(values);
  };

  useEffect(() => {
    title && setValue("title", title);
  }, []);
  const isValid = formState.isValid;

  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full flex justify-end">
          {children}
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} className="m-7">
            <InputField
              methods={methods}
              name="title"
              label="Mavzu"
              required
              placeholder="Mavzuni kiriting"
            />

            <div className="flex justify-end mt-4">
              <DialogClose disabled={!isValid}>
                <Button>Saqlsh</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default CrudTitleModal;
