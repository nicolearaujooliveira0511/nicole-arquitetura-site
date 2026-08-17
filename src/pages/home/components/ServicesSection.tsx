import { useRef } from 'react';

const services = [
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/ccb1c329-77cf-45bc-92e1-b252678240d0_compressed_ins.webp',
    title: 'Projetos Arquitetônicos',
    description: 'Da concepção inicial à aprovação e aos detalhamentos executivos, desenvolvemos projetos completos para transformar sua ideia em realidade.',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/297a1a51-940a-42e2-af73-3aefc154ef5e_compressed_cozproj.webp',
    title: 'Projetos de Interiores',
    description: 'Criamos ambientes personalizados, funcionais e atemporais, desenvolvidos para refletir seu estilo de vida e proporcionar conforto, personalidade e bem-estar em cada ambiente.',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/af94ba17-329f-4f4e-8916-035072e041a7_compressed_WhatsApp-Image-2026-07-08-at-17.42.42.webp',
    title: 'Reformas Residenciais',
    description: 'Transformamos ambientes existentes com soluções inteligentes, valorizando cada espaço e respeitando a estrutura e as necessidades do imóvel.',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-[80px] py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-background-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-foreground-100 text-accent-700 text-xs font-medium tracking-wide uppercase mb-5">
              Serviços
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-900 leading-[1.15] max-w-[600px]">
              Nossos serviços<br />
              <span className="italic font-normal text-foreground-500">soluções para<br />transformar seu espaço</span>
            </h2>
          </div>
          <p className="font-body text-foreground-500 text-sm md:text-base leading-relaxed max-w-[400px]">
            Projetos personalizados que unem funcionalidade, estética e atenção aos detalhes para criar espaços pensados para quem vai vivê-los.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl bg-background-50 overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-900 mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-foreground-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}