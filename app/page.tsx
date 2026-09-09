"use client";

import { useState } from "react";
import EntryMap from "./components/EntryMap";
import { WHATSAPP_NUMBER } from "./lib/whatsapp";

type Lang = "es" | "pt" | "en";

const dict: Record<
  Lang,
  {
    nav: { work: string; process: string; services: string; blog: string; cta: string };
    hero: {
      eyebrow: string;
      headline1: string;
      headline2: string;
      sub: string;
      cta: string;
      ctaSecondary: string;
      mapCaption: string;
      brLabel: string;
    };
    stats: {
      opportunityTitle: string;
      opportunityStats: { value: string; label: string }[];
      confidenceTitle: string;
      confidenceBody: string;
      confidenceBullets: string[];
    };
    problem: {
      eyebrow: string;
      title: string;
      body: string;
      items: string[];
    };
    process: {
      eyebrow: string;
      title: string;
      steps: { n: string; title: string; body: string }[];
    };
    services: {
      eyebrow: string;
      title: string;
      cards: { name: string; tag: string; body: string }[];
      note: string;
    };
    markets: { eyebrow: string; title: string; body: string; list: string[] };
    trust: { title: string; body: string };
    faq: {
      eyebrow: string;
      title: string;
      items: { q: string; a: string }[];
    };
    contact: {
      eyebrow: string;
      title: string;
      body: string;
      emailLabel: string;
      whatsLabel: string;
      formName: string;
      formEmail: string;
      formPhone: string;
      formMessage: string;
      formMessagePlaceholder: string;
      formSubmit: string;
      formSending: string;
      formSuccess: string;
      formError: string;
    };
    footer: { rights: string; disclaimer: string };
  }
> = {
  es: {
    nav: { work: "Cómo trabajamos", process: "Proceso", services: "Servicios", blog: "Blog", cta: "Hablemos" },
    hero: {
      eyebrow: "Consultoría de entrada al mercado brasileño",
      headline1: "Brasil: 22 trámites",
      headline2: "para socios extranjeros. Tú te enfocas en tu negocio, nosotros nos encargamos del resto.",
      sub: "Coordinamos estructura societaria, procurador residente y apertura completa junto a una red de profesionales registrados en Brasil, para que tu empresa opere sin sorpresas.",
      cta: "Agenda tu diagnóstico inicial",
      ctaSecondary: "Ver cómo trabajamos",
      mapCaption: "Nexo conecta el mundo con Brasil.",
      brLabel: "BRASIL",
    },
    stats: {
      opportunityTitle: "El mercado que te espera",
      opportunityStats: [
        { value: "+200M", label: "consumidores en la economía más grande de Latinoamérica." },
        { value: "+106.000", label: "microempresarios extranjeros activos en Brasil, un 24% más que el año anterior." },
        { value: "4,6M", label: "pequeños negocios abiertos en Brasil en 2025, récord histórico." },
      ],
      confidenceTitle: "Todo en un mismo lugar.",
      confidenceBody:
        "Abogado, contable y coordinación de trámites bajo un solo equipo, para que no tengas que armar tú mismo ese rompecabezas.",
      confidenceBullets: [
        "Un equipo, no cinco proveedores distintos.",
        "Abogado y contable ya alineados entre sí.",
        "Tú hablas con una sola persona, no con cada organismo.",
      ],
    },
    problem: {
      eyebrow: "El problema real",
      title: "No es que sea imposible. Es que nadie te explica el orden.",
      body: "Junta Comercial, CNPJ, SCE-IED, procurador residente, apostillas, traducción jurada: cada organismo tiene su propio idioma y su propio plazo. Un solo paso mal hecho retrasa todos los que siguen.",
      items: [
        "Sin acceso al Simples Nacional por tener capital extranjero.",
        "Documentos que deben apostillarse antes de pisar Brasil.",
        "Un procurador residente es obligatorio, no opcional.",
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Tres movimientos, un solo punto de contacto.",
      steps: [
        {
          n: "01",
          title: "Diagnóstico",
          body: "Analizamos tu sector, la estructura societaria idónea y las restricciones aplicables. Carga tributaria validada por un contable registrado.",
        },
        {
          n: "02",
          title: "Coordinación",
          body: "Gestionamos Junta Comercial, CNPJ y SCE-IED junto a nuestra red legal y contable, con procurador residente incluido.",
        },
        {
          n: "03",
          title: "Apertura",
          body: "Tu empresa lista para operar: cuenta bancaria abierta, obligaciones iniciales cubiertas, hoja de ruta post-apertura entregada.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Un nivel para cada momento del proyecto.",
      cards: [
        { name: "Starter", tag: "Diagnóstico", body: "Viabilidad, estructura recomendada y calendario realista antes de comprometer capital." },
        { name: "Growth", tag: "Apertura completa", body: "Ejecución de principio a fin: registro, procurador, cuenta bancaria, un único contacto." },
        { name: "Enterprise", tag: "Apertura + acompañamiento", body: "Todo lo anterior, más acompañamiento continuo y revisión trimestral de la estructura tras la apertura." },
      ],
      note: "Cada nivel incluye coordinación con nuestra red de abogados y contables registrados. Nunca sustituimos su trabajo.",
    },
    markets: {
      eyebrow: "A quién ayudamos",
      title: "Pymes e inversores que ya miran a Brasil.",
      body: "Trabajamos en tu idioma, con tu huso horario en mente.",
      list: ["Argentina", "Uruguay", "Colombia", "España", "Portugal", "Estados Unidos"],
    },
    trust: {
      title: "Coordinamos. No sustituimos.",
      body: "No prestamos asesoría legal ni contable de forma directa: esa parte queda siempre en manos de abogados y contables registrados de nuestra red. Nuestro trabajo es que ninguna pieza se pierda entre organismos.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que más nos preguntan.",
      items: [
        {
          q: "¿Necesito estar en Brasil para abrir una empresa?",
          a: "No. Podés coordinar todo el proceso a distancia con un procurador residente que te representa en Brasil. Solo el registro migratorio (si pedís visado) y algún paso puntual de apertura de cuenta bancaria exigen presencia física.",
        },
        {
          q: "¿Cuánto tiempo tarda el proceso de apertura?",
          a: "Entre 90 y 180 días, según el organismo y el estado elegido. Los estados con mayor digitalización, como Paraná, suelen ser más rápidos.",
        },
        {
          q: "¿Qué es un procurador residente y por qué es obligatorio?",
          a: "Es una persona con residencia en Brasil que representa legalmente a un socio extranjero ante organismos como el Banco Central y la Receita Federal. Es obligatorio por ley para cualquier empresa con socio extranjero no residente.",
        },
        {
          q: "¿Necesito un abogado para abrir una empresa en Brasil?",
          a: "No siempre. Para la apertura societaria estándar no es obligatorio, pero sí lo es para tramitar un visado de inversión, ya que implica representación legal formal ante el CNIg.",
        },
        {
          q: "¿Qué estructura societaria conviene, LTDA o S.A.?",
          a: "Para más del 90% de los casos, la LTDA es la opción correcta: no exige capital mínimo y es más simple de mantener. La S.A. solo tiene sentido si buscás captar inversión institucional.",
        },
        {
          q: "¿Cuánto capital necesito para abrir una empresa en Brasil?",
          a: "No hay un mínimo legal para una empresa estándar. Si además querés un visado de inversión, el mínimo exigido es de R$ 500.000 (o R$ 150.000 para empresas de base tecnológica).",
        },
      ],
    },
    contact: {
      eyebrow: "Siguiente paso",
      title: "Cuéntanos sobre tu proyecto en Brasil.",
      body: "Con una llamada de 30 minutos es suficiente para saber si tu proyecto es viable y qué estructura te conviene.",
      emailLabel: "Completar diagnóstico",
      whatsLabel: "WhatsApp directo",
      formName: "Nombre completo",
      formEmail: "Email",
      formPhone: "Teléfono / WhatsApp",
      formMessage: "Cuéntanos brevemente tu proyecto",
      formMessagePlaceholder: "Qué quieres abrir en Brasil, de dónde eres, y cualquier detalle que nos ayude a entender tu caso...",
      formSubmit: "Enviar",
      formSending: "Enviando...",
      formSuccess: "¡Gracias! Recibimos tu mensaje y te contactaremos pronto.",
      formError: "Hubo un error al enviar el formulario. Intenta de nuevo o escríbenos por WhatsApp.",
    },
    footer: {
      rights: "Nexo Market Entry. Todos los derechos reservados.",
      disclaimer: "Nexo Market Entry coordina procesos de entrada al mercado brasileño y no constituye una firma de abogados ni de contables.",
    },
  },
  pt: {
    nav: { work: "Como trabalhamos", process: "Processo", services: "Serviços", blog: "Blog", cta: "Fale conosco" },
    hero: {
      eyebrow: "Consultoria de entrada no mercado brasileiro",
      headline1: "O Brasil: 22 etapas",
      headline2: "para sócios estrangeiros. Você foca no seu negócio, nós cuidamos do resto.",
      sub: "Coordenamos estrutura societária, procurador residente e abertura completa junto a uma rede de profissionais registrados no Brasil, para sua empresa operar sem surpresas.",
      cta: "Agende seu diagnóstico inicial",
      ctaSecondary: "Ver como trabalhamos",
      mapCaption: "A Nexo conecta o mundo com o Brasil.",
      brLabel: "BRASIL",
    },
    stats: {
      opportunityTitle: "O mercado que te espera",
      opportunityStats: [
        { value: "+200M", label: "consumidores na maior economia da América Latina." },
        { value: "+106.000", label: "microempreendedores estrangeiros ativos no Brasil, 24% a mais que no ano anterior." },
        { value: "4,6M", label: "pequenos negócios abertos no Brasil em 2025, recorde histórico." },
      ],
      confidenceTitle: "Tudo em um só lugar.",
      confidenceBody:
        "Advogado, contador e coordenação de trâmites em uma única equipe, para você não precisar montar esse quebra-cabeça sozinho.",
      confidenceBullets: [
        "Uma equipe, não cinco fornecedores diferentes.",
        "Advogado e contador já alinhados entre si.",
        "Você fala com uma única pessoa, não com cada órgão.",
      ],
    },
    problem: {
      eyebrow: "O problema real",
      title: "Não é impossível. É que ninguém explica a ordem certa.",
      body: "Junta Comercial, CNPJ, SCE-IED, procurador residente, apostilamento, tradução juramentada: cada órgão tem seu próprio idioma e seu próprio prazo. Um passo errado atrasa todos os seguintes.",
      items: [
        "Sem acesso ao Simples Nacional por ter capital estrangeiro.",
        "Documentos que precisam ser apostilados antes de chegar ao Brasil.",
        "Procurador residente é obrigatório, não opcional.",
      ],
    },
    process: {
      eyebrow: "Como trabalhamos",
      title: "Três movimentos, um único ponto de contato.",
      steps: [
        {
          n: "01",
          title: "Diagnóstico",
          body: "Analisamos seu setor, a estrutura societária ideal e as restrições aplicáveis. Carga tributária validada por contador registrado.",
        },
        {
          n: "02",
          title: "Coordenação",
          body: "Gerenciamos Junta Comercial, CNPJ e SCE-IED junto à nossa rede jurídica e contábil, com procurador residente incluído.",
        },
        {
          n: "03",
          title: "Abertura",
          body: "Sua empresa pronta para operar: conta bancária aberta, obrigações iniciais cobertas, roteiro pós-abertura entregue.",
        },
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "Um nível para cada momento do projeto.",
      cards: [
        { name: "Starter", tag: "Diagnóstico", body: "Viabilidade, estrutura recomendada e cronograma realista antes de comprometer capital." },
        { name: "Growth", tag: "Abertura completa", body: "Execução ponta a ponta: registro, procurador, conta bancária, um único contato." },
        { name: "Enterprise", tag: "Abertura + acompanhamento", body: "Tudo isso, mais acompanhamento contínuo e revisão trimestral da estrutura após a abertura." },
      ],
      note: "Cada nível inclui coordenação com nossa rede de advogados e contadores registrados. Nunca substituímos o trabalho deles.",
    },
    markets: {
      eyebrow: "A quem ajudamos",
      title: "PMEs e investidores que já olham para o Brasil.",
      body: "Trabalhamos no seu idioma, considerando seu fuso horário.",
      list: ["Argentina", "Uruguai", "Colômbia", "Espanha", "Portugal", "Estados Unidos"],
    },
    trust: {
      title: "Coordenamos. Não substituímos.",
      body: "Não prestamos assessoria jurídica nem contábil diretamente: essa parte fica sempre com advogados e contadores registrados da nossa rede. Nosso trabalho é garantir que nada se perca entre os órgãos.",
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      title: "O que mais nos perguntam.",
      items: [
        {
          q: "Preciso estar no Brasil para abrir uma empresa?",
          a: "Não. Você pode coordenar todo o processo à distância com um procurador residente que te representa no Brasil. Só o registro migratório (se pedir visto) e alguma etapa pontual de abertura de conta bancária exigem presença física.",
        },
        {
          q: "Quanto tempo leva o processo de abertura?",
          a: "Entre 90 e 180 dias, dependendo do órgão e do estado escolhido. Estados com maior digitalização, como o Paraná, costumam ser mais rápidos.",
        },
        {
          q: "O que é um procurador residente e por que é obrigatório?",
          a: "É uma pessoa com residência no Brasil que representa legalmente um sócio estrangeiro perante órgãos como o Banco Central e a Receita Federal. É obrigatório por lei para qualquer empresa com sócio estrangeiro não residente.",
        },
        {
          q: "Preciso de um advogado para abrir uma empresa no Brasil?",
          a: "Nem sempre. Para a abertura societária padrão não é obrigatório, mas é para tramitar um visto de investidor, já que implica representação legal formal perante o CNIg.",
        },
        {
          q: "Qual estrutura societária escolher, LTDA ou S.A.?",
          a: "Para mais de 90% dos casos, a LTDA é a opção correta: não exige capital mínimo e é mais simples de manter. A S.A. só faz sentido se buscar captar investimento institucional.",
        },
        {
          q: "Quanto capital preciso para abrir uma empresa no Brasil?",
          a: "Não há mínimo legal para uma empresa padrão. Se além disso quiser um visto de investidor, o mínimo exigido é de R$ 500.000 (ou R$ 150.000 para empresas de base tecnológica).",
        },
      ],
    },
    contact: {
      eyebrow: "Próximo passo",
      title: "Conte-nos sobre o seu projeto no Brasil.",
      body: "Uma chamada de 30 minutos já basta para saber se seu projeto é viável e qual estrutura combina com você.",
      emailLabel: "Preencher diagnóstico",
      whatsLabel: "WhatsApp direto",
      formName: "Nome completo",
      formEmail: "E-mail",
      formPhone: "Telefone / WhatsApp",
      formMessage: "Conte brevemente sobre seu projeto",
      formMessagePlaceholder: "O que você quer abrir no Brasil, de onde você é, e qualquer detalhe que nos ajude a entender seu caso...",
      formSubmit: "Enviar",
      formSending: "Enviando...",
      formSuccess: "Obrigado! Recebemos sua mensagem e entraremos em contato em breve.",
      formError: "Houve um erro ao enviar o formulário. Tente novamente ou fale conosco pelo WhatsApp.",
    },
    footer: {
      rights: "Nexo Market Entry. Todos os direitos reservados.",
      disclaimer: "A Nexo Market Entry coordena processos de entrada no mercado brasileiro e não constitui um escritório de advocacia ou contabilidade.",
    },
  },
  en: {
    nav: { work: "How we work", process: "Process", services: "Services", blog: "Blog", cta: "Talk to us" },
    hero: {
      eyebrow: "Brazil market-entry consulting",
      headline1: "Brazil: 22 steps",
      headline2: "for foreign partners. You focus on your business, we handle the rest.",
      sub: "We coordinate your corporate structure, resident representative, and full company registration alongside a network of licensed professionals in Brazil, so your company opens without surprises.",
      cta: "Book your initial diagnosis",
      ctaSecondary: "See how we work",
      mapCaption: "Nexo connects the world with Brazil.",
      brLabel: "BRAZIL",
    },
    stats: {
      opportunityTitle: "The market waiting for you",
      opportunityStats: [
        { value: "+200M", label: "consumers in Latin America's largest economy." },
        { value: "+106,000", label: "active foreign micro-entrepreneurs in Brazil, up 24% year over year." },
        { value: "4.6M", label: "small businesses opened in Brazil in 2025, an all-time record." },
      ],
      confidenceTitle: "Everything in one place.",
      confidenceBody:
        "Lawyer, accountant, and process coordination under one team, so you don't have to piece that puzzle together yourself.",
      confidenceBullets: [
        "One team, not five different providers.",
        "Lawyer and accountant already aligned with each other.",
        "You talk to one person, not to every agency.",
      ],
    },
    problem: {
      eyebrow: "The real problem",
      title: "It's not impossible. It's that no one explains the order.",
      body: "Commercial Registry, CNPJ, SCE-IED, resident representative, apostilles, sworn translation: each agency has its own language and its own timeline. One wrong step delays everything after it.",
      items: [
        "No access to the simplified tax regime due to foreign capital.",
        "Documents must be apostilled before setting foot in Brazil.",
        "A resident representative is mandatory, not optional.",
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "Three moves, one single point of contact.",
      steps: [
        {
          n: "01",
          title: "Diagnosis",
          body: "We analyze your sector, the right corporate structure, and applicable restrictions. Tax burden validated by a licensed accountant.",
        },
        {
          n: "02",
          title: "Coordination",
          body: "We manage the Commercial Registry, CNPJ, and SCE-IED alongside our legal and accounting network, resident representative included.",
        },
        {
          n: "03",
          title: "Launch",
          body: "Your company ready to operate: bank account open, initial obligations covered, post-launch roadmap delivered.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "A tier for every stage of the project.",
      cards: [
        { name: "Starter", tag: "Diagnosis", body: "Viability, recommended structure, and a realistic timeline before committing capital." },
        { name: "Growth", tag: "Full launch", body: "End-to-end execution: registration, resident representative, bank account, one point of contact." },
        { name: "Enterprise", tag: "Launch + ongoing support", body: "Everything above, plus ongoing support and a quarterly structure review after launch." },
      ],
      note: "Every tier includes coordination with our network of licensed lawyers and accountants. We never replace their work.",
    },
    markets: {
      eyebrow: "Who we help",
      title: "SMEs and investors already looking at Brazil.",
      body: "We work in your language, mindful of your time zone.",
      list: ["Argentina", "Uruguay", "Colombia", "Spain", "Portugal", "United States"],
    },
    trust: {
      title: "We coordinate. We don't replace.",
      body: "We don't provide legal or accounting advice directly. That part always stays with licensed lawyers and accountants in our network. Our job is making sure nothing gets lost between agencies.",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What people ask us most.",
      items: [
        {
          q: "Do I need to be in Brazil to open a company?",
          a: "No. You can coordinate the entire process remotely with a resident representative who represents you in Brazil. Only the migration registration (if you apply for a visa) and one specific step of the bank account opening require physical presence.",
        },
        {
          q: "How long does the opening process take?",
          a: "Between 90 and 180 days, depending on the agency and the state chosen. More digitized states, like Paraná, tend to be faster.",
        },
        {
          q: "What is a resident representative and why is it mandatory?",
          a: "It's a person residing in Brazil who legally represents a foreign partner before agencies like the Central Bank and the Federal Revenue Service. It's legally mandatory for any company with a non-resident foreign partner.",
        },
        {
          q: "Do I need a lawyer to open a company in Brazil?",
          a: "Not always. It's not mandatory for standard company registration, but it is for processing an investor visa, since it involves formal legal representation before the CNIg.",
        },
        {
          q: "Which corporate structure is better, LTDA or S.A.?",
          a: "For more than 90% of cases, the LTDA is the right choice: it requires no minimum capital and is simpler to maintain. An S.A. only makes sense if you're looking to raise institutional investment.",
        },
        {
          q: "How much capital do I need to open a company in Brazil?",
          a: "There's no legal minimum for a standard company. If you also want an investor visa, the required minimum is R$500,000 (or R$150,000 for technology-based companies).",
        },
      ],
    },
    contact: {
      eyebrow: "Next step",
      title: "Tell us about your project in Brazil.",
      body: "A 30-minute call is enough to know if your project is viable and which structure fits.",
      emailLabel: "Complete diagnosis",
      whatsLabel: "Direct WhatsApp",
      formName: "Full name",
      formEmail: "Email",
      formPhone: "Phone / WhatsApp",
      formMessage: "Tell us briefly about your project",
      formMessagePlaceholder: "What you want to open in Brazil, where you're from, and any details that help us understand your case...",
      formSubmit: "Send",
      formSending: "Sending...",
      formSuccess: "Thanks! We received your message and will be in touch soon.",
      formError: "There was an error sending the form. Please try again or message us on WhatsApp.",
    },
    footer: {
      rights: "Nexo Market Entry. All rights reserved.",
      disclaimer: "Nexo Market Entry coordinates Brazilian market-entry processes and is not a law firm or accounting firm.",
    },
  },
};

const langLabel: Record<Lang, string> = { es: "ES", pt: "PT", en: "EN" };

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = dict[lang];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-textlight">
              Nexo<span className="text-ouro">.</span>
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-textlight/50">
              Market Entry
            </span>
          </a>
          <nav className="hidden items-center gap-6 font-body text-sm text-textlight/80 md:flex">
            <a href="#proceso" className="hover:text-textlight">{t.nav.process}</a>
            <a href="#servicios" className="hover:text-textlight">{t.nav.services}</a>
            <a href={`/blog?lang=${lang}`} className="hover:text-textlight">{t.nav.blog}</a>
            <a href="#contacto" className="rounded-full bg-ouro px-4 py-2 font-medium text-inkdeep hover:bg-ouro/90">
              {t.nav.cta}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={`/blog?lang=${lang}`} className="font-mono text-xs text-textlight/70 hover:text-textlight md:hidden">
              {t.nav.blog}
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

      {/* HERO */}
      <section id="top" className="relative border-b border-white/10 px-5 pb-16 pt-12 sm:pb-24 sm:pt-16">
        <div className="bg-grain pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-visto/90">{t.hero.eyebrow}</p>
              <h1 className="mt-4 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-textlight sm:text-5xl">
                {t.hero.headline1}{" "}
                <span className="text-paperdim/90">{t.hero.headline2}</span>
              </h1>
              <p className="mt-6 max-w-xl font-body text-[15px] leading-relaxed text-textlight/75 sm:text-base">
                {t.hero.sub}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`/diagnostico?lang=${lang}`}
                  className="rounded-full bg-ouro px-6 py-3 text-center font-body text-sm font-semibold text-inkdeep transition-transform hover:scale-[1.02]"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="#proceso"
                  className="rounded-full border border-white/20 px-6 py-3 text-center font-body text-sm font-medium text-textlight/85 hover:border-white/40"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Mapa animado */}
            <div className="mx-auto w-full max-w-lg md:mx-0">
              <EntryMap brLabel={t.hero.brLabel} />
              <p className="mt-1 text-center font-mono text-[11px] tracking-wide text-textlight/45 md:text-left">
                {t.hero.mapCaption}
              </p>
            </div>
          </div>

          {/* STATS: oportunidad de mercado + mensaje de confianza */}
          <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20">
            <p className="font-mono text-[11px] uppercase tracking-widest text-textlight/50">
              {t.stats.opportunityTitle}
            </p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-6">
                {t.stats.opportunityStats.map((s, i) => (
                  <div key={i}>
                    <p className="font-mono text-3xl font-bold text-ouro sm:text-4xl">{s.value}</p>
                    <p className="mt-1.5 font-body text-[13px] leading-snug text-textlight/65">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="font-display text-2xl font-bold leading-snug text-textlight sm:text-3xl">
                  {t.stats.confidenceTitle}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-textlight/65">{t.stats.confidenceBody}</p>
                <ul className="mt-5 space-y-2.5">
                  {t.stats.confidenceBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-body text-sm text-textlight/80">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-visto" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-white/10 bg-inkdeep px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-visto/90">{t.problem.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-3xl">
            {t.problem.title}
          </h2>
          <p className="mt-5 font-body text-[15px] leading-relaxed text-textlight/70">{t.problem.body}</p>
          <ul className="mt-8 space-y-3">
            {t.problem.items.map((item, i) => (
              <li key={i} className="dotted-rule flex items-start gap-3 pb-3 font-body text-sm text-textlight/85">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-selo" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proceso" className="border-b border-white/10 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-widest text-ouro/90">{t.process.eyebrow}</p>
          <h2 className="mt-3 max-w-lg font-display text-2xl font-bold leading-snug text-textlight sm:text-3xl">
            {t.process.title}
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {t.process.steps.map((step) => (
              <div key={step.n} className="rounded-sm border border-white/10 p-6">
                <p className="font-mono text-3xl font-medium text-ouro/70">{step.n}</p>
                <h3 className="mt-4 font-display text-lg font-bold text-textlight">{step.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-textlight/65">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="border-b border-white/10 bg-inkdeep px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-widest text-visto/90">{t.services.eyebrow}</p>
          <h2 className="mt-3 max-w-lg font-display text-2xl font-bold leading-snug text-textlight sm:text-3xl">
            {t.services.title}
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {t.services.cards.map((c) => (
              <div key={c.name} className="flex flex-col rounded-sm bg-paper p-6 text-textdark">
                <p className="font-mono text-[10px] uppercase tracking-widest text-selo">{c.tag}</p>
                <h3 className="mt-2 font-display text-xl font-bold">{c.name}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-textdark/70">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-xl font-body text-xs italic text-textlight/50">{t.services.note}</p>
        </div>
      </section>

      {/* MARKETS */}
      <section className="border-b border-white/10 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-ouro/90">{t.markets.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-3xl">
            {t.markets.title}
          </h2>
          <p className="mt-3 font-body text-sm text-textlight/65">{t.markets.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {t.markets.list.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs tracking-wide text-textlight/80"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-b border-white/10 bg-inkdeep px-5 py-14 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="stamp-ring flex h-16 w-16 flex-none items-center justify-center rounded-full text-visto">
            <span className="font-mono text-[9px] font-bold tracking-widest">100%</span>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-textlight">{t.trust.title}</h3>
            <p className="mt-1.5 font-body text-sm leading-relaxed text-textlight/65">{t.trust.body}</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-lg text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-visto/90">{t.contact.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-3xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 font-body text-sm text-textlight/70">{t.contact.body}</p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`/diagnostico?lang=${lang}`}
              className="rounded-full bg-ouro px-6 py-3 text-center font-body text-sm font-semibold text-inkdeep transition-transform hover:scale-[1.02]"
            >
              {t.contact.emailLabel}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="rounded-full border border-white/20 px-6 py-3 text-center font-body text-sm font-medium text-textlight/85 hover:border-white/40"
            >
              {t.contact.whatsLabel}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 bg-inkdeep px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-visto/90">{t.faq.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-3xl">
            {t.faq.title}
          </h2>
          <div className="mt-8 space-y-3">
            {t.faq.items.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-t border-white/10 pt-3">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-3 text-left"
                  >
                    <span className="font-display text-base font-bold text-textlight">{item.q}</span>
                    <span
                      className={`flex-none font-mono text-xl text-ouro transition-transform ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-4 font-body text-sm leading-relaxed text-textlight/70">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: t.faq.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            }),
          }}
        />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-center font-mono text-[11px] text-textlight/40 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <p className="max-w-md">{t.footer.disclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
