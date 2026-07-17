import gsap from "gsap";
import type { DirectiveBinding } from "vue";

type RevealValue = { delay?: number } | undefined;

export default defineNuxtPlugin((nuxtApp) => {
  const callbacks = new WeakMap<Element, () => void>();
  let observer: IntersectionObserver | null = null;

  function getObserver() {
    if (observer) return observer;
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const cb = callbacks.get(entry.target);
          if (cb) cb();
          callbacks.delete(entry.target);
          observer!.unobserve(entry.target);
        }
      },
      // threshold 0 + no negative margin: reveal as soon as any pixel enters
      // the viewport. A stricter threshold/rootMargin can permanently strand
      // elements that sit in the last screen of a page (nothing left to
      // scroll past their trigger zone) or fall right on a fast-scroll frame.
      { threshold: 0, rootMargin: "0px" },
    );
    return observer;
  }

  const reduceMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function watch(el: Element, cb: () => void) {
    if (reduceMotion()) {
      cb();
      return;
    }
    callbacks.set(el, cb);
    getObserver().observe(el);
  }

  // v-reveal / v-reveal:clip / v-reveal:stagger — fade-up or clip-in reveal,
  // triggered once when the element scrolls into view.
  nuxtApp.vueApp.directive("reveal", {
    mounted(el: HTMLElement, binding: DirectiveBinding<RevealValue>) {
      const variant =
        binding.arg === "clip" ? "clip" : binding.arg === "stagger" ? "stagger" : "fade";
      const baseDelay = binding.value?.delay ?? 0;

      if (variant === "stagger") {
        const children = Array.from(el.children) as HTMLElement[];
        children.forEach((child, i) => {
          child.setAttribute("data-rv", "fade");
          child.style.setProperty("--rv-delay", `${baseDelay + Math.min(i * 80, 480)}ms`);
          watch(child, () => child.classList.add("rv-in"));
        });
        return;
      }

      el.setAttribute("data-rv", variant);
      if (baseDelay) el.style.setProperty("--rv-delay", `${baseDelay}ms`);
      watch(el, () => el.classList.add("rv-in"));
    },
  });

  // v-count — animates a leading integer in the element's text (e.g. "50+",
  // "$ 0") from 0 to its target value once, leaving any prefix/suffix static.
  nuxtApp.vueApp.directive("count", {
    mounted(el: HTMLElement) {
      el.style.fontVariantNumeric = "tabular-nums";

      const raw = el.textContent || "";
      const match = raw.match(/^(\D*?)(\d+)(.*)$/s);
      if (!match) return;

      const [, prefix, digits, suffix] = match;
      const target = parseInt(digits, 10);
      if (reduceMotion()) return;

      watch(el, () => {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.2,
          ease: "power1.out",
          snap: { val: 1 },
          onUpdate: () => {
            el.textContent = `${prefix}${counter.val}${suffix}`;
          },
        });
      });
    },
  });
});
