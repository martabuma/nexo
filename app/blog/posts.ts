export type Lang = "es" | "pt" | "en";

export type Post = {
  slug: string;
  isoDate: string;
  date: Record<Lang, string>;
  readTime: Record<Lang, string>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string[]>;
};

export const posts: Post[] = [
  {
    slug: "cuenta-bancaria-capital-extranjero-nueva-norma-2026",
    isoDate: "2026-09-09",
    date: { es: "9 de septiembre de 2026", pt: "9 de setembro de 2026", en: "September 9, 2026" },
    readTime: { es: "4 min", pt: "4 min", en: "4 min" },
    title: {
      es: "Cuenta bancaria con capital extranjero: qué cambia con la nueva norma del Banco Central",
      pt: "Conta bancária com capital estrangeiro: o que muda com a nova norma do Banco Central",
      en: "Bank account with foreign capital: what changes with the new Central Bank rule",
    },
    excerpt: {
      es: "El Banco Central amplió quién puede tener cuentas en moneda extranjera en Brasil, incluyendo explícitamente a empresas con participación extranjera en su capital. La norma entra en vigencia el 1 de octubre de 2026.",
      pt: "O Banco Central ampliou quem pode ter contas em moeda estrangeira no Brasil, incluindo explicitamente empresas com participação estrangeira em seu capital. A norma entra em vigor em 1º de outubro de 2026.",
      en: "The Central Bank expanded who can hold foreign-currency accounts in Brazil, explicitly including companies with foreign capital participation. The rule takes effect on October 1, 2026.",
    },
    content: {
      es: [
        "Abrir una cuenta bancaria para una empresa con capital extranjero en Brasil siempre fue uno de los pasos que generaba más dudas. No porque la ley lo prohibiera, sino porque los bancos suelen ser cautelosos con este tipo de cliente por temas de compliance contra el lavado de dinero — lo que en la práctica se traducía en procesos más lentos y con más documentación que para una empresa 100% nacional.",
        "Un primer punto que conviene aclarar: la creencia de que solo un banco específico trabaja con capital extranjero está desactualizada. Varios bancos ofrecen esta posibilidad, cada uno con sus propios criterios internos de análisis — algunos incluso con procesos de apertura totalmente digitales, sin necesidad de enviar documentación original ni presentarse en una sucursal.",
        "La pieza que de verdad suele demorar el proceso no es la apertura de la cuenta en sí, sino la habilitación específica para operar cambio — el paso que permite que el capital extranjero efectivamente ingrese a Brasil. Sin esa habilitación, la cuenta puede estar abierta pero no lista para recibir la inversión.",
        "Acá es donde aparece una novedad reciente: el Banco Central aprobó la Resolución BCB n.º 575, que amplía la lista de quiénes pueden tener cuentas en moneda extranjera dentro de Brasil, incluyendo explícitamente a las 'sociedades con participación extranjera en su capital social' — exactamente el perfil de empresa que estamos describiendo en esta guía. La norma entra en vigencia el 1 de octubre de 2026.",
        "Esto no elimina los requisitos de compliance ni las verificaciones habituales contra el lavado de dinero, que siguen vigentes como en cualquier operación de este tipo. Pero sí es una señal clara de que el marco regulatorio se está moviendo hacia más opciones para este tipo de empresas, no hacia menos. Vale la pena tenerlo en cuenta al planificar los tiempos de apertura, y confirmarlo con tu contable al momento de elegir banco.",
      ],
      pt: [
        "Abrir uma conta bancária para uma empresa com capital estrangeiro no Brasil sempre foi um dos passos que gerava mais dúvidas. Não porque a lei proibisse, mas porque os bancos costumam ser cautelosos com esse tipo de cliente por questões de compliance contra lavagem de dinheiro — o que na prática se traduzia em processos mais lentos e com mais documentação do que para uma empresa 100% nacional.",
        "Um primeiro ponto que vale esclarecer: a crença de que apenas um banco específico trabalha com capital estrangeiro está desatualizada. Vários bancos oferecem essa possibilidade, cada um com seus próprios critérios internos de análise — alguns até com processos de abertura totalmente digitais, sem necessidade de enviar documentação original nem comparecer a uma agência.",
        "A parte que realmente costuma atrasar o processo não é a abertura da conta em si, mas a habilitação específica para operar câmbio — o passo que permite que o capital estrangeiro efetivamente entre no Brasil. Sem essa habilitação, a conta pode estar aberta, mas não pronta para receber o investimento.",
        "É aqui que aparece uma novidade recente: o Banco Central aprovou a Resolução BCB n.º 575, que amplia a lista de quem pode ter contas em moeda estrangeira dentro do Brasil, incluindo explicitamente as 'sociedades com participação estrangeira em seu capital social' — exatamente o perfil de empresa que estamos descrevendo neste guia. A norma entra em vigor em 1º de outubro de 2026.",
        "Isso não elimina os requisitos de compliance nem as verificações habituais contra lavagem de dinheiro, que continuam vigentes como em qualquer operação desse tipo. Mas é um sinal claro de que o marco regulatório está se movendo em direção a mais opções para esse tipo de empresa, não menos. Vale a pena considerar isso ao planejar os prazos de abertura, e confirmar com seu contador na hora de escolher o banco.",
      ],
      en: [
        "Opening a bank account for a company with foreign capital in Brazil has always been one of the steps that raised the most questions. Not because the law prohibited it, but because banks tend to be cautious with this type of client due to anti-money-laundering compliance concerns — which in practice translated into slower processes with more paperwork than for a fully domestic company.",
        "One point worth clarifying first: the belief that only one specific bank works with foreign capital is outdated. Several banks offer this option, each with their own internal review criteria — some even with fully digital account-opening processes, with no need to send original documents or visit a branch.",
        "The part that really tends to slow down the process isn't opening the account itself, but the specific authorization to operate foreign exchange — the step that allows the foreign capital to actually enter Brazil. Without that authorization, the account can be open but not ready to receive the investment.",
        "This is where a recent development comes in: the Central Bank approved Resolution BCB No. 575, which expands the list of who can hold foreign-currency accounts within Brazil, explicitly including 'companies with foreign participation in their share capital' — exactly the type of company we're describing in this guide. The rule takes effect on October 1, 2026.",
        "This doesn't remove the usual compliance requirements or anti-money-laundering checks, which remain in place as with any operation of this kind. But it is a clear signal that the regulatory framework is moving toward more options for this type of company, not fewer. It's worth factoring in when planning your opening timeline, and confirming with your accountant when choosing a bank.",
      ],
    },
  },
  {
    slug: "22-tramites-empresa-extranjera-brasil",
    isoDate: "2026-08-12",
    date: { es: "12 de agosto de 2026", pt: "12 de agosto de 2026", en: "August 12, 2026" },
    readTime: { es: "6 min", pt: "6 min", en: "6 min" },
    title: {
      es: "Los 22 trámites para abrir una empresa en Brasil siendo extranjero",
      pt: "Os 22 trâmites para abrir uma empresa no Brasil sendo estrangeiro",
      en: "The 22 steps to open a company in Brazil as a foreigner",
    },
    excerpt: {
      es: "Un socio brasileño necesita 13 pasos para constituir una empresa. Un socio extranjero necesita 22. Repasamos dónde está la diferencia y por qué el orden importa más que la cantidad de pasos.",
      pt: "Um sócio brasileiro precisa de 13 passos para constituir uma empresa. Um sócio estrangeiro precisa de 22. Explicamos onde está a diferença e por que a ordem importa mais do que a quantidade de passos.",
      en: "A Brazilian partner needs 13 steps to set up a company. A foreign partner needs 22. We look at where the difference lies and why the order matters more than the number of steps.",
    },
    content: {
      es: [
        "Constituir una empresa en Brasil no es, en sí mismo, un proceso especialmente largo. El problema aparece cuando uno de los socios es extranjero: ahí la cifra de trámites sube de 13 a 22, y cada uno de esos pasos adicionales depende de un organismo distinto, con su propio idioma técnico y su propio calendario.",
        "El primer bloque de trámites es societario: elegir el tipo de sociedad (normalmente una LTDA), redactar el contrato social y registrarlo en la Junta Comercial del estado elegido. Hasta aquí, el proceso es prácticamente idéntico al de un socio brasileño.",
        "La diferencia empieza en el segundo bloque, el que depende directamente de que el capital sea extranjero. Aquí entran el CPF de cada socio no residente, la designación de un procurador residente en Brasil con poderes específicos, y el registro de la inversión en el sistema SCE-IED del Banco Central.",
        "El tercer bloque es documental: todo lo que se firma fuera de Brasil necesita apostillarse (o consularizarse, si el país de origen no forma parte del Convenio de La Haya) y traducirse por un traductor jurado antes de tener validez ante cualquier organismo brasileño.",
        "La razón por la que este proceso se siente más complicado de lo que parece sobre el papel no es la cantidad de pasos, sino el orden. Un documento apostillado fuera de plazo, o una procuración con poderes insuficientes, retrasa todo lo que viene después. Coordinar bien esa secuencia es, en la práctica, la diferencia entre abrir una empresa en 90 días o en 180.",
      ],
      pt: [
        "Constituir uma empresa no Brasil não é, em si, um processo especialmente longo. O problema aparece quando um dos sócios é estrangeiro: aí o número de trâmites sobe de 13 para 22, e cada uma dessas etapas adicionais depende de um órgão diferente, com seu próprio jargão técnico e seu próprio calendário.",
        "O primeiro bloco de trâmites é societário: escolher o tipo de sociedade (normalmente uma LTDA), redigir o contrato social e registrá-lo na Junta Comercial do estado escolhido. Até aqui, o processo é praticamente idêntico ao de um sócio brasileiro.",
        "A diferença começa no segundo bloco, que depende diretamente de o capital ser estrangeiro. Aqui entram o CPF de cada sócio não residente, a designação de um procurador residente no Brasil com poderes específicos, e o registro do investimento no sistema SCE-IED do Banco Central.",
        "O terceiro bloco é documental: tudo o que é assinado fora do Brasil precisa ser apostilado (ou consularizado, se o país de origem não fizer parte da Convenção de Haia) e traduzido por um tradutor juramentado antes de ter validade perante qualquer órgão brasileiro.",
        "A razão pela qual esse processo parece mais complicado do que aparenta no papel não é a quantidade de etapas, mas sim a ordem. Um documento apostilado fora do prazo, ou uma procuração com poderes insuficientes, atrasa tudo o que vem depois. Coordenar bem essa sequência é, na prática, a diferença entre abrir uma empresa em 90 dias ou em 180.",
      ],
      en: [
        "Setting up a company in Brazil isn't, on its own, an especially long process. The problem appears when one of the partners is foreign: the number of steps jumps from 13 to 22, and each of those extra steps depends on a different agency, with its own technical language and its own timeline.",
        "The first block of steps is corporate: choosing the type of company (usually an LTDA), drafting the corporate bylaws (contrato social), and registering it with the Commercial Registry of the chosen state. Up to this point, the process is practically identical to that of a Brazilian partner.",
        "The difference starts in the second block, which depends directly on the capital being foreign. This includes the CPF for each non-resident partner, appointing a resident representative in Brazil with specific powers, and registering the investment in the Central Bank's SCE-IED system.",
        "The third block is documentation: anything signed outside Brazil needs to be apostilled (or legalized through a consulate, if the country of origin isn't part of the Hague Convention) and translated by a sworn translator before it's valid before any Brazilian agency.",
        "The reason this process feels more complicated than it looks on paper isn't the number of steps, but the order. A document apostilled past its deadline, or a power of attorney with insufficient powers, delays everything that comes after. Coordinating that sequence well is, in practice, the difference between opening a company in 90 days or 180.",
      ],
    },
  },
  {
    slug: "sce-ied-que-es-como-registrar",
    isoDate: "2026-07-20",
    date: { es: "20 de julio de 2026", pt: "20 de julho de 2026", en: "July 20, 2026" },
    readTime: { es: "4 min", pt: "4 min", en: "4 min" },
    title: {
      es: "SCE-IED: qué es y cómo registrar tu inversión extranjera",
      pt: "SCE-IED: o que é e como registrar seu investimento estrangeiro",
      en: "SCE-IED: what it is and how to register your foreign investment",
    },
    excerpt: {
      es: "El antiguo RDE-IED cambió de nombre en 2023. Explicamos qué es el SCE-IED, quién tiene que registrarse y qué pasa si una empresa con capital extranjero no lo hace a tiempo.",
      pt: "O antigo RDE-IED mudou de nome em 2023. Explicamos o que é o SCE-IED, quem precisa se registrar e o que acontece se uma empresa com capital estrangeiro não fizer isso a tempo.",
      en: "The former RDE-IED was renamed in 2023. We explain what the SCE-IED is, who needs to register, and what happens if a company with foreign capital doesn't do it on time.",
    },
    content: {
      es: [
        "El SCE-IED (Sistema de Capitales Extranjeros — Inversión Extranjera Directa) es el sistema del Banco Central de Brasil donde se registra cualquier inversión extranjera directa en una empresa brasileña. Hasta 2023 se llamaba RDE-IED; el nombre cambió, pero la función y la obligación de registrarlo siguen siendo las mismas.",
        "¿Quién tiene que registrarse? Cualquier persona física o jurídica extranjera que participe en el capital social de una empresa brasileña, sin importar el porcentaje de participación. No hay un umbral mínimo de capital por debajo del cual el registro sea opcional.",
        "El proceso es completamente digital: las personas físicas acceden con una cuenta gov.br de nivel plata u oro, y las personas jurídicas pueden acceder con certificado digital e-CNPJ. El primer paso es un acreditamiento previo ante el propio sistema del Banco Central, antes de poder registrar la inversión en sí.",
        "El plazo para registrar una inversión, una vez recibido el capital por la empresa brasileña, es de 30 días. No registrarlo a tiempo no invalida la inversión, pero sí puede complicar después la repatriación de ganancias o dividendos, porque el Banco Central exige que el capital esté correctamente registrado para autorizar la salida de esos fondos al exterior.",
        "En resumen: es un trámite técnico, pero no opcional, y conviene resolverlo en paralelo al registro societario, no después. Cuanto antes esté acreditada la empresa en el sistema, más simple es cada registro posterior de aportes o cambios societarios.",
      ],
      pt: [
        "O SCE-IED (Sistema de Capitais Estrangeiros — Investimento Estrangeiro Direto) é o sistema do Banco Central do Brasil onde se registra qualquer investimento estrangeiro direto em uma empresa brasileira. Até 2023 se chamava RDE-IED; o nome mudou, mas a função e a obrigação de registrá-lo continuam as mesmas.",
        "Quem precisa se registrar? Qualquer pessoa física ou jurídica estrangeira que participe do capital social de uma empresa brasileira, independentemente do percentual de participação. Não há um valor mínimo de capital abaixo do qual o registro seja opcional.",
        "O processo é totalmente digital: pessoas físicas acessam com uma conta gov.br nível prata ou ouro, e pessoas jurídicas podem acessar com certificado digital e-CNPJ. O primeiro passo é um credenciamento prévio junto ao próprio sistema do Banco Central, antes de poder registrar o investimento em si.",
        "O prazo para registrar um investimento, uma vez recebido o capital pela empresa brasileira, é de 30 dias. Não registrá-lo a tempo não invalida o investimento, mas pode complicar depois a repatriação de lucros ou dividendos, porque o Banco Central exige que o capital esteja corretamente registrado para autorizar a saída desses recursos ao exterior.",
        "Em resumo: é um trâmite técnico, mas não opcional, e convém resolvê-lo em paralelo ao registro societário, não depois. Quanto antes a empresa estiver credenciada no sistema, mais simples fica cada registro posterior de aportes ou mudanças societárias.",
      ],
      en: [
        "The SCE-IED (Foreign Capital System — Foreign Direct Investment) is the Brazilian Central Bank's system where any foreign direct investment in a Brazilian company must be registered. Until 2023 it was called RDE-IED; the name changed, but the function and the obligation to register remain the same.",
        "Who needs to register? Any foreign individual or legal entity that holds a stake in a Brazilian company's capital, regardless of the percentage. There's no minimum capital threshold below which registration is optional.",
        "The process is fully digital: individuals access it with a silver- or gold-tier gov.br account, and legal entities can access it with an e-CNPJ digital certificate. The first step is prior accreditation with the Central Bank's system itself, before being able to register the investment.",
        "The deadline to register an investment, once the Brazilian company has received the capital, is 30 days. Not registering it on time doesn't invalidate the investment, but it can later complicate the repatriation of profits or dividends, since the Central Bank requires the capital to be properly registered to authorize sending those funds abroad.",
        "In short: it's a technical step, but not an optional one, and it's best handled in parallel with the corporate registration, not afterward. The sooner the company is accredited in the system, the simpler every later registration of contributions or corporate changes becomes.",
      ],
    },
  },
  {
    slug: "ltda-vs-sa-estructura-societaria-brasil",
    isoDate: "2026-07-03",
    date: { es: "3 de julio de 2026", pt: "3 de julho de 2026", en: "July 3, 2026" },
    readTime: { es: "5 min", pt: "5 min", en: "5 min" },
    title: {
      es: "LTDA o S.A.: qué estructura conviene a tu empresa en Brasil",
      pt: "LTDA ou S.A.: qual estrutura é melhor para sua empresa no Brasil",
      en: "LTDA or S.A.: which structure fits your company in Brazil",
    },
    excerpt: {
      es: "Más del 90% de las empresas en Brasil operan como LTDA. Explicamos cuándo tiene sentido esa opción por defecto y cuándo conviene evaluar una S.A. en su lugar.",
      pt: "Mais de 90% das empresas no Brasil operam como LTDA. Explicamos quando essa opção padrão faz sentido e quando vale a pena avaliar uma S.A. em seu lugar.",
      en: "More than 90% of companies in Brazil operate as an LTDA. We explain when that default option makes sense and when it's worth considering an S.A. instead.",
    },
    content: {
      es: [
        "La gran mayoría de las empresas en Brasil, incluidas casi todas las que abren extranjeros, eligen la forma de Sociedade Limitada (LTDA). No es casualidad: no exige capital social mínimo (salvo en actividades reguladas específicas), el contrato social es flexible, y los socios responden solidariamente solo hasta que el capital declarado esté totalmente integrado.",
        "Existe también la SLU (Sociedad Limitada Unipersonal), pensada para un único socio, con la misma lógica que la LTDA pero sin necesidad de un segundo socio formal.",
        "La Sociedad Anónima (S.A.) es una estructura distinta, pensada para empresas de mayor porte que necesitan captar inversión externa de forma más institucional o que requieren un modelo de gobernanza más formal, con accionistas y estatutos más rígidos que un contrato social de LTDA.",
        "¿Cuándo tiene sentido evaluar una S.A. en lugar de una LTDA? Principalmente en tres escenarios: cuando la empresa ya anticipa rondas de inversión institucional a corto plazo, cuando el sector de actividad lo exige por regulación (algunas entidades financieras, por ejemplo), o cuando los socios buscan una estructura de gobernanza corporativa más formal desde el inicio.",
        "Para el resto de los casos, que es la mayoría, la LTDA sigue siendo la opción más simple, más económica de mantener y perfectamente válida para operar con normalidad, contratar personal y facturar sin ninguna limitación relacionada con el tipo societario elegido.",
      ],
      pt: [
        "A grande maioria das empresas no Brasil, incluindo quase todas as abertas por estrangeiros, escolhe a forma de Sociedade Limitada (LTDA). Não é por acaso: não exige capital social mínimo (exceto em atividades reguladas específicas), o contrato social é flexível, e os sócios respondem solidariamente apenas até que o capital declarado esteja totalmente integralizado.",
        "Existe também a SLU (Sociedade Limitada Unipessoal), pensada para um único sócio, com a mesma lógica da LTDA, mas sem necessidade de um segundo sócio formal.",
        "A Sociedade Anônima (S.A.) é uma estrutura diferente, pensada para empresas de maior porte que precisam captar investimento externo de forma mais institucional ou que exigem um modelo de governança mais formal, com acionistas e estatutos mais rígidos do que um contrato social de LTDA.",
        "Quando faz sentido avaliar uma S.A. em vez de uma LTDA? Principalmente em três cenários: quando a empresa já prevê rodadas de investimento institucional no curto prazo, quando o setor de atividade exige isso por regulação (algumas instituições financeiras, por exemplo), ou quando os sócios buscam uma estrutura de governança corporativa mais formal desde o início.",
        "Para o restante dos casos, que é a maioria, a LTDA continua sendo a opção mais simples, mais econômica de manter e perfeitamente válida para operar normalmente, contratar funcionários e faturar sem nenhuma limitação relacionada ao tipo societário escolhido.",
      ],
      en: [
        "The vast majority of companies in Brazil, including almost all of those opened by foreigners, choose the Limited Liability Company (LTDA) form. That's no accident: it requires no minimum share capital (except in specific regulated activities), the bylaws (contrato social) are flexible, and partners are only jointly liable up to the point where the declared capital is fully paid in.",
        "There's also the SLU (Single-Member Limited Company), designed for a single partner, following the same logic as the LTDA but without needing a second formal partner.",
        "The Corporation (S.A.) is a different structure, designed for larger companies that need to raise outside investment in a more institutional way, or that require a more formal governance model, with shareholders and bylaws that are more rigid than an LTDA's contrato social.",
        "When does it make sense to consider an S.A. instead of an LTDA? Mainly in three scenarios: when the company already anticipates institutional investment rounds in the short term, when the industry requires it by regulation (some financial entities, for example), or when the partners want a more formal corporate governance structure from the start.",
        "For the rest of the cases, which is the majority, the LTDA remains the simplest option, the cheapest to maintain, and perfectly valid for operating normally, hiring staff, and invoicing without any limitation tied to the chosen corporate form.",
      ],
    },
  },
];
