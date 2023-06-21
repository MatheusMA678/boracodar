import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function ButtonOutline(props: ButtonProps) {
  return (
    <button
      {...props}
      className="w-[158px] rounded-md border border-purple-500 bg-white py-3 text-sm font-bold text-purple-500 transition hover:bg-purple-500 hover:text-white"
    >
      {props.children.toUpperCase()}
    </button>
  );
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-[158px] rounded-md bg-purple-600 py-3 text-sm font-bold text-white transition hover:bg-purple-500`}
    >
      {props.children.toUpperCase()}
    </button>
  );
}

export function ButtonSubmit(props: ButtonProps) {
  return (
    <button
      {...props}
      className="min-w-[158px] rounded-md bg-purple-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-purple-500"
    >
      {props.children.toUpperCase()}
    </button>
  );
}
