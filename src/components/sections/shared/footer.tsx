import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const productLinks = [
  { title: "Qlerkly", href: "/feature/qlerkly" },
  { title: "Lexora", href: "/feature/lexora" },
];

const pageLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/contact" },
  { title: "Contact", href: "/contact" },
];

const utilityLinks = [
  { title: "Privacy Policy", href: "/legal/privacy-policy" },
  { title: "Terms & Conditions", href: "/legal/terms-&-condition" },
  { title: "Cookie Policy", href: "/legal/cookie-policy" },
];

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:info@clinentora.com",
    label: "Email Clinentora",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/sukhmanjeet-singh-642a63258",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          {/* Left Column: CTA & Logo */}
          <div className="space-y-16 max-w-[420px]">
            <div className="space-y-6">
              <h3 className="text-[20px] font-medium leading-[140%] tracking-[-0.02em]">
                See our platform on your firm's files
              </h3>
              <p className="text-white/70 text-[16px] leading-[150%]">
                Walk through a live session with our team.
              </p>
              <Button asChild>
                <Link to="/book-a-demo">Book a Demo</Link>
              </Button>
            </div>

            <Link to="/" className="inline-block">
              <img
                src="/images/common/logo.svg"
                alt="Clinentora"
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div>
              <h4 className="font-semibold text-white mb-6">Products</h4>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors text-[16px]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {pageLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors text-[16px]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-4">
                {utilityLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors text-[16px]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-sm text-center md:text-left md:max-w-none max-w-xs">
            © {new Date().getFullYear()} Clinentora · AI-Powered Legal
            Management ·{" "}
            <a
              href="mailto:info@clinentora.com"
              className="text-white/90 hover:text-white transition-colors"
            >
              info@clinentora.com
            </a>
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/70 hover:text-white"
                aria-label={social.label || "Social Link"}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
