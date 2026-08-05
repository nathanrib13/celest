export const PROJECTS = [
  {
    name: "Isabella Cypriano",
    url: "https://www.isabellacypriano.com.br/",
    category: "Site institucional",
    description:
      "Presença digital profissional com identidade própria e foco em conversão.",
  },
  {
    name: "AS3 Group",
    url: "https://as3group.com/",
    category: "Site institucional",
    description:
      "Portal corporativo para uma engenharia que atua em múltiplas frentes.",
  },
  {
    name: "OEA Liga",
    url: "https://oea-liga.vercel.app/",
    category: "Sistema web",
    description:
      "Plataforma sob medida para a gestão da liga, com fluxo próprio de acesso.",
  },
  {
    name: "Micromeros App",
    url: "https://app.micromeros.com.br/login",
    category: "Plataforma web",
    description:
      "Aplicação web com login e área logada para a operação do cliente.",
  },
  {
    name: "Sistema de Precificação",
    url: "https://v0-sistema-de-precificacao-web-micr.vercel.app/precificacao",
    category: "Automação",
    description:
      "Ferramenta que automatiza o cálculo e a definição de preços do negócio.",
  },
  {
    name: "Micromeros CQQHN",
    url: "https://cqqhn.micromeros.com.br/",
    category: "Sistema web",
    description:
      "Módulo dedicado dentro do ecossistema Micromeros, integrado à operação.",
  },
];

export const buildScreenshotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`;
