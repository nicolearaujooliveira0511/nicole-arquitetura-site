import { useState } from 'react';

const faqs = [
  {
    question: 'Como funciona o primeiro atendimento?',
    answer: 'O primeiro atendimento é um momento para entendermos suas necessidades, objetivos e expectativas. Conversamos sobre o imóvel, o estilo de vida da família, o investimento previsto e as possibilidades do projeto. A partir dessa conversa, definimos os próximos passos e elaboramos uma proposta personalizada.',
  },
  {
    question: 'Vocês atendem outras cidades ou fazem projetos online?',
    answer: 'Sim. Desenvolvemos projetos presenciais em Divinópolis e região, além de atender clientes de outras cidades e estados de forma totalmente online. Todo o processo é estruturado para garantir um acompanhamento próximo, independentemente da localização.',
  },
  {
    question: 'Em que momento devo contratar um arquiteto?',
    answer: 'Quanto antes, melhor. O acompanhamento desde o início permite aproveitar melhor o terreno ou o imóvel existente, evitar retrabalhos, planejar os investimentos e desenvolver soluções que valorizem cada etapa da obra.',
  },
  {
    question: 'Qual o prazo médio para desenvolver um projeto arquitetônico completo?',
    answer: 'O prazo varia de acordo com a complexidade e o escopo do projeto. Em média, um projeto residencial completo leva entre 3 e 6 meses, incluindo todas as etapas de desenvolvimento e detalhamento. O cronograma é definido de forma personalizada no início do processo.',
  },
  {
    question: 'O projeto pode ser desenvolvido de acordo com meu orçamento?',
    answer: 'Sim. O projeto é pensado considerando as prioridades, necessidades e o investimento disponível. O objetivo é criar soluções equilibradas, que unam estética, funcionalidade e viabilidade, respeitando o orçamento previsto para a obra.',
  },
  {
    question: 'Qual a diferença entre projeto arquitetônico e projeto de interiores?',
    answer: 'O projeto arquitetônico define a concepção da residência, sua organização, volumetria e aspectos construtivos. Já o projeto de interiores é voltado para os ambientes internos, contemplando layout, iluminação, materiais, marcenaria, mobiliário e acabamentos.',
  },
  {
    question: 'Vocês também fazem apenas reformas?',
    answer: 'Sim. Também desenvolvemos projetos para reformas residenciais, sempre buscando adaptar os ambientes às novas necessidades da família, valorizando a funcionalidade, a estética e o potencial do imóvel.',
  },
  {
    question: 'Vocês acompanham a execução da obra?',
    answer: 'Sim. O acompanhamento de obra faz parte dos serviços oferecidos e tem como objetivo garantir que a execução aconteça conforme o projeto, auxiliando na tomada de decisões e esclarecendo dúvidas durante todo o processo.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-[80px] py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-background-100">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-900 leading-[1.15]">
            Perguntas{' '}
            <span className="italic font-normal text-foreground-500">frequentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-background-50 border border-background-200/70 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 md:py-6 text-left cursor-pointer"
              >
                <span className="font-heading text-lg md:text-xl font-semibold text-foreground-800 pr-4">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-accent-100 text-accent-700 rotate-45'
                    : 'bg-background-100 text-foreground-400'
                }`}>
                  <i className="ri-add-line text-lg"></i>
                </span>
              </button>
              <div
                className={`transition-all duration-400 overflow-hidden ${
                  openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 md:px-8 pb-5 md:pb-6 font-body text-sm md:text-base text-foreground-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}