import { Input } from "./Input";

export function Contact() {
  return (
    <>
      <Input
        label="Nome"
        name="name"
        id="name"
        type="text"
        placeholder="Como prefere ser chamado?"
      />
      <Input
        label="Telefone"
        name="phone"
        id="phone"
        type="text"
        placeholder="Digite seu número de WhatsApp"
        masked
      />
      <Input
        label="E-mail"
        name="email"
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
      />
    </>
  );
}
