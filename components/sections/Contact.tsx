import Container from "@/components/Container";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <Container>
        <div className="rounded-xl border border-black/10 bg-white p-8 md:p-10">
          <p className="text-xs uppercase tracking-widest text-black/60">Contact</p>
          <h2 className="mt-2 font-title text-3xl md:text-4xl">On peut t’aider ?</h2>
          <p className="mt-4 max-w-3xl text-base text-black/70">
            Question, première visite, demande de prière. Le plus simple: écris-nous sur Instagram ou via YouTube.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={SITE.links.instagram}
              className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-white hover:opacity-90 transition-opacity"
            >
              Instagram
            </Link>
            <Link
              href={SITE.links.youtube}
              className="inline-flex items-center rounded-xl border border-black/15 bg-white px-5 py-3 hover:border-black/30 transition-colors"
            >
              YouTube
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
