"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, "Ushbu maydon to'ldirilishi shart")
      .refine((val) => val.includes("@") && val.includes("."), {
        message: "Noto'g'ri email format",
      }),
    username: z
      .string()
      .min(1, "Ushbu maydon to'ldirilishi shart")
      .max(50, "Username must be at most 50 characters long"),
    password: z
      .string()
      .min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak")
      .max(12, "Parol 12 ta belgidan ko'p bo'lmasligi kerak"),
    repeat_password: z.string().min(1, "Ushbu maydon to'ldirilishi shart"),
  })
  .refine((data) => data.password === data.repeat_password, {
    message: "Parollar mos emas",
    path: ["repeat_password"], // Set the path of the error message to the repeat_password field
  });

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      repeat_password: "",
    },
  });

  const { handleSubmit, control } = form;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="sm:w-[500px] shadow-2xl rounded-xl p-10">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className="text-center text-2xl font-medium mb-5">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Ro'yhatdan o'tish
        </h2>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Emailni kiriting..." {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Parolni unutsangiz, uni emailingizga yuboramiz
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Foydalanuvchi nomi</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Foydalanuvchi nomini kiriting..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parol</FormLabel>
                  <FormControl>
                    <Input placeholder="Parolni kiriting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="repeat_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parolni takrorlash</FormLabel>
                  <FormControl>
                    <Input placeholder="Parolni qayta kiriting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" className="w-full mt-5">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
