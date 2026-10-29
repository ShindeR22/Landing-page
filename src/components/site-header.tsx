"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Our story", href: "#about" },
  { label: "Experiences", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "The studio", href: "#studio" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement-bar">
        Now booking maternity & family sessions · Pune and PCMC
      </div>
      <header className="site-header">
        <div className="header-inner">
          {/* <a href="#top" className="brand-lockup" aria-label="Magic Vision Photography home">
            <span className="brand-mark" aria-hidden="true">MV</span>
            <span className="brand-copy"><span className="brand-name">Magic Vision</span><span className="brand-subtitle">Photography atelier</span></span>
          </a> */}
          <a
            href="#top"
            className="brand-lockup"
            aria-label="Magic Vision Photography home"
          >
            <span className="brand-mark" aria-hidden="true">
              <Image
                src="/images/magic-vision-logo.jpg"
                alt=""
                width={35}
                height={35}
              />
            </span>

            <span className="brand-copy">
              <span className="brand-name">Magic Vision</span>
              <span className="brand-subtitle">Photography atelier</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#book">
            Book a session <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <span>↗</span>
              </a>
            ))}
            <a href="#book" onClick={() => setMenuOpen(false)}>
              Book a session<span>↗</span>
            </a>
          </nav>
        ) : null}
      </header>
    </>
  );
}
