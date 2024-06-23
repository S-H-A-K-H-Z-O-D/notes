"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import TextareaField from "@/app/components/form/TextareaField";

interface IForm {
  note: string;
}

const CrudNoteModal = ({ children, note = "" }: any) => {
  const methods = useForm<IForm>();
  const { handleSubmit, formState, setValue } = methods;

  const onSubmit = (values: IForm) => {
    console.log(values);
  };

  useEffect(() => {
    note && setValue("note", note);
  }, []);
  const isValid = formState.isValid;

  return (
    <div>
      <Dialog>
        <div className="w-full flex justify-end">
          <DialogTrigger>{children}</DialogTrigger>
        </div>
        <DialogContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-sm:mt-4 max-sm:mb-0 sm:m-7"
          >
            <TextareaField
              methods={methods}
              name="note"
              label="Eslatma"
              required
              placeholder="Eslatmani kiriting..."
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
export default CrudNoteModal;
