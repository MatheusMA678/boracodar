import { ButtonOutline, ButtonSubmit, Button } from './Buttons'

interface NavigationButtonsProps {
  next: () => void;
  previous: () => void;
  step: number;
}

export function NavigationButtons({next, previous, step}: NavigationButtonsProps) {
  return (
    <div
      className={`mt-4 flex items-center ${
        step === 0 ? "justify-end" : "justify-between"
      }`}
    >
      {step > 0 && (
        <ButtonOutline
          type="button"
          onClick={previous}
        >
          Voltar
        </ButtonOutline>
      )}
      {step === 2 ? (
        <ButtonSubmit type="submit">Enviar Resposta</ButtonSubmit>
      ) : (
        <Button type="button" onClick={next}>
          Continuar
        </Button>
      )}
    </div>
  )
}
