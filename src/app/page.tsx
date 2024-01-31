"use client";

import {useFormState, useFormStatus} from "react-dom";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {createPrediction} from "@/actions";

function FormContent() {
  const {pending} = useFormStatus();

  return (
    <>
      <Input
        defaultValue="https://replicate.delivery/pbxt/IJZOELWrncBcjdE1s5Ko8ou35ZOxjNxDqMf0BhoRUAtv76u4/room.png"
        name="image"
        placeholder="https://replicate.delivery/pbxt/IJZOELWrncBcjdE1s5Ko8ou35ZOxjNxDqMf0BhoRUAtv76u4/room.png"
        type="text"
      />
      <Textarea name="prompt" placeholder="An industrial bedroom" />
      <Button disabled={pending}>Crear</Button>
    </>
  );
}

export default function HomePage() {
  /* ESTE NOS PERMITE TENER DISPONIBLE EN EL CLIENT COMPONENT UN ELEMENTO DEL SERVER ACTUION */
  // Cuando se ejecuta el action y se ejecuta createPrediction, recuperamos el dato de prediction y lo tenemos
  // disponible en el client

  const [state, formAction] = useFormState(createPrediction, null);

  // Le paso mi server action y el valor inicial al useFormState
  console.log(state);

  return (
    <section className="m-auto grid max-w-[512px] gap-4">
      {state?.output ? <img alt="Previsualizacion del render" src={state.output[1]} /> : null}
      <form action={formAction} className=" grid gap-4">
        {/* Paso el formAction que viene del useFormState */} <FormContent />
      </form>
    </section>
  );
}
