import clsx from 'clsx';
import * as React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'primary' | 'default' | 'outline' | 'link';
  type?: 'button' | 'submit';
}

const style = {
  primary: 'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 focus:ring-blue-200',
  default: 'bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-100 focus:ring-slate-200',
  outline: 'bg-slate-100 border-slate-500 text-slate-900 hover:bg-blue-100 focus:ring-blue-200',
  link: 'text-blue-600 hover:bg-blue-100',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'default',
  type = 'button',
  className,
  ...props
}) => (
  <button
    type={type}
    {...props}
    className={clsx(
      'rounded-lg border px-6 py-2 font-semibold text-sm',
      "focus:outline-none focus:ring transition-all",
      className || '',
      style[color]
    )}
  >
    {children}
  </button>
);