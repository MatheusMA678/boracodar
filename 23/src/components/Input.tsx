import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import MaskedInput from "react-input-mask";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  masked?: boolean;
  valueAsNumber?: boolean;
}

export function Input(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor={props.id} className="flex flex-col items-start">
      <span className="font-bold">{props.label}</span>
      {props.masked ? (
        <MaskedInput
          {...props}
          mask={"(99) 99999-9999"}
          alwaysShowMask={false}
          className="h-12 w-full rounded-sm border border-gray-100 bg-none px-4 transition placeholder:text-gray-200 invalid:border-red-500 invalid:ring-red-500 focus:border-purple-500 focus:ring-purple-500"
          {...register(props.name)}
          required
        />
      ) : (
        <input
          {...props}
          className="h-12 w-full rounded-sm border border-gray-100 bg-none px-4 transition placeholder:text-gray-200 invalid:border-red-500 invalid:ring-red-500 focus:border-purple-500 focus:ring-purple-500"
          {...register(props.name, { valueAsNumber: props.valueAsNumber })}
          required
        />
      )}

      <ErrorMessage
        errors={errors}
        name={props.name}
        as="p"
        className="text-red-500"
      />
    </label>
  );
}
