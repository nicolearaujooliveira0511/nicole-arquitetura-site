const steps = [
  {
    number: '01',
    title: 'Conversa Inicial',
    description: 'Começamos entendendo sua rotina, necessidades e objetivos. Esse é o momento de conhecer você, alinhar expectativas e definir o caminho do projeto.',
  },
  {
    number: '02',
    title: 'Desenvolvimento do Projeto',
    description: 'Transformamos suas necessidades em soluções arquitetônicas. Nesta etapa desenvolvemos o conceito, os ambientes, os materiais e apresentamos o projeto em 3D para que você visualize cada detalhe.',
  },
  {
    number: '03',
    title: 'Projeto Executivo',
    description: 'Nesta etapa, transformamos o projeto em um guia completo para a execução da obra. Todos os detalhes são especificados para garantir uma obra organizada, precisa e fiel ao projeto.',
  },
  {
    number: '04',
    title: 'Acompanhamento da Obra',
    description: 'Acompanhamos a execução para garantir que cada detalhe seja realizada conforme o projeto, oferecendo suporte até a entrega final.',
  },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="scroll-mt-[80px] py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-background-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-14 md:mb-20 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-foreground-100 text-foreground-700 text-xs font-medium tracking-wide uppercase mb-6">
            Processo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-900 leading-[1.15]">
            Nosso processo<br />
            <span className="italic font-normal text-foreground-600">do conceito à execução</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-foreground-200/60" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14 lg:gap-20">
            {steps.map((step) => (
              <div key={step.number} className="group relative flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative z-10 w-20 h-20 rounded-full border-2 border-foreground-300 bg-background-50 flex items-center justify-center mb-8 transition-all duration-300 group-hover:border-foreground-500">
                  <span className="font-heading text-2xl font-semibold text-foreground-800">{step.number}</span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-900 mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-foreground-600 leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}