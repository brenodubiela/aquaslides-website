"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";

const TYPE_OPTIONS = [
  { id: "parque_aquatico", label: "Parque Aquático" },
  { id: "resort", label: "Resort / Hotel" },
  { id: "condominio", label: "Condomínio Residencial" },
  { id: "outro", label: "Outro" },
];

/**
 * Primitivo `<ContactForm />` — Aqua Slides Design System
 * 
 * Formulário de contato principal, com validações e estados.
 * Figma: Nó 20509:639
 * 
 * @param {object} props
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function ContactForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  
  const [submitStatus, setSubmitStatus] = React.useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const onSubmit = async (data) => {
    setSubmitStatus("loading");
    
    // Simula API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    if (data.name.toLowerCase() === "erro") {
      setSubmitStatus("error");
    } else {
      setSubmitStatus("success");
      reset();
    }
    
    // Volta para idle depois de mostrar a mensagem por um tempo
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className={`flex flex-col gap-[18px] w-full ${className || ""}`}
      {...props}
    >
      {/* Campo: Nome Completo */}
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="name" className="text-white">Nome completo</Label>
        <Input 
          id="name"
          placeholder="Digite seu nome completo"
          hasError={!!errors.name}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary focus:ring-secondary"
          {...register("name", { required: "Campo obrigatório" })} 
        />
        {errors.name && (
          <span className="font-sans text-sm text-red-400">{errors.name.message}</span>
        )}
      </div>

      {/* Campo: Telefone/Whatsapp */}
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="phone" className="text-white">Telefone/Whatsapp:</Label>
        <Input 
          id="phone"
          type="tel"
          placeholder="(00) 00000-0000"
          hasError={!!errors.phone}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary focus:ring-secondary"
          {...register("phone", { required: "Campo obrigatório" })} 
        />
        {errors.phone && (
          <span className="font-sans text-sm text-red-400">{errors.phone.message}</span>
        )}
      </div>

      {/* Campo: Tipo de Empreendimento (Multi-select) */}
      <div className="flex flex-col gap-3 w-full">
        <Label className="text-white">Tipo de Empreendimento (Múltipla escolha):</Label>
        <div className="flex flex-wrap gap-3">
          {TYPE_OPTIONS.map((opt) => (
            <label key={opt.id} className="cursor-pointer relative">
              <input
                type="checkbox"
                value={opt.id}
                className="peer sr-only"
                {...register("type", { required: "Selecione pelo menos uma opção" })}
              />
              <div className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white font-sans text-sm peer-checked:bg-secondary peer-checked:border-secondary peer-checked:text-secondary-dark transition-all duration-200 hover:bg-white/20 select-none">
                {opt.label}
              </div>
            </label>
          ))}
        </div>
        {errors.type && (
          <span className="font-sans text-sm text-red-400">{errors.type.message}</span>
        )}
      </div>

      {/* Mensagens de Feedback */}
      {submitStatus === "success" && (
        <div className="bg-green-500/20 text-green-200 p-4 rounded-xl font-sans text-sm border border-green-500/30">
          Formulário enviado com sucesso! Entraremos em contato em breve.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="bg-red-500/20 text-red-200 p-4 rounded-xl font-sans text-sm border border-red-500/30">
          Ocorreu um erro ao enviar. Tente novamente.
        </div>
      )}

      {/* Botão de Envio */}
      <div className="mt-4 w-full">
        <Button 
          type="submit" 
          variant="halo-primary" 
          className="w-full"
          disabled={isSubmitting || submitStatus === "loading"}
        >
          {isSubmitting || submitStatus === "loading" ? "Enviando..." : "Enviar solicitação"}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
