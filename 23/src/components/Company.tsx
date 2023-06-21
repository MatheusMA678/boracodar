import { Input } from "./Input";
import { Textarea } from "./Textarea";

export function Company() {
  return (
    <>
      <Input
        label="Nome da Empresa"
        name="company"
        type="text"
        id="company"
        placeholder="Qual é o nome da empresa?"
      />
      <Input
        label="Número de funcionários"
        name="employees"
        id="employees"
        type="number"
        placeholder="Digite o número de colaboradores"
        valueAsNumber
      />
      <Textarea
        label="Sobre seu negócio"
        name="about"
        id="about"
        placeholder="Fale um pouco sobre seus produtos e serviços"
      />
    </>
  );
}
