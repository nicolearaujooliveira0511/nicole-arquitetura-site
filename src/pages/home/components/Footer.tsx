export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 md:pt-28 pb-10 px-6 md:px-10 lg:px-16 bg-secondary-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <h3
              className="font-semibold leading-tight text-[35px] whitespace-nowrap"
              style={{ fontFamily: "'Raleway', sans-serif", color: '#1F1B17' }}
            >
              NICOLE ARAÚJO
            </h3>
            <p
              className="font-medium text-[10px] tracking-[0.24em] mt-0.5 whitespace-nowrap"
              style={{ color: '#8B847A' }}
            >
              ARQUITETURA E DESIGN
            </p>
            <p className="font-body text-sm text-foreground-500 leading-relaxed max-w-[340px] mb-6 mt-5">
              Projetos arquitetônicos, interiores e reformas residenciais, desenvolvidos com atenção aos detalhes, funcionalidade e identidade.
            </p>
            <a
              href="https://wa.me/5537998430143?text=Olá,%20Nicole!%20Encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-base font-semibold transition-colors duration-300 footer-contact-link group"
            >
              <i className="ri-whatsapp-line text-xl transition-colors duration-300" style={{ color: '#40382F' }}></i>
              <span className="relative inline-block transition-colors duration-300" style={{ color: '#40382F' }}>
                (37) 99843-0143
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#5A4A3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </span>
            </a>
          </div>

          <div>
            <h4 className="font-label text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: '#40382F' }}>
              Navegação
            </h4>
            <div className="w-8 h-[1px] bg-secondary-300 mb-5"></div>
            <ul className="space-y-3">
              <li><a href="#projetos" className="font-body text-sm text-foreground-600 hover:text-foreground-900 transition-colors duration-200">Projetos</a></li>
              <li><a href="#processo" className="font-body text-sm text-foreground-600 hover:text-foreground-900 transition-colors duration-200">Processo</a></li>
              <li><a href="#servicos" className="font-body text-sm text-foreground-600 hover:text-foreground-900 transition-colors duration-200">Serviços</a></li>
              <li><a href="#sobre" className="font-body text-sm text-foreground-600 hover:text-foreground-900 transition-colors duration-200">Sobre</a></li>
              <li><a href="#faq" className="font-body text-sm text-foreground-600 hover:text-foreground-900 transition-colors duration-200">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-xs font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: '#40382F' }}>
              Contato
            </h4>
            <div className="w-8 h-[1px] bg-secondary-300 mb-5"></div>
            <ul className="space-y-3">
              <li><a href="mailto:nicolearaujooliveira.arq@gmail.com" className="font-body text-sm text-foreground-600 hover:text-foreground-900 transition-colors duration-200">nicolearaujooliveira.arq@gmail.com</a></li>
              <li><span className="font-body text-sm text-foreground-500">Divinópolis • MG</span></li>
              <li><span className="font-body text-sm text-foreground-500">Atendimento online para todo o Brasil</span></li>
              <li>
                <a
                  href="https://wa.me/5537998430143?text=Olá,%20Nicole!%20Encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-base font-semibold transition-colors duration-200 footer-contact-link group"
                >
                  <i className="ri-whatsapp-line text-lg transition-colors duration-200" style={{ color: '#40382F' }}></i>
                  <span className="relative inline-block transition-colors duration-200" style={{ color: '#40382F' }}>
                    WhatsApp
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#5A4A3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nicolearaujo.arq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-base font-semibold transition-colors duration-200 footer-contact-link group"
                >
                  <i className="ri-instagram-line text-lg transition-colors duration-200" style={{ color: '#40382F' }}></i>
                  <span className="relative inline-block transition-colors duration-200" style={{ color: '#40382F' }}>
                    @nicolearaujo.arq
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#5A4A3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-foreground-400">
            &copy; {currentYear} NICOLE ARAÚJO ARQUITETURA E DESIGN. Todos os direitos reservados.
          </p>
        </div>
        <style>{`.footer-contact-link:hover > span { color: #5A4A3D; } .footer-contact-link:hover > i { color: #5A4A3D; }`}</style>
      </div>
    </footer>
  );
}