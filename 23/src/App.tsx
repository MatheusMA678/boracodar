import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CaretRight, Check } from "@phosphor-icons/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Contact } from "./components/Contact";
import { Company } from "./components/Company";
import { Objectives } from "./components/Objectives";
import { NavigationButtons } from "./components/NavigationButtons";

const formValidationSchema = z.object({
  name: z.string().nonempty({ message: "Espaço obrigatório" }),
  phone: z.string().nonempty({ message: "Espaço obrigatório" }),
  email: z.string().email().nonempty({ message: "Espaço obrigatório" }),
  company: z.string().nonempty({ message: "Espaço obrigatório" }),
  employees: z.number(),
  about: z.string().optional(),
  objectives: z.string().optional(),
});

type FormValidationData = z.infer<typeof formValidationSchema>;

export default function App() {
  const [formStep, setFormStep] = useState(0);

  const methods = useForm<FormValidationData>({
    resolver: zodResolver(formValidationSchema),
    mode: "all",
  });

  const handleFormSubmit = () => {
    console.log({
      ...methods.watch(),
    });
  };

  const handleChangeToNextStep = () => {
    if (formStep < 2) {
      setFormStep((state) => state + 1);
    }
  };

  const handleChangeToPreviousStep = () => {
    setFormStep((state) => state - 1);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-[512px] flex-col gap-4 rounded-lg border border-gray-100 bg-white p-8 text-gray-400 shadow-lg transition-all">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full ${
                formStep > 0 ? "bg-green-500" : "bg-purple-600"
              } p-2 text-sm font-bold text-white`}
            >
              {formStep > 0 ? <Check weight="bold" /> : 1}
            </span>
            <span className="text-base font-bold">Contato</span>
          </div>

          <CaretRight weight="bold" color="#323238" />

          <div
            className={`flex items-center gap-2 ${
              formStep < 1 && "text-gray-200"
            }`}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full ${
                formStep > 1
                  ? "bg-green-500"
                  : formStep === 0
                  ? "bg-gray-200"
                  : "bg-purple-600"
              } p-2 text-sm font-bold text-white`}
            >
              {formStep > 1 ? <Check weight="bold" /> : 2}
            </span>
            <span className="text-base font-bold">Empresa</span>
          </div>

          <CaretRight weight="bold" color="#323238" />

          <div
            className={`flex items-center gap-2 ${
              formStep < 2 && "text-gray-200"
            }`}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full ${
                formStep > 2
                  ? "bg-green-500"
                  : formStep < 2
                  ? "bg-gray-200"
                  : "bg-purple-600"
              } p-2 text-sm font-bold text-white`}
            >
              {formStep > 2 ? <Check weight="bold" /> : 3}
            </span>
            <span className="text-base font-bold">Projeto</span>
          </div>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleFormSubmit)}
            className="flex flex-1 flex-col gap-4"
          >
            {formStep === 0 && <Contact />}

            {formStep === 1 && <Company />}

            {formStep === 2 && <Objectives />}

            <NavigationButtons
              next={handleChangeToNextStep}
              previous={handleChangeToPreviousStep}
              step={formStep}
            />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}
