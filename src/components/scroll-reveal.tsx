"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scroll-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const observeSections = (root: ParentNode = document) => {
      const selector = "main > section, main > div, footer";
      const sections = Array.from(root.querySelectorAll<HTMLElement>(selector));
      if (root instanceof HTMLElement && root.matches(selector)) sections.unshift(root);

      sections.forEach((section) => {
        if (section.classList.contains("scroll-reveal")) return;
        section.classList.add("scroll-reveal");
        observer.observe(section);
      });
    };

    observeSections();

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) observeSections(node);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
