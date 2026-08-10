"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./input";
import { Select } from "./select";
import { Label } from "./label";
import { Button } from "./button";

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
      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor="name">Nome completo</Label>
        <Input 
          id="name"
          placeholder="Digite seu nome completo"
          hasError={!!errors.name}
          {...register("name", { required: "Campo obrigatório" })} 
        />
        {errors.name && (
          <span className="font-sans text-sm text-red-500 mt-1">{errors.name.message}</span>
        )}
      </div>

      {/* Campo: Telefone/Whatsapp */}
      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor="phone">Telefone/Whatsapp:</Label>
        <Input 
          id="phone"
          type="tel"
          placeholder="(00) 00000-0000"
          hasError={!!errors.phone}
          {...register("phone", { required: "Campo obrigatório" })} 
        />
        {errors.phone && (
          <span className="font-sans text-sm text-red-500 mt-1">{errors.phone.message}</span>
        )}
      </div>

      {/* Campo: Tipo de Empreendimento */}
      <div className="flex flex-col gap-1.5 w-full relative">
        <Label htmlFor="type">Tipo de Empreendimento:</Label>
        <div className="relative w-full">
          <Select 
            id="type"
            hasError={!!errors.type}
            {...register("type", { required: "Campo obrigatório" })} 
          >
            <option value="">Selecione uma opção</option>
            <option value="parque_aquatico">Parque Aquático</option>
            <option value="resort">Resort / Hotel</option>
            <option value="condominio">Condomínio Residencial</option>
            <option value="outro">Outro</option>
          </Select>
          {/* Seta customizada do select (opcional para simular visual do Figma) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-ink">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {errors.type && (
          <span className="font-sans text-sm text-red-500 mt-1">{errors.type.message}</span>
        )}
      </div>

      {/* Mensagens de Feedback */}
      {submitStatus === "success" && (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl font-sans text-sm border border-green-200">
          Formulário enviado com sucesso! Entraremos em contato em breve.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl font-sans text-sm border border-red-200">
          Ocorreu um erro ao enviar. Tente novamente.
        </div>
      )}

      {/* Botão de Envio */}
      <div className="mt-2 w-full">
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
