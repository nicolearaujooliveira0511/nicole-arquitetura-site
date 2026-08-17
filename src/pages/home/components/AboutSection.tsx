export default function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-[80px] py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-background-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-[480px] mx-auto lg:mx-0">
              <img
                src="https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/88484698-1b91-4238-9279-c11a43a48f70_compressed_IMG_5086.JPG.webp"
                alt="NICOLE ARAÚJO ARQUITETURA E DESIGN"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-50/80 to-transparent h-24"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 max-w-[520px] mx-auto lg:mx-0">
            <div className="mb-8" style={{ fontFamily: "'Raleway', sans-serif" }}>
              <h2 className="font-light text-3xl md:text-4xl leading-tight uppercase" style={{ color: '#1F1B17' }}>
                NICOLE ARAÚJO
              </h2>
              <p className="font-medium tracking-[0.24em] mt-1 text-[10px] md:text-[11px] uppercase" style={{ color: '#8B847A' }}>
                ARQUITETURA E DESIGN
              </p>
            </div>
            <div className="space-y-5">
              <p className="font-body text-foreground-600 leading-relaxed text-sm md:text-base">
                Toda casa conta uma história antes mesmo de estar pronta.
Meu papel é transformar necessidades, rotina e expectativas em projetos que façam sentido para quem vai vivê-los.
Acredito em uma arquitetura discreta, funcional e atemporal, onde cada escolha tem um propósito e cada detalhe contribui para uma experiência de morar mais leve, prática e acolhedora.
Mais do que projetar ambientes, desenvolvo projetos que acompanham a vida das pessoas ao longo do tempo.
              </p>
              <p className="font-body text-foreground-600 leading-relaxed text-sm md:text-base">
                Cada projeto começa ouvindo quem vai viver aquele espaço. É dessa escuta que surgem soluções pensadas para a rotina, os hábitos e as necessidades de cada família, transformando desejos em ambientes funcionais, acolhedores e cheios de significado.
              </p>
              <p className="font-body text-foreground-600 leading-relaxed text-sm md:text-base">
                O resultado é um projeto que não se impõe, mas acolhe. Cada decisão, da escolha dos materiais à distribuição dos ambientes, é guiada pela forma como as pessoas realmente vivem, priorizando o conforto, a fluidez dos espaços e aquela sensação de pertencimento que transforma uma casa em lar. Não se trata de seguir tendências, mas de criar ambientes com identidade própria, que&nbsp;permaneçam relevantes ao longo do tempo, acompanhando as mudanças da vida sem perder sua essência.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="https://wa.me/5537998430143?text=Olá,%20Nicole!%20Encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-background-50 text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-300 hover:bg-primary-600"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                Fale com a Arquiteta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}