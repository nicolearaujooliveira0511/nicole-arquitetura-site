export default function SkipToContent() {
  return (
    <a
      href="#conteudo-principal"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-primary-500 focus:text-background-50 focus:rounded-lg focus:font-medium focus:text-sm focus:shadow-lg focus:outline-none"
    >
      Pular para o conteúdo principal
    </a>
  );
}