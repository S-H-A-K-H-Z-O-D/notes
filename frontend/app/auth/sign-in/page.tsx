"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  username: z
    .string()
    .min(1, "Ushbu maydon to'ldirilishi shart")
    .max(50, "50 ta belgidan ko'p bo'lmasligi kerak"),
  password: z
    .string()
    .min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak")
    .max(12, "Parol 12 ta belgidan ko'p bo'lmasligi kerak"),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
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
          Hisobga kirish
        </h2>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  <Link
                    href="/auth/change-password"
                    className="text-sm text-blue"
                  >
                    Parolni unutdingizmi?
                  </Link>
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button type="submit" className="w-full mt-5">
                Submit
              </Button>
            </div>

            <div>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span className="text-sm">Ro'yhatdan o'tish - </span>
              <Link href="/auth/sign-up" className="text-sm text-blue">
                bu yerda
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Login;
