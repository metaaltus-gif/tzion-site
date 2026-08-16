/* Conteudo bilingue do site. EN e o original; PT e traducao viva, nao literal.
   Regra de voz da FENIX: zero travessao, cadencia fluida, "the honest part" preservado. */

export type Lang = "en" | "pt";

export type Project = {
  name: string;
  category: string;
  type: string;
  description: string;
};

type Dict = {
  nav: { services: string; work: string; process: string; about: string; cta: string };
  langLabel: string;
  hero: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    copy: string;
    primary: string;
    secondary: string;
    statusLabel: string;
    statusValue: string;
    artAlt: string;
  };
  services: { index: string; title: string; lead: string; items: [string, string, string][] };
  work: {
    index: string;
    title: string;
    lead: string;
    featuredMeta: string;
    featuredName: string;
    featuredCopy: string;
    featuredFoot: string;
    featuredLink: string;
    featuredStamp: string;
    archiveTitle: string;
    filters: string[];
    filterAll: string;
    cardState: string;
  };
  process: { index: string; title: string; items: [string, string, string][] };
  about: { index: string; title: string; copy: string; note: string };
  contact: {
    index: string;
    title: string;
    copy: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    message: string;
    messagePh: string;
    submit: string;
  };
  footer: { left: string; right: string };
  drawer: { close: string; body: string; stats: [string, string][] };
  projects: Project[];
};

const en: Dict = {
  nav: { services: "Services", work: "Work", process: "Process", about: "About", cta: "Start a system" },
  langLabel: "PT",
  hero: {
    eyebrow: "Independent AI systems studio",
    titleA: "Born from ",
    titleEm: "intelligence.",
    titleB: "Risen with purpose.",
    copy: "We build AI agents, apps and platforms that run real businesses. Quietly, precisely, in production.",
    primary: "See the systems",
    secondary: "Tell us what should exist",
    statusLabel: "System status / 001",
    statusValue: "Operational · verified",
    artAlt: "Phoenix rising from circuit signals",
  },
  services: {
    index: "01 / capabilities",
    title: "Seven ways we build.",
    lead: "From first signal to a system your team can trust. No black boxes beside the work.",
    items: [
      ["01", "AI Agents", "Autonomous systems that read, verify and act."],
      ["02", "App Development", "Native mobile products with AI inside."],
      ["03", "Custom Platforms", "SaaS and web systems tailored to your operation."],
      ["04", "AI Configuration", "OpenAI, Claude and Gemini inside real workflows."],
      ["05", "Integrations & APIs", "REST, GraphQL and webhooks until silos disappear."],
      ["06", "Intelligent Content", "AI pipelines with human approval gates."],
      ["07", "AI Consulting", "Where AI pays off, mapped with ROI first."],
    ],
  },
  work: {
    index: "02 / production systems",
    title: "Systems that survived production.",
    lead: "Client names are confidential. The work is not. Explore the signals we can share.",
    featuredMeta: "Featured system / 01 · AI operations",
    featuredName: "EMBER",
    featuredCopy:
      "Reads the daily numbers. Verifies the anomalies. Surfaces the next action before the operation starts asking.",
    featuredFoot: "Food service · Live · supported",
    featuredLink: "Explore the system",
    featuredStamp: "Verified / human-reviewed",
    archiveTitle: "System archive",
    filters: ["All systems", "AI agents", "Mobile", "Platforms", "Operations", "Security"],
    filterAll: "All systems",
    cardState: "Live signal ↗",
  },
  process: {
    index: "03 / method",
    title: "From ember to system.",
    items: [
      ["01", "Discovery", "We learn your operation before touching a tool."],
      ["02", "AI Strategy", "Where AI pays off, mapped against the real workflow."],
      ["03", "Development", "Built custom and tested against your data."],
      ["04", "Deploy & Scale", "Shipped, monitored and grown in production."],
    ],
  },
  about: {
    index: "04 / the studio",
    title: "A studio, not a vendor.",
    copy: "FenixRise was born to put serious AI within reach of real businesses: systems that verify before they speak, protect what they touch and keep working after the demo ends. We build on managed cloud infrastructure, keep client data on a need to know basis, and support what we ship.",
    note: "We do not build demos that look intelligent. We build systems that make the operation more intelligent.",
  },
  contact: {
    index: "05 / next signal",
    title: "Tell us what should exist.",
    copy: "What is slow, repetitive or impossible to see? Bring us the operation. We will help map the system.",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@company.com",
    message: "What are we building?",
    messagePh: "Tell us what should exist...",
    submit: "Send the signal",
  },
  footer: { left: "© 2026 FenixRise · Rise. Build. Protect.", right: "hello@fenixrise.ai · Florida / Global" },
  drawer: {
    close: "Close case",
    body: "Every case is built around a real workflow, verified against real constraints and supported after launch.",
    stats: [
      ["Live", "status"],
      ["Human", "approval gate"],
      ["Built", "around operations"],
    ],
  },
  projects: [
    { name: "ShAPPherd", category: "Faith tech · Mobile", type: "Mobile", description: "A free mobile app to spread the Word, built for iOS and Android." },
    { name: "The War App", category: "Faith tech · Mobile", type: "Mobile", description: "A prayer generator for the moments when words will not come." },
    { name: "FORGE", category: "Custom platforms", type: "Platforms", description: "CRM, cost control, scheduling and content in one operating loop." },
    { name: "BEACON", category: "Ops · Mobile", type: "Operations", description: "Curbside pickup where the customer signals and the kitchen moves." },
    { name: "LANE", category: "Ops · Drive-thru", type: "Operations", description: "Drive-thru ordering built for fewer taps and faster lanes." },
    { name: "HERALD", category: "AI agents · Content", type: "AI agents", description: "Research, copy and production with human approval gates." },
    { name: "VEIL", category: "Security", type: "Security", description: "Encrypted messaging where even the provider cannot read you." },
    { name: "LUMEN", category: "Custom platforms", type: "Platforms", description: "Documents, status and approvals without the email back-and-forth." },
    { name: "PULSE", category: "AI agents · Content", type: "AI agents", description: "A healthcare content engine with human approval at every gate." },
    { name: "ATLAS", category: "Custom platforms", type: "Platforms", description: "CRM, deadlines, process and AI reporting for global education." },
    { name: "LEDGER", category: "AI agents · Finance", type: "AI agents", description: "Expenses in, categorized ledgers and spending answers out." },
  ],
};

const pt: Dict = {
  nav: { services: "Serviços", work: "Projetos", process: "Processo", about: "Sobre", cta: "Começar um sistema" },
  langLabel: "EN",
  hero: {
    eyebrow: "Estúdio independente de sistemas de IA",
    titleA: "Nascida da ",
    titleEm: "inteligência.",
    titleB: "Renascida com propósito.",
    copy: "Construímos agentes de IA, apps e plataformas que sustentam negócios reais. Em silêncio, com precisão, em produção.",
    primary: "Ver os sistemas",
    secondary: "Conte o que precisa existir",
    statusLabel: "Status do sistema / 001",
    statusValue: "Operacional · verificado",
    artAlt: "Fênix nascendo de sinais de circuito",
  },
  services: {
    index: "01 / capacidades",
    title: "Sete formas de construir.",
    lead: "Do primeiro sinal até um sistema em que sua equipe confia. Sem caixa-preta ao lado do trabalho.",
    items: [
      ["01", "Agentes de IA", "Sistemas autônomos que leem, verificam e agem."],
      ["02", "Desenvolvimento de apps", "Produtos mobile nativos com IA por dentro."],
      ["03", "Plataformas sob medida", "SaaS e sistemas web feitos para a sua operação."],
      ["04", "Configuração de IA", "OpenAI, Claude e Gemini dentro de fluxos reais."],
      ["05", "Integrações e APIs", "REST, GraphQL e webhooks até os silos sumirem."],
      ["06", "Conteúdo inteligente", "Pipelines de IA com aprovação humana."],
      ["07", "Consultoria de IA", "Onde a IA se paga, mapeado com ROI primeiro."],
    ],
  },
  work: {
    index: "02 / sistemas em produção",
    title: "Sistemas que sobreviveram à produção.",
    lead: "O nome do cliente é confidencial. O trabalho não é. Veja os sinais que podemos mostrar.",
    featuredMeta: "Sistema em destaque / 01 · operações com IA",
    featuredName: "EMBER",
    featuredCopy:
      "Lê os números do dia. Verifica as anomalias. Mostra a próxima ação antes de a operação perguntar.",
    featuredFoot: "Food service · No ar · com suporte",
    featuredLink: "Conhecer o sistema",
    featuredStamp: "Verificado / revisado por humano",
    archiveTitle: "Arquivo de sistemas",
    filters: ["Todos os sistemas", "Agentes de IA", "Mobile", "Plataformas", "Operações", "Segurança"],
    filterAll: "Todos os sistemas",
    cardState: "Sinal ativo ↗",
  },
  process: {
    index: "03 / método",
    title: "Da brasa ao sistema.",
    items: [
      ["01", "Descoberta", "Entendemos sua operação antes de tocar em qualquer ferramenta."],
      ["02", "Estratégia de IA", "Onde a IA se paga, mapeado sobre o fluxo real."],
      ["03", "Desenvolvimento", "Feito sob medida e testado com os seus dados."],
      ["04", "Deploy e escala", "No ar, monitorado e crescendo em produção."],
    ],
  },
  about: {
    index: "04 / o estúdio",
    title: "Um estúdio, não um fornecedor.",
    copy: "A FenixRise nasceu para colocar IA séria ao alcance de negócios reais: sistemas que verificam antes de falar, protegem o que tocam e continuam funcionando depois que a demonstração acaba. Construímos sobre infraestrutura de nuvem gerenciada, tratamos dado de cliente como acesso restrito e damos suporte ao que entregamos.",
    note: "Não construímos demonstrações que parecem inteligentes. Construímos sistemas que deixam a operação mais inteligente.",
  },
  contact: {
    index: "05 / próximo sinal",
    title: "Conte o que precisa existir.",
    copy: "O que é lento, repetitivo ou impossível de enxergar? Traga a operação. Ajudamos a mapear o sistema.",
    name: "Nome",
    namePh: "Seu nome",
    email: "E-mail",
    emailPh: "voce@empresa.com",
    message: "O que vamos construir?",
    messagePh: "Conte o que precisa existir...",
    submit: "Enviar o sinal",
  },
  footer: { left: "© 2026 FenixRise · Rise. Build. Protect.", right: "hello@fenixrise.ai · Flórida / Global" },
  drawer: {
    close: "Fechar case",
    body: "Cada case é construído em cima de um fluxo real, verificado contra restrições reais e com suporte depois do lançamento.",
    stats: [
      ["No ar", "status"],
      ["Humano", "portão de aprovação"],
      ["Feito", "em cima da operação"],
    ],
  },
  projects: [
    { name: "ShAPPherd", category: "Fé e tecnologia · Mobile", type: "Mobile", description: "Um app gratuito para levar a Palavra, feito para iOS e Android." },
    { name: "The War App", category: "Fé e tecnologia · Mobile", type: "Mobile", description: "Um gerador de orações para as horas em que as palavras não vêm." },
    { name: "FORGE", category: "Plataformas sob medida", type: "Plataformas", description: "CRM, custo, agenda e conteúdo em um único ciclo de operação." },
    { name: "BEACON", category: "Operações · Mobile", type: "Operações", description: "Retirada no carro: o cliente sinaliza e a cozinha se move." },
    { name: "LANE", category: "Operações · Drive-thru", type: "Operações", description: "Pedido no drive-thru com menos toques e fila mais rápida." },
    { name: "HERALD", category: "Agentes de IA · Conteúdo", type: "Agentes de IA", description: "Pesquisa, copy e produção com aprovação humana no caminho." },
    { name: "VEIL", category: "Segurança", type: "Segurança", description: "Mensagens cifradas que nem o provedor consegue ler." },
    { name: "LUMEN", category: "Plataformas sob medida", type: "Plataformas", description: "Documentos, status e aprovações sem a ida e volta de e-mail." },
    { name: "PULSE", category: "Agentes de IA · Conteúdo", type: "Agentes de IA", description: "Motor de conteúdo para saúde, com aprovação humana em cada portão." },
    { name: "ATLAS", category: "Plataformas sob medida", type: "Plataformas", description: "CRM, prazos, processo e relatório com IA para educação internacional." },
    { name: "LEDGER", category: "Agentes de IA · Finanças", type: "Agentes de IA", description: "Recibo entra, saem lançamentos categorizados e respostas sobre gasto." },
  ],
};

export const dict: Record<Lang, Dict> = { en, pt };

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("fr_lang");
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    /* localStorage bloqueado, cai no autodetect */
  }
  return (navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en";
}
