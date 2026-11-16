export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Warm%20contemporary%20residential%20architecture%20interior%20detail%2C%20natural%20light%20streaming%20through%20large%20windows%2C%20minimalist%20living%20space%20with%20wood%20and%20stone%20textures%2C%20neutral%20cream%20and%20beige%20palette%2C%20soft%20atmospheric%20mood%2C%20high-end%20residential%20interior%20photography%2C%20editorial%20style%2C%20warm%20cozy%20yet%20elegant%20mood%2C%20abstract%20architectural%20composition&width=1920&height=800&seq=cta-arch-01&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/75 via-primary-800/70 to-primary-900/75"></div>
      </div>

      <div className="relative z-10 max-w-[720px] mx-auto text-center">
        <p className="font-label font-semibold text-xs md:text-sm tracking-[0.25em] uppercase mb-5" style={{ color: '#F2ECE3' }}>
          Vamos conversar?
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.15] mb-6">
          Vamos transformar sua ideia em um projeto que faça sentido para você.
        </h2>
        <p className="font-body text-base md:text-lg mb-10 max-w-[500px] mx-auto leading-relaxed font-light" style={{ color: '#D9D1C7' }}>
          Cada projeto começa entendendo quem vai viver aquele espaço. Entre em contato para conversarmos sobre suas ideias, necessidades e objetivos. A partir dessa conversa, construiremos juntos a melhor solução para você.
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
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-500 text-background-50 text-sm md:text-base font-medium tracking-wide whitespace-nowrap transition-all duration-300 hover:bg-primary-600 hover:gap-5"
        >
          <span className="w-10 h-10 rounded-full bg-background-50/20 flex items-center justify-center flex-shrink-0">
            <i className="ri-whatsapp-line text-xl text-background-50"></i>
          </span>
          Falar com a Arquiteta
          <i className="ri-arrow-right-up-line text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
        </a>
      </div>
    </section>
  );
}
