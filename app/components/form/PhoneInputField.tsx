import { Control, FieldValues, Path, useController } from "react-hook-form"
import FieldLabel from "./FieldLabel"
import FieldError from "./FieldError"
import { PhoneInput, PhoneInputProps, PhoneInputRefType } from "react-international-phone"
import "react-international-phone/style.css"
import { PhoneNumberUtil } from "google-libphonenumber"
import { cn } from "@/lib/utils"

interface IProps<IForm extends FieldValues> {
  control: Control<IForm>
  name: Path<IForm>
  label?: string
  required?: boolean
}

export default function PhoneInputField<IForm extends FieldValues>({
  control,
  name,
  label,
  required = false,
  className,
  ...props
}: IProps<IForm> & PhoneInputProps & React.RefAttributes<PhoneInputRefType>) {
  const phoneUtil = PhoneNumberUtil.getInstance()
  const isPhoneValid = (phone: string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    } catch (error) {
      return false
    }
  }

  const { field: field, fieldState } = useController({
    name,
    control,
    rules: {
      validate: (val: string) => {
        let err = ""
        let isValid = true
        if (required) {
          isValid = isPhoneValid(val)
          if (!isValid) {
            err = "Ushbu maydonni to'g'ri va to'liq to'ldiring"
          }
        }

        return isValid || err
      },
    },
  })

  return (
    <fieldset className={cn("flex flex-col gap-[0.8rem]", className)}>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <PhoneInput
        defaultCountry="uz"
        className="w-full h-[5.6rem] rounded-[1.2rem] has-[input:focus]:outline has-[input:focus]:outline-[1.5px] has-[input:focus]:outline-borderGrey !outline-none"
        inputClassName={
          "w-full !h-full !rounded-r-[1.2rem] !text-[clamp(1.4rem,_1.4vw,_1.6rem)] !px-[2.4rem] !bg-white !border-borderGrey !text-black"
        }
        countrySelectorStyleProps={{
          className: "h-[5.6rem]",
          buttonClassName: "h-full px-[1.2rem] !rounded-l-[1.2rem] !bg-white !border-borderGrey",
        }}
        {...field}
        {...props}
      />
      {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
    </fieldset>
  )
}
