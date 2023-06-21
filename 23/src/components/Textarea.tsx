import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea(props: TextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor={props.id} className="flex flex-col items-start">
      <span className="font-bold">{props.label}</span>
      <textarea
        {...props}
        className="h-24 w-full resize-none rounded-sm border border-gray-100 bg-none px-4 transition placeholder:text-gray-200 invalid:border-red-500 invalid:ring-red-500 focus:border-purple-500 focus:ring-purple-500"
        {...register(props.name)}
      />

      <ErrorMessage
        errors={errors}
        name={props.name}
        as="p"
        className="text-red-500"
      />
    </label>
  );
}

{
  /* <textarea
          name="about"
          id="about"
          className="h-24 w-full resize-none rounded-sm border border-gray-100 bg-none px-4 transition placeholder:text-gray-200 focus:border-purple-500 focus:ring-purple-500"
          placeholder="Fale um pouco sobre seus produtos e serviços"
          {...register("about")}
        /> */
}
