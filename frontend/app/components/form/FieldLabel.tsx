import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  required: boolean;
}

export default function FieldLabel({ required, children }: IProps) {
  return (
    <label className="text-[clamp(0.8rem,_1vw,_1rem)] font-medium leading-[1.4]">
      {children} {required && <span className="text-destructive">*</span>}
    </label>
  );
}
