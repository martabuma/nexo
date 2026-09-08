"use client";

import { useState, FormEvent } from "react";
import { WEB3FORMS_ACCESS_KEY } from "../lib/web3forms";

type Lang = "es" | "pt" | "en";

const dict: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    intro: string;
    sectionContact: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    sectionService: string;
    serviceNeedQuestion: string;
    serviceNeedOptions: string[];
    sectionCompany: string;
    countryLabel: string;
    countryOptions: string[];
    activity: string;
    numberOfPartnersLabel: string;
    numberOfPartnersOptions: string[];
    partnerNationalitiesLabel: string;
    personTypeQuestion: string;
    personTypeOptions: string[];
    alreadyOperatingQuestion: string;
    annualRevenueLabel: string;
    annualRevenueOptions: string[];
    capitalRangeLabel: string;
    capitalRangeOptions: string[];
    externalInvestmentQuestion: string;
    hiringRangeLabel: string;
    hiringRangeOptions: string[];
    residencyVisaQuestion: string;
    repatriateQuestion: string;
    desiredLocationLabel: string;
    desiredLocationOptions: string[];
    expectedTimelineLabel: string;
    expectedTimelineOptions: string[];
    yesLabel: string;
    noLabel: string;
    selectPlaceholder: string;
    sectionConsent: string;
    consentText: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    backHome: string;
  }
> = {
  es: {
    eyebrow: "Diagnóstico inicial",
    title: "Cuéntanos sobre tu proyecto",
    intro: "Completa este formulario — es la base de tu diagnóstico de viabilidad y estructura societaria. La mayoría de las preguntas son de selección rápida.",
    sectionContact: "Datos de contacto",
    name: "Nombre completo",
    company: "Nombre de la empresa (si ya existe)",
    email: "Email de contacto",
    phone: "Teléfono / WhatsApp (con código de país)",
    sectionService: "Necesidad del servicio",
    serviceNeedQuestion: "¿Ya has decidido abrir empresa en Brasil, o todavía necesitas evaluar si el proyecto es viable?",
    serviceNeedOptions: [
      "Ya decidí, necesito ejecución completa (apertura de la empresa)",
      "Todavía estoy evaluando, necesito un diagnóstico de viabilidad primero",
      "No estoy seguro/a, quiero hablar antes de decidir",
    ],
    sectionCompany: "Datos de la empresa y del proyecto",
    countryLabel: "País de origen",
    countryOptions: ["Argentina", "Uruguay", "Colombia", "España", "Portugal", "Estados Unidos", "Otro país"],
    activity: "Actividad exacta del negocio (evita descripciones genéricas)",
    numberOfPartnersLabel: "Número de socios",
    numberOfPartnersOptions: ["1 (soy el único socio)", "2", "3", "4 o más"],
    partnerNationalitiesLabel: "Nacionalidad(es) de los socios",
    personTypeQuestion: "¿Invierte una persona física o jurídica?",
    personTypeOptions: ["Persona física", "Persona jurídica"],
    alreadyOperatingQuestion: "¿La empresa ya opera actualmente en tu país de origen?",
    annualRevenueLabel: "Facturación anual aproximada",
    annualRevenueOptions: [
      "Empresa nueva, todavía no factura",
      "Menos de 100.000 USD",
      "100.000 – 500.000 USD",
      "500.000 – 2.000.000 USD",
      "Más de 2.000.000 USD",
      "Prefiero no decir",
    ],
    capitalRangeLabel: "Monto de capital a invertir (aproximado)",
    capitalRangeOptions: [
      "Menos de R$ 50.000",
      "R$ 50.000 – R$ 150.000",
      "R$ 150.000 – R$ 500.000",
      "R$ 500.000 – R$ 1.000.000",
      "Más de R$ 1.000.000",
      "Aún no lo sé",
    ],
    externalInvestmentQuestion: "¿Planeas captar inversión externa en el futuro?",
    hiringRangeLabel: "¿Vas a contratar personal en Brasil?",
    hiringRangeOptions: ["No, por ahora no", "1 a 5 personas", "6 a 20 personas", "Más de 20 personas"],
    residencyVisaQuestion: "¿Algún socio busca residencia o visado de inversor?",
    repatriateQuestion: "¿Planeas repatriar ganancias regularmente a tu país de origen?",
    desiredLocationLabel: "Ubicación deseada en Brasil",
    desiredLocationOptions: [
      "São Paulo",
      "Paraná",
      "Santa Catarina",
      "Minas Gerais",
      "Goiás",
      "Río de Janeiro",
      "Otro estado",
      "No lo sé, quiero que me asesoren",
    ],
    expectedTimelineLabel: "Plazo esperado para empezar a operar",
    expectedTimelineOptions: ["Lo antes posible (0–3 meses)", "3–6 meses", "6–12 meses", "Más de 12 meses", "Todavía no lo sé"],
    yesLabel: "Sí",
    noLabel: "No",
    selectPlaceholder: "Selecciona una opción",
    sectionConsent: "Consentimiento de datos",
    consentText:
      "Autorizo el tratamiento de mis datos personales facilitados en este formulario para fines de evaluación y diagnóstico de mi proyecto, conforme al RGPD y, cuando aplique, a la LGPD (Ley General de Protección de Datos de Brasil).",
    submit: "Enviar diagnóstico",
    sending: "Enviando...",
    success: "¡Gracias! Recibimos tu información y te contactaremos pronto para avanzar con el diagnóstico.",
    error: "Hubo un error al enviar el formulario. Intenta de nuevo o escríbenos por WhatsApp.",
    backHome: "← Inicio",
  },
  pt: {
    eyebrow: "Diagnóstico inicial",
    title: "Conte-nos sobre o seu projeto",
    intro: "Preencha este formulário — é a base do seu diagnóstico de viabilidade e estrutura societária. A maioria das perguntas é de seleção rápida.",
    sectionContact: "Dados de contato",
    name: "Nome completo",
    company: "Nome da empresa (se já existir)",
    email: "E-mail de contato",
    phone: "Telefone / WhatsApp (com código do país)",
    sectionService: "Necessidade do serviço",
    serviceNeedQuestion: "Você já decidiu abrir empresa no Brasil, ou ainda precisa avaliar se o projeto é viável?",
    serviceNeedOptions: [
      "Já decidi, preciso de execução completa (abertura da empresa)",
      "Ainda estou avaliando, preciso de um diagnóstico de viabilidade primeiro",
      "Não tenho certeza / quero conversar antes de decidir",
    ],
    sectionCompany: "Dados da empresa e do projeto",
    countryLabel: "País de origem",
    countryOptions: ["Argentina", "Uruguai", "Colômbia", "Espanha", "Portugal", "Estados Unidos", "Outro país"],
    activity: "Atividade exata do negócio (evite descrições genéricas)",
    numberOfPartnersLabel: "Número de sócios",
    numberOfPartnersOptions: ["1 (sou o único sócio)", "2", "3", "4 ou mais"],
    partnerNationalitiesLabel: "Nacionalidade(s) dos sócios",
    personTypeQuestion: "Pessoa física ou jurídica investe?",
    personTypeOptions: ["Pessoa física", "Pessoa jurídica"],
    alreadyOperatingQuestion: "A empresa já opera atualmente no país de origem?",
    annualRevenueLabel: "Faturamento anual aproximado",
    annualRevenueOptions: [
      "Empresa nova, ainda não fatura",
      "Menos de 100.000 USD",
      "100.000 – 500.000 USD",
      "500.000 – 2.000.000 USD",
      "Mais de 2.000.000 USD",
      "Prefiro não dizer",
    ],
    capitalRangeLabel: "Valor de capital a investir (aproximado)",
    capitalRangeOptions: [
      "Menos de R$ 50.000",
      "R$ 50.000 – R$ 150.000",
      "R$ 150.000 – R$ 500.000",
      "R$ 500.000 – R$ 1.000.000",
      "Mais de R$ 1.000.000",
      "Ainda não sei",
    ],
    externalInvestmentQuestion: "Planeja captar investimento externo no futuro?",
    hiringRangeLabel: "Vai contratar funcionários no Brasil?",
    hiringRangeOptions: ["Não, por enquanto não", "1 a 5 pessoas", "6 a 20 pessoas", "Mais de 20 pessoas"],
    residencyVisaQuestion: "Algum sócio busca residência ou visto de investidor?",
    repatriateQuestion: "Planeja repatriar lucros regularmente para o país de origem?",
    desiredLocationLabel: "Localização desejada no Brasil",
    desiredLocationOptions: [
      "São Paulo",
      "Paraná",
      "Santa Catarina",
      "Minas Gerais",
      "Goiás",
      "Rio de Janeiro",
      "Outro estado",
      "Não sei, quero orientação",
    ],
    expectedTimelineLabel: "Prazo esperado para começar a operar",
    expectedTimelineOptions: ["O quanto antes (0–3 meses)", "3–6 meses", "6–12 meses", "Mais de 12 meses", "Ainda não sei"],
    yesLabel: "Sim",
    noLabel: "Não",
    selectPlaceholder: "Selecione uma opção",
    sectionConsent: "Consentimento de dados",
    consentText:
      "Autorizo o tratamento dos meus dados pessoais fornecidos neste formulário para fins de avaliação e diagnóstico do meu projeto, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e, quando aplicável, com o Regulamento Geral de Proteção de Dados (RGPD/GDPR).",
    submit: "Enviar diagnóstico",
    sending: "Enviando...",
    success: "Obrigado! Recebemos suas informações e entraremos em contato em breve para avançar com o diagnóstico.",
    error: "Houve um erro ao enviar o formulário. Tente novamente ou fale conosco pelo WhatsApp.",
    backHome: "← Início",
  },
  en: {
    eyebrow: "Initial diagnosis",
    title: "Tell us about your project",
    intro: "Fill out this form — it's the basis for your viability and corporate structure diagnosis. Most questions are quick multiple-choice.",
    sectionContact: "Contact details",
    name: "Full name",
    company: "Company name (if it already exists)",
    email: "Contact email",
    phone: "Phone / WhatsApp (with country code)",
    sectionService: "Service needed",
    serviceNeedQuestion: "Have you already decided to open a company in Brazil, or do you still need to assess whether the project is viable?",
    serviceNeedOptions: [
      "I've already decided, I need full execution (company setup)",
      "I'm still assessing, I need a viability diagnosis first",
      "I'm not sure yet, I want to talk before deciding",
    ],
    sectionCompany: "Company and project details",
    countryLabel: "Country of origin",
    countryOptions: ["Argentina", "Uruguay", "Colombia", "Spain", "Portugal", "United States", "Other country"],
    activity: "Exact business activity (avoid generic descriptions)",
    numberOfPartnersLabel: "Number of partners",
    numberOfPartnersOptions: ["1 (I'm the only partner)", "2", "3", "4 or more"],
    partnerNationalitiesLabel: "Partner(s) nationality/ies",
    personTypeQuestion: "Is the investor an individual or a company?",
    personTypeOptions: ["Individual", "Company"],
    alreadyOperatingQuestion: "Is the company already operating in its home country?",
    annualRevenueLabel: "Approximate annual revenue",
    annualRevenueOptions: [
      "New company, no revenue yet",
      "Under 100,000 USD",
      "100,000 – 500,000 USD",
      "500,000 – 2,000,000 USD",
      "Over 2,000,000 USD",
      "Prefer not to say",
    ],
    capitalRangeLabel: "Capital to invest (approximate)",
    capitalRangeOptions: [
      "Under R$ 50,000",
      "R$ 50,000 – R$ 150,000",
      "R$ 150,000 – R$ 500,000",
      "R$ 500,000 – R$ 1,000,000",
      "Over R$ 1,000,000",
      "Not sure yet",
    ],
    externalInvestmentQuestion: "Are you planning to raise outside investment in the future?",
    hiringRangeLabel: "Will you hire staff in Brazil?",
    hiringRangeOptions: ["No, not for now", "1 to 5 people", "6 to 20 people", "More than 20 people"],
    residencyVisaQuestion: "Is any partner seeking residency or an investor visa?",
    repatriateQuestion: "Do you plan to regularly repatriate profits to your home country?",
    desiredLocationLabel: "Desired location in Brazil",
    desiredLocationOptions: [
      "São Paulo",
      "Paraná",
      "Santa Catarina",
      "Minas Gerais",
      "Goiás",
      "Rio de Janeiro",
      "Other state",
      "Not sure, I'd like guidance",
    ],
    expectedTimelineLabel: "Expected timeline to start operating",
    expectedTimelineOptions: ["As soon as possible (0–3 months)", "3–6 months", "6–12 months", "More than 12 months", "Not sure yet"],
    yesLabel: "Yes",
    noLabel: "No",
    selectPlaceholder: "Select an option",
    sectionConsent: "Data consent",
    consentText:
      "I authorize the processing of the personal data provided in this form for the purpose of evaluating and diagnosing my project, in accordance with GDPR and, where applicable, Brazil's LGPD (General Data Protection Law).",
    submit: "Send diagnosis",
    sending: "Sending...",
    success: "Thanks! We received your information and will be in touch soon to move forward with the diagnosis.",
    error: "There was an error sending the form. Please try again or message us on WhatsApp.",
    backHome: "← Home",
  },
};

const langLabel: Record<Lang, string> = { es: "ES", pt: "PT", en: "EN" };

function YesNo({ name, yesLabel, noLabel }: { name: string; yesLabel: string; noLabel: string }) {
  return (
    <div className="flex gap-5">
      <label className="flex items-center gap-2 font-body text-sm text-textlight/85">
        <input type="radio" name={name} value={yesLabel} required className="accent-ouro" />
        {yesLabel}
      </label>
      <label className="flex items-center gap-2 font-body text-sm text-textlight/85">
        <input type="radio" name={name} value={noLabel} required className="accent-ouro" />
        {noLabel}
      </label>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-textlight/55">{label}</label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 font-body text-sm text-textlight outline-none focus:border-ouro/60";

const selectClass =
  "w-full appearance-none rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 font-body text-sm text-textlight outline-none focus:border-ouro/60 bg-no-repeat";

function Select({
  name,
  options,
  placeholder,
  required = true,
}: {
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        name={name}
        required={required}
        defaultValue=""
        className={selectClass}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23C7A45B'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundPosition: "right 0.9rem center",
          backgroundSize: "1.1em",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-inkdeep text-textlight">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function DiagnosticoPage() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const l = params.get("lang");
      if (l === "es" || l === "pt" || l === "en") return l;
    }
    return "es";
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t = dict[lang];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Novo diagnóstico — Nexo Market Entry");
    formData.append("from_name", "Nexo Market Entry (formulário de diagnóstico)");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 px-5 py-3.5 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <a href="/" className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-textlight">
              Nexo<span className="text-ouro">.</span>
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-textlight/50">
              Market Entry
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/" className="font-mono text-xs text-textlight/70 hover:text-textlight">
              {t.backHome}
            </a>
            <div className="flex items-center gap-1 rounded-full border border-white/15 p-1 font-mono text-xs">
              {(Object.keys(dict) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    lang === l ? "bg-ouro text-inkdeep" : "text-textlight/60 hover:text-textlight"
                  }`}
                >
                  {langLabel[l]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-visto/90">{t.eyebrow}</p>
          <h1 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 font-body text-sm leading-relaxed text-textlight/65">{t.intro}</p>

          {status === "success" ? (
            <div className="mt-10 rounded-sm border border-visto/40 bg-visto/10 px-6 py-10 text-center">
              <p className="font-body text-sm text-textlight/90">{t.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-10">
              <input type="hidden" name="language" value={lang} />

              {/* SECTION 1 */}
              <div className="space-y-4">
                <h2 className="font-display text-lg font-bold text-textlight">{t.sectionContact}</h2>
                <Field label={t.name}>
                  <input type="text" name="name" required className={inputClass} />
                </Field>
                <Field label={t.company}>
                  <input type="text" name="company" className={inputClass} />
                </Field>
                <Field label={t.email}>
                  <input type="email" name="email" required className={inputClass} />
                </Field>
                <Field label={t.phone}>
                  <input type="tel" name="phone" required className={inputClass} />
                </Field>
              </div>

              {/* SECTION 2 */}
              <div className="space-y-3 border-t border-white/10 pt-8">
                <h2 className="font-display text-lg font-bold text-textlight">{t.sectionService}</h2>
                <p className="font-body text-sm text-textlight/75">{t.serviceNeedQuestion}</p>
                <div className="space-y-2">
                  {t.serviceNeedOptions.map((opt) => (
                    <label key={opt} className="flex items-start gap-2.5 font-body text-sm text-textlight/85">
                      <input type="radio" name="service_need" value={opt} required className="mt-1 accent-ouro" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* SECTION 3 */}
              <div className="space-y-4 border-t border-white/10 pt-8">
                <h2 className="font-display text-lg font-bold text-textlight">{t.sectionCompany}</h2>

                <Field label={t.countryLabel}>
                  <Select name="country" options={t.countryOptions} placeholder={t.selectPlaceholder} />
                </Field>

                <Field label={t.activity}>
                  <input type="text" name="activity" required className={inputClass} />
                </Field>

                <Field label={t.numberOfPartnersLabel}>
                  <Select name="number_of_partners" options={t.numberOfPartnersOptions} placeholder={t.selectPlaceholder} />
                </Field>

                <Field label={t.partnerNationalitiesLabel}>
                  <input type="text" name="partner_nationalities" required className={inputClass} />
                </Field>

                <Field label={t.personTypeQuestion}>
                  <div className="flex gap-5">
                    {t.personTypeOptions.map((opt) => (
                      <label key={opt} className="flex items-center gap-2 font-body text-sm text-textlight/85">
                        <input type="radio" name="person_type" value={opt} required className="accent-ouro" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </Field>

                <Field label={t.alreadyOperatingQuestion}>
                  <YesNo name="already_operating" yesLabel={t.yesLabel} noLabel={t.noLabel} />
                </Field>

                <Field label={t.annualRevenueLabel}>
                  <Select name="annual_revenue" options={t.annualRevenueOptions} placeholder={t.selectPlaceholder} />
                </Field>

                <Field label={t.capitalRangeLabel}>
                  <Select name="capital_range" options={t.capitalRangeOptions} placeholder={t.selectPlaceholder} />
                </Field>

                <Field label={t.externalInvestmentQuestion}>
                  <YesNo name="external_investment" yesLabel={t.yesLabel} noLabel={t.noLabel} />
                </Field>

                <Field label={t.hiringRangeLabel}>
                  <Select name="hiring_range" options={t.hiringRangeOptions} placeholder={t.selectPlaceholder} />
                </Field>

                <Field label={t.residencyVisaQuestion}>
                  <YesNo name="residency_visa" yesLabel={t.yesLabel} noLabel={t.noLabel} />
                </Field>

                <Field label={t.repatriateQuestion}>
                  <YesNo name="repatriate_profits" yesLabel={t.yesLabel} noLabel={t.noLabel} />
                </Field>

                <Field label={t.desiredLocationLabel}>
                  <Select name="desired_location" options={t.desiredLocationOptions} placeholder={t.selectPlaceholder} />
                </Field>

                <Field label={t.expectedTimelineLabel}>
                  <Select name="expected_timeline" options={t.expectedTimelineOptions} placeholder={t.selectPlaceholder} />
                </Field>
              </div>

              {/* SECTION 4 */}
              <div className="space-y-3 border-t border-white/10 pt-8">
                <h2 className="font-display text-lg font-bold text-textlight">{t.sectionConsent}</h2>
                <label className="flex items-start gap-2.5 font-body text-sm text-textlight/85">
                  <input type="checkbox" name="consent" required className="mt-1 accent-ouro" />
                  {t.consentText}
                </label>
              </div>

              {status === "error" && <p className="font-body text-xs text-selo">{t.error}</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-ouro px-6 py-3.5 font-body text-sm font-semibold text-inkdeep transition-opacity hover:bg-ouro/90 disabled:opacity-60"
              >
                {status === "sending" ? t.sending : t.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto max-w-2xl text-center font-mono text-[11px] text-textlight/40">
          © {new Date().getFullYear()} Nexo Market Entry. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
