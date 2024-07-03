import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function FieldError({ children }: IProps) {
  return <p className="text-destructive text-sm">{children}</p>;
}
