import { footerLinks, footerText } from "@/lib/site-data";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="font-heading text-xl font-semibold text-text-primary">Jonathan Hop</p>
          <p className="max-w-lg text-sm leading-6 text-text-muted">{footerText}</p>
          <p className="text-sm text-text-muted">
            Available for senior engineering roles —{" "}
            <a
              className="underline underline-offset-2 transition-colors hover:text-text-primary"
              href="mailto:yithril@gmail.com"
            >
              get in touch
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <a
              className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
              href={link.href}
              key={link.label}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
