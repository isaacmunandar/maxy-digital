import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";

gsap.registerPlugin(SplitText);

/**
 * Splits the text inside `selector` into chars or words and reveals them
 * with a clipped slide-up, once, on page load. No-ops under
 * prefers-reduced-motion.
 */
export function useHeroSplitReveal(selector: string, type: "chars" | "words" = "words") {
  onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) return;

    const split = new SplitText(el, { type });
    const targets = type === "chars" ? split.chars : split.words;

    gsap.set(el, { overflow: "hidden" });
    gsap.set(targets, { display: "inline-block" });
    gsap.from(targets, {
      yPercent: type === "chars" ? 100 : 110,
      opacity: 0,
      duration: type === "chars" ? 0.8 : 0.7,
      stagger: type === "chars" ? 0.04 : 0.06,
      ease: "power3.out",
    });
  });
}
