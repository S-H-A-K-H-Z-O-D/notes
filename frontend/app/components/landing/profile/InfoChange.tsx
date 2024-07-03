"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import InputField from "@/app/components/form/InputField";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/ui/button";

interface IForm {
  username: string;
  email: string;
}

const InfoChange = () => {
  const methods = useForm<IForm>();
  const { handleSubmit } = methods;

  const onSubmit = (values: IForm) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="font-medium text-xl sm:text-2xl mb-7 ml-2">
        {"Foydalanuvchi ma'lumotlarini o'zgartirish"}
      </h1>
      <Card className="sm:p-5">
        <CardContent className="max-sm:p-3">
          <form className="space-y-6 pb-3" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Foydalanuvchi nomi"
              name="username"
              placeholder="E.g. Jhon Doe"
              methods={methods}
              required
            />
            <InputField
              label="Email"
              name="email"
              placeholder="jhonDoe@gmail.com"
              methods={methods}
              required
            />

            <div className="flex justify-end">
              <Button>Saqlash</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
export default InfoChange;
