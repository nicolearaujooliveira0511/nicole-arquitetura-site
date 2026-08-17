import { useState, useEffect, useCallback, useRef } from 'react';

const projects = [
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/f96fb0c9-b8a9-4314-bebe-906d09561501_compressed_cozint.webp',
    category: 'Residencial',
    title: 'Cozinha integrada',
    location: 'São Paulo, SP',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/71d1604e-083b-413b-9098-96bbd4f12d0f_compressed_arpis.webp',
    category: 'Residencial',
    title: 'Área externa',
    location: 'São Paulo, SP',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/bd4f501b-c83c-482b-89f1-dbd5c3ef46bf_compressed_06.webp',
    category: 'Residencial',
    title: 'Living integrado',
    location: 'São Paulo, SP',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/ec91d374-53b8-44cd-8efa-d58c555ec11b_compressed_11.webp',
    category: 'Residencial',
    title: 'Fachada contemporânea',
    location: 'São Paulo, SP',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/7f202f74-0257-46ba-aeab-a7c135684c57_compressed_07at.webp',
    category: 'Residencial',
    title: 'Escritório residencial',
    location: 'Rio de Janeiro, RJ',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/ada82aa3-3e28-4ab3-ab17-a905a2d2668d_compressed_22.webp',
    category: 'Residencial',
    title: 'Suíte master',
    location: 'Belo Horizonte, MG',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/5d20e8e2-8fae-4474-a5b5-352ab29fd9fe_compressed_34.webp',
    category: 'Residencial',
    title: 'Varanda gourmet',
    location: 'Curitiba, PR',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/caa28e76-11cc-4c22-97e0-20e84cec26ea_compressed_estar.webp',
    category: 'Residencial',
    title: 'Sala de estar',
    location: 'Brasília, DF',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/bb460617-7e79-4fbe-b020-19da718097bc_compressed_cozz.webp',
    category: 'Residencial',
    title: 'Cozinha',
    location: 'Porto Alegre, RS',
  },
  {
    image: 'https://storage.readdy-site.link/project_files/afb92625-7882-4289-abcc-2e7c9a30c1f4/6039dc22-c0a2-4427-b6e6-c9040255a40e_compressed_lav02.webp',
    category: 'Residencial',
    title: 'Lavabo',
    location: 'Florianópolis, SC',
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  useEffect(() => {
    const handleResize = () => {
      let newVisibleCount: number;
      if (window.innerWidth >= 1024) {
        newVisibleCount = 3;
      } else if (window.innerWidth >= 768) {
        newVisibleCount = 2;
      } else {
        newVisibleCount = 1;
      }
      setVisibleCount((prev) => {
        if (prev !== newVisibleCount) {
          setCurrentIndex((idx) => {
            const newMax = Math.max(0, projects.length - newVisibleCount);
            return Math.min(idx, newMax);
          });
          return newVisibleCount;
        }
        return prev;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex((idx) => {
      const newMax = Math.max(0, projects.length - visibleCount);
      return Math.min(idx, newMax);
    });
  }, [visibleCount]);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      const clamped = Math.max(0, Math.min(index, maxIndex));
      if (clamped === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(clamped);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [currentIndex, maxIndex, isTransitioning],
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  const translateX = -(currentIndex * (100 / visibleCount));

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  return (
    <section id="projetos" className="scroll-mt-[80px] py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-background-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div className="max-w-[520px]">
            <p className="font-label text-xs tracking-[0.2em] uppercase text-foreground-400 mb-3">
              Portfólio
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-900 leading-[1.15]">
              Projetos<br />
              <span className="italic font-normal text-foreground-600">selecionados</span>
            </h2>
          </div>
          <p className="font-body text-foreground-500 text-sm md:text-base leading-relaxed max-w-[420px]">
            Cada projeto nasce da escuta, do contexto e da forma como cada cliente vive. O resultado são espaços funcionais, atemporais e cuidadosamente detalhados.
          </p>
        </div>

        <div className="relative group/carousel">
          <button
            onClick={goPrev}
            disabled={isAtStart}
            className="hidden md:flex absolute left-[-8px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-background-50/90 text-foreground-500 hover:text-foreground-900 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-0 disabled:cursor-default cursor-pointer shadow-sm"
            aria-label="Projeto anterior"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-s-line text-lg"></i>
            </div>
          </button>

          <div
            ref={trackRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
                >
                  <div className="group/card rounded-2xl overflow-hidden cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5 bg-background-200">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.location}`}
                        className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-900 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goNext}
            disabled={isAtEnd}
            className="hidden md:flex absolute right-[-8px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-background-50/90 text-foreground-500 hover:text-foreground-900 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 disabled:opacity-0 disabled:cursor-default cursor-pointer shadow-sm"
            aria-label="Próximo projeto"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-s-line text-lg"></i>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-center mt-10 gap-5">
          <div className="hidden md:flex items-center gap-1.5">
            {Array.from({ length: projects.length }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? 'w-5 h-1.5 bg-foreground-500'
                    : i >= currentIndex && i < currentIndex + visibleCount
                      ? 'w-1.5 h-1.5 bg-foreground-300'
                      : 'w-1.5 h-1.5 bg-foreground-200'
                }`}
                aria-label={`Ir para projeto ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex md:hidden items-center gap-1.5">
            {Array.from({ length: projects.length }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? 'w-4 h-1.5 bg-foreground-500'
                    : 'w-1.5 h-1.5 bg-foreground-200'
                }`}
                aria-label={`Ir para projeto ${i + 1}`}
              />
            ))}
          </div>

          <span className="font-label text-[11px] tracking-[0.25em] uppercase text-foreground-400 whitespace-nowrap">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}