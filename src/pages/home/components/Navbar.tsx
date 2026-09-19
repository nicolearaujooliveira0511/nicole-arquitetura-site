import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const links = [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F5F0] border-b border-foreground-200/15'
          : 'bg-transparent'
      }`}
    >
      <div className={`px-8 md:px-10 lg:px-12 xl:px-16 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'py-[14px]' : 'py-[24px]'
      }`}>
        <a
          href="#"
          className="flex flex-col items-start whitespace-nowrap pt-[2px]"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          <span
            className={`font-semibold leading-tight transition-all duration-300 ${
              scrolled ? 'text-[24px]' : 'text-[27px]'
            }`}
            style={{ color: '#1F1B17' }}
          >
            NICOLE ARAÚJO
          </span>
          <span
            className={`font-medium tracking-[0.24em] mt-0.5 transition-all duration-300 ${
              scrolled ? 'text-[8px]' : 'text-[9px]'
            }`}
            style={{ color: '#8B847A' }}
          >
            ARQUITETURA E DESIGN
          </span>
        </a>

        <div className="hidden md:flex items-center gap-14">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium tracking-wide whitespace-nowrap text-foreground-700 transition-all duration-300 hover:text-accent-500 ${
                scrolled ? 'text-[15px]' : 'text-[16px]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5537998430143?text=Olá,%20Nicole!%20Encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
  (window as any).gtag?.('event', 'conversion', {
    send_to: 'AW-18186558394/jmDNCIbAswvcELq3g-BD',
  });
}}
            className={`ml-4 rounded-xl font-medium tracking-wide whitespace-nowrap transition-all duration-300 bg-primary-500 text-background-50 hover:bg-primary-600 ${
              scrolled ? 'px-4 py-1 text-[13px]' : 'px-5 py-1.5 text-sm'
            }`}
          >
            Solicitar Orçamento
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-foreground-800"
          aria-label="Menu"
        >
          <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {mobileOpen && (
        <div className={`md:hidden ${scrolled ? 'bg-[#F8F5F0]' : 'bg-white'}`}>
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground-700 text-sm font-medium py-2 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5537998430143?text=Olá,%20Nicole!%20Encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
  setMobileOpen(false);
  (window as any).gtag?.('event', 'conversion', {
    send_to: 'AW-18186558394/jmDNCIbAswvcELq3g-BD',
  });
}}
              className="mt-2 px-5 py-2 rounded-2xl bg-primary-500 text-background-50 text-sm font-medium text-center tracking-wide"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}