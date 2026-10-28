export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand">
          <span className="brand-mark">MV</span>
          <div>
            <p className="footer-title">Magic Vision Photography</p>
            <p>Small moments, held close.</p>
          </div>
        </div>
        <div className="footer-address">
          <span className="eyebrow">Magic Vision Studios</span>
          <p>
            Serving families across Pune, Pimpri-Chinchwad, Wakad, Baner,
            Hinjawadi, Aundh, Kothrud, and nearby communities.
          </p>
          <span className="footer-appointment">
            Private studio visits by appointment
          </span>
        </div>
        <div className="footer-connect">
          <span className="eyebrow">Stay in touch</span>
          <a href="tel:+917558250015">+91 95951 44144</a>
          <a href="https://wa.me/917558250015" target="_blank" rel="noreferrer">
            WhatsApp chat ↗
          </a>
          <a
            href="https://instagram.com/magicvision_photography"
            target="_blank"
            rel="noreferrer"
          >
            @magicvision_photography ↗
          </a>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© 2026 Magic Vision Photography. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
