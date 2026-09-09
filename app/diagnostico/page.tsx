import type { Metadata } from "next";
import DiagnosticoClient from "./DiagnosticoClient";

export const metadata: Metadata = {
  title: "Diagnóstico inicial — Nexo Market Entry",
  description:
    "Completa el formulario de diagnóstico y recibe una evaluación de viabilidad para abrir tu empresa en Brasil: estructura societaria, procurador residente, capital y cronograma.",
  alternates: { canonical: "https://nexomarketentry.com/diagnostico" },
};

export default function DiagnosticoPage() {
  return <DiagnosticoClient />;
}
