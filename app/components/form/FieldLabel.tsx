import { ReactNode } from "react"

interface IProps {
  children: ReactNode
  required: boolean
}

export default function FieldLabel({ required, children }: IProps) {
  return (
    <label className="text-[clamp(1.4rem,_1.4vw,_1.6rem)] font-medium leading-[1.4]">
      {children} {required && <span className="text-red">*</span>}
    </label>
  )
}
