import { FieldValues, Path, RegisterOptions, UseFormReturn } from "react-hook-form"
import FieldLabel from "./FieldLabel"
import FieldError from "./FieldError"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IProps<IForm extends FieldValues> {
  methods: UseFormReturn<IForm>
  name: Path<IForm>
  label?: string
  required?: boolean
  registerOptions?: RegisterOptions
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
  } = methods
  const reg = register(name, {
    required: {
      value: required,
      message: "Ushbu maydon to'ldirilishi shart",
    },
    ...registerOptions,
  })

  return (
    <fieldset className={cn("flex flex-col gap-[0.8rem]", className)}>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <textarea
        className="h-[18rem] border-borderGrey border rounded-[1.2rem] bg-white outline-borderGrey leading-none px-[2.4rem] py-[1.6rem] text-darkBlue caret-darkBlue font-medium text-[clamp(1.4rem,_1.4vw,_1.6rem)]"
        {...reg}
        {...props}
      />
      {errors[name] && <FieldError>{errors[name]?.message as ReactNode}</FieldError>}
    </fieldset>
  )
}
