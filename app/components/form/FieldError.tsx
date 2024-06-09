import { ReactNode } from "react"

interface IProps {
  children: ReactNode
}
export default function FieldError({ children }: IProps) {
  return <p className="text-red">{children}</p>
}
