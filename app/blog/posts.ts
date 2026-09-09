export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "cuenta-bancaria-capital-extranjero-nueva-norma-2026",
    title: "Cuenta bancaria con capital extranjero: qué cambia con la nueva norma del Banco Central",
    excerpt:
      "El Banco Central amplió quién puede tener cuentas en moneda extranjera en Brasil, incluyendo explícitamente a empresas con participación extranjera en su capital. La norma entra en vigencia el 1 de octubre de 2026.",
    date: "9 de septiembre de 2026",
    readTime: "4 min",
    content: [
      "Abrir una cuenta bancaria para una empresa con capital extranjero en Brasil siempre fue uno de los pasos que generaba más dudas. No porque la ley lo prohibiera, sino porque los bancos suelen ser cautelosos con este tipo de cliente por temas de compliance contra el lavado de dinero — lo que en la práctica se traducía en procesos más lentos y con más documentación que para una empresa 100% nacional.",
      "Un primer punto que conviene aclarar: la creencia de que solo un banco específico trabaja con capital extranjero está desactualizada. Varios bancos ofrecen esta posibilidad, cada uno con sus propios criterios internos de análisis — algunos incluso con procesos de apertura totalmente digitales, sin necesidad de enviar documentación original ni presentarse en una sucursal.",
      "La pieza que de verdad suele demorar el proceso no es la apertura de la cuenta en sí, sino la habilitación específica para operar cambio — el paso que permite que el capital extranjero efectivamente ingrese a Brasil. Sin esa habilitación, la cuenta puede estar abierta pero no lista para recibir la inversión.",
      "Acá es donde aparece una novedad reciente: el Banco Central aprobó la Resolución BCB n.º 575, que amplía la lista de quiénes pueden tener cuentas en moneda extranjera dentro de Brasil, incluyendo explícitamente a las 'sociedades con participación extranjera en su capital social' — exactamente el perfil de empresa que estamos describiendo en esta guía. La norma entra en vigencia el 1 de octubre de 2026.",
      "Esto no elimina los requisitos de compliance ni las verificaciones habituales contra el lavado de dinero, que siguen vigentes como en cualquier operación de este tipo. Pero sí es una señal clara de que el marco regulatorio se está moviendo hacia más opciones para este tipo de empresas, no hacia menos. Vale la pena tenerlo en cuenta al planificar los tiempos de apertura, y confirmarlo con tu contable al momento de elegir banco.",
    ],
  },
  {
    slug: "22-tramites-empresa-extranjera-brasil",
    title: "Los 22 trámites para abrir una empresa en Brasil siendo extranjero",
    excerpt:
      "Un socio brasileño necesita 13 pasos para constituir una empresa. Un socio extranjero necesita 22. Repasamos dónde está la diferencia y por qué el orden importa más que la cantidad de pasos.",
    date: "12 de agosto de 2026",
    readTime: "6 min",
    content: [
      "Constituir una empresa en Brasil no es, en sí mismo, un proceso especialmente largo. El problema aparece cuando uno de los socios es extranjero: ahí la cifra de trámites sube de 13 a 22, y cada uno de esos pasos adicionales depende de un organismo distinto, con su propio idioma técnico y su propio calendario.",
      "El primer bloque de trámites es societario: elegir el tipo de sociedad (normalmente una LTDA), redactar el contrato social y registrarlo en la Junta Comercial del estado elegido. Hasta aquí, el proceso es prácticamente idéntico al de un socio brasileño.",
      "La diferencia empieza en el segundo bloque, el que depende directamente de que el capital sea extranjero. Aquí entran el CPF de cada socio no residente, la designación de un procurador residente en Brasil con poderes específicos, y el registro de la inversión en el sistema SCE-IED del Banco Central.",
      "El tercer bloque es documental: todo lo que se firma fuera de Brasil necesita apostillarse (o consularizarse, si el país de origen no forma parte del Convenio de La Haya) y traducirse por un traductor jurado antes de tener validez ante cualquier organismo brasileño.",
      "La razón por la que este proceso se siente más complicado de lo que parece sobre el papel no es la cantidad de pasos, sino el orden. Un documento apostillado fuera de plazo, o una procuración con poderes insuficientes, retrasa todo lo que viene después. Coordinar bien esa secuencia es, en la práctica, la diferencia entre abrir una empresa en 90 días o en 180.",
    ],
  },
  {
    slug: "sce-ied-que-es-como-registrar",
    title: "SCE-IED: qué es y cómo registrar tu inversión extranjera",
    excerpt:
      "El antiguo RDE-IED cambió de nombre en 2023. Explicamos qué es el SCE-IED, quién tiene que registrarse y qué pasa si una empresa con capital extranjero no lo hace a tiempo.",
    date: "20 de julio de 2026",
    readTime: "4 min",
    content: [
      "El SCE-IED (Sistema de Capitales Extranjeros — Inversión Extranjera Directa) es el sistema del Banco Central de Brasil donde se registra cualquier inversión extranjera directa en una empresa brasileña. Hasta 2023 se llamaba RDE-IED; el nombre cambió, pero la función y la obligación de registrarlo siguen siendo las mismas.",
      "¿Quién tiene que registrarse? Cualquier persona física o jurídica extranjera que participe en el capital social de una empresa brasileña, sin importar el porcentaje de participación. No hay un umbral mínimo de capital por debajo del cual el registro sea opcional.",
      "El proceso es completamente digital: las personas físicas acceden con una cuenta gov.br de nivel plata u oro, y las personas jurídicas pueden acceder con certificado digital e-CNPJ. El primer paso es un acreditamiento previo ante el propio sistema del Banco Central, antes de poder registrar la inversión en sí.",
      "El plazo para registrar una inversión, una vez recibido el capital por la empresa brasileña, es de 30 días. No registrarlo a tiempo no invalida la inversión, pero sí puede complicar después la repatriación de ganancias o dividendos, porque el Banco Central exige que el capital esté correctamente registrado para autorizar la salida de esos fondos al exterior.",
      "En resumen: es un trámite técnico, pero no opcional, y conviene resolverlo en paralelo al registro societario, no después. Cuanto antes esté acreditada la empresa en el sistema, más simple es cada registro posterior de aportes o cambios societarios.",
    ],
  },
  {
    slug: "ltda-vs-sa-estructura-societaria-brasil",
    title: "LTDA o S.A.: qué estructura conviene a tu empresa en Brasil",
    excerpt:
      "Más del 90% de las empresas en Brasil operan como LTDA. Explicamos cuándo tiene sentido esa opción por defecto y cuándo conviene evaluar una S.A. en su lugar.",
    date: "3 de julio de 2026",
    readTime: "5 min",
    content: [
      "La gran mayoría de las empresas en Brasil, incluidas casi todas las que abren extranjeros, eligen la forma de Sociedade Limitada (LTDA). No es casualidad: no exige capital social mínimo (salvo en actividades reguladas específicas), el contrato social es flexible, y los socios responden solidariamente solo hasta que el capital declarado esté totalmente integrado.",
      "Existe también la SLU (Sociedad Limitada Unipersonal), pensada para un único socio, con la misma lógica que la LTDA pero sin necesidad de un segundo socio formal.",
      "La Sociedad Anónima (S.A.) es una estructura distinta, pensada para empresas de mayor porte que necesitan captar inversión externa de forma más institucional o que requieren un modelo de gobernanza más formal, con accionistas y estatutos más rígidos que un contrato social de LTDA.",
      "¿Cuándo tiene sentido evaluar una S.A. en lugar de una LTDA? Principalmente en tres escenarios: cuando la empresa ya anticipa rondas de inversión institucional a corto plazo, cuando el sector de actividad lo exige por regulación (algunas entidades financieras, por ejemplo), o cuando los socios buscan una estructura de gobernanza corporativa más formal desde el inicio.",
      "Para el resto de los casos, que es la mayoría, la LTDA sigue siendo la opción más simple, más económica de mantener y perfectamente válida para operar con normalidad, contratar personal y facturar sin ninguna limitación relacionada con el tipo societario elegido.",
    ],
  },
];
