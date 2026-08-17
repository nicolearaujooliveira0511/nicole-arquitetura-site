import { useEffect } from 'react';

export default function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const tag = target.tagName.toLowerCase();
      const isFormElement =
        tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        target.isContentEditable;

      if (isFormElement) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          window.scrollBy({ top: 120, behavior: 'smooth' });
          break;
        case 'ArrowUp':
          e.preventDefault();
          window.scrollBy({ top: -120, behavior: 'smooth' });
          break;
        case ' ':
          if (e.shiftKey) {
            e.preventDefault();
            window.scrollBy({ top: -(window.innerHeight * 0.85), behavior: 'smooth' });
          } else {
            e.preventDefault();
            window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}