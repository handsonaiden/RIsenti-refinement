import Link from "next/link";
import { SITE } from "@/lib/content";
import { Logo } from "@/components/Icons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <Link className="brand" href="/" aria-label="Risenti home">
              <Logo />
              <b>Risenti</b>
            </Link>
            <p className="tagline">Empowering decisions. Unlocking AI and cloud potential.</p>
          </div>
          <nav aria-label="Footer">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div>
            <h4>Social media</h4>
            <ul>
              <li><a href={SITE.x} target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href={SITE.privacy}>Privacy policy</a></li>
              <li><a href={SITE.terms}>Terms &amp; conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap base">
          <span>&copy; Risenti {new Date().getFullYear()}</span>
          <span>Risenti Place, Nairobi, Kenya</span>
        </div>
      </footer>

      <a className="wa" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 4C9.4 4 4.02 9.34 4.02 15.93c0 2.1.55 4.15 1.6 5.96L4 28l6.27-1.6a12.1 12.1 0 0 0 5.77 1.47h.01c6.63 0 12.02-5.34 12.02-11.93S22.68 4 16.04 4zm0 21.8h-.01a10.1 10.1 0 0 1-5.15-1.4l-.37-.22-3.72.95.99-3.6-.24-.37a9.8 9.8 0 0 1-1.5-5.23c0-5.43 4.45-9.84 9.92-9.84 5.46 0 9.9 4.41 9.9 9.84 0 5.43-4.44 9.87-9.82 9.87zm5.43-7.39c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1-1.04 2.45s1.07 2.84 1.22 3.04c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.88.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </>
  );
}
