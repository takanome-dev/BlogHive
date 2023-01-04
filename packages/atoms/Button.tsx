import * as React from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "default" | "outline" | "link";
}

const style = {
  primary: "bg-blue-500 border-blue-500 hover:bg-blue-600",
  default: "bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-100",
  outline: "bg-slate-100 border-slate-500 text-slate-900 hover:bg-blue-100",
  link: "text-blue-600 hover:bg-blue-100"
};

export const Button: React.FC<ButtonProps> = (props) => {
  return <button className={clsx(
    "rounded-lg border px-4 py-2 font-semibold",
    style[props.color ?? "primary"]
  )}>{props.children}</button>;
};
