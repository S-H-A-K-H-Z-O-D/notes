import { Control, FieldValues, Path, useController } from "react-hook-form"
import FieldLabel from "./FieldLabel"
import FieldError from "./FieldError"
import DatePicker, { ReactDatePickerProps } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

interface IProps<IForm extends FieldValues> {
  control: Control<IForm>
  name: Path<IForm>
  label?: string
  required?: boolean
  placeholder?: string
}

export default function DatePickerField<IForm extends FieldValues>({
  name,
  control,
  label,
  required = false,
  className,
  ...props
}: IProps<IForm> & Partial<ReactDatePickerProps>) {
  const {
    field: { value, ...field },
    fieldState,
  } = useController({
    name,
    control,
    rules: {
      required: {
        value: required,
        message: "Ushbu maydon to'ldirilishi shart",
      },
    },
  })

  return (
    <fieldset className={cn("flex flex-col gap-[0.8rem]", className)}>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <label className="relative flex items-center">
        <DatePicker
          selected={value}
          className="w-full bg-white border border-borderGrey h-[5.6rem] rounded-[1.2rem] outline-borderGrey px-[2.4rem]"
          wrapperClassName="w-full"
          clearButtonClassName="!right-[5.6rem]"
          isClearable
          showMonthDropdown
          showYearDropdown
          popperPlacement="bottom-end"
          {...field}
          {...props}
        />
        <CalendarIcon className="absolute right-[2.4rem] w-[2rem] h-[2rem]" />
      </label>
      {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
    </fieldset>
  )
}
