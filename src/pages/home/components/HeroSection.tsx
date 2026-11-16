export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Coluna Esquerda – 36% – Editorial de Arquitetura */}
        <div className="relative w-full lg:w-[36%] h-[48%] lg:h-full bg-[#FAF8F4] flex items-center">

          <div className="relative z-10 w-full px-8 md:px-10 lg:px-12 xl:px-16 pt-[120px] md:pt-[130px] pb-14 md:pb-18">
            <p className="font-label text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-foreground-400 mb-10 md:mb-12 whitespace-nowrap">
              ARQUITETURA • INTERIORES
            </p>

            <h1 className="font-heading text-[38px] sm:text-[46px] md:text-[50px] lg:text-[52px] xl:text-[60px] font-light leading-[1.15] tracking-tight text-foreground-900 mb-8 md:mb-10">
              Projetos que fazem&nbsp;<br />
              <span className="italic">sentido para<br />quem vive.</span>
            </h1>

            <p className="font-body text-[16px] md:text-[18px] text-foreground-500 leading-[1.8] md:leading-[1.85] font-light mb-6 md:mb-8 max-w-[420px]">
              Cada projeto nasce da escuta, do contexto e da forma como cada cliente vive. Criamos espaços atemporais, funcionais e cuidadosamente detalhados para acompanhar a rotina ao longo do tempo.
            </p>

            <a
              href="https://wa.me/5537998430143?text=Olá,%20Nicole!%20Encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
  (window as any).gtag?.('event', 'conversion', {
    send_to: 'AW-18186558394/jmDNCIbAsvwcELq3g-BD',
  });
}}
              className="group inline-flex items-center gap-2 px-6 py-[13px] rounded-full bg-primary-500 text-background-50 text-[15px] font-medium tracking-wide whitespace-nowrap transition-all duration-300 hover:bg-primary-600 hover:gap-3"
            >
              <span className="w-8 h-8 rounded-full bg-background-50/20 flex items-center justify-center flex-shrink-0">
                <i className="ri-whatsapp-line text-base text-background-50"></i>
              </span>
              Falar com a Arquiteta
              <i className="ri-arrow-right-up-line text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
            </a>
          </div>
        </div>

        {/* Coluna Direita – 64% – Imagem em tela cheia */}
        <div className="relative w-full lg:w-[64%] h-[52%] lg:h-full bg-[#FAF8F4]">

          <img
            src="https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/c7ccf4cc-a1e9-4e60-82e9-ed4ea8713608_compressed_27.webp"
            alt="Interior residencial contemporâneo com luz natural, design minimalista e sofisticado por NICOLE ARAÚJO ARQUITETURA E DESIGN"
            className="w-full h-full object-cover object-[32%_center]"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 100%), linear-gradient(to bottom, transparent 0%, black 7%, black 100%)',
              WebkitMaskComposite: 'source-in',
              maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 100%), linear-gradient(to bottom, transparent 0%, black 7%, black 100%)',
              maskComposite: 'intersect',
            }}
          />
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#projetos"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors duration-300"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Explore</span>
          <i className="ri-arrow-down-line text-lg animate-bounce"></i>
        </a>
      </div>
    </section>
  );
}
