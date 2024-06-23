import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from "react-hook-form";
import FieldLabel from "./FieldLabel";
import FieldError from "./FieldError";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IProps<IForm extends FieldValues> {
  methods: UseFormReturn<IForm>;
  name: Path<IForm>;
  label?: string;
  required?: boolean;
  registerOptions?: RegisterOptions;
}

export default function TextareaField<IForm extends FieldValues>({
  methods,
  name,
  label,
  required = false,
  registerOptions,
  className,
  ...props
}: IProps<IForm> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const {
    register,
    formState: { errors },
  } = methods;
  // @ts-ignore
  const reg = register(name, {
    required: {
      value: required,
      message: "Ushbu maydon to'ldirilishi shart",
    },
    ...registerOptions,
  });

  return (
    <fieldset className={cn("flex flex-col gap-[0.4rem]", className)}>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <textarea
        className="h-24 border border-border rounded-md bg-white outline-none leading-none px-2 py-2 text-darkBlue"
        {...reg}
        {...props}
      />
      {errors[name] && (
        <FieldError>{errors[name]?.message as ReactNode}</FieldError>
      )}
    </fieldset>
  );
}
