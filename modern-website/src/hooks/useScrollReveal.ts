import { useEffect } from 'react';

/**
 * useScrollReveal attaches an IntersectionObserver to all elements matching a selector.
 * When an element comes into the viewport the provided animation class (default 'reveal')
 * is added to it. This allows sections to elegantly appear as the user scrolls.
 *
 * @param selector A CSS selector identifying which elements to observe
 * @param animationClass The class applied when the element enters the viewport
 * @param threshold The fraction of the element that must be visible before revealing it
 */
export default function useScrollReveal(
  selector: string,
  animationClass: string = 'reveal',
  threshold: number = 0.1
) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      },
      { threshold }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector, animationClass, threshold]);
}
