import { useFormContext } from "react-hook-form";

export function Objectives() {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor="objectives" className="flex flex-col items-start">
        <span className="font-bold">Objetivos do projeto</span>
        <textarea
          name="objectives"
          id="objectives"
          className="h-24 w-full resize-none rounded-sm border border-gray-100 bg-none px-4 transition placeholder:text-gray-200 focus:border-purple-500 focus:ring-purple-500"
          placeholder="Descreva quais os objetivos desse projeto"
          {...register("objectives")}
        />
      </label>
    </>
  );
}
