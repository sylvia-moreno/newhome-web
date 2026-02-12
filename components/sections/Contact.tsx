"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Link from "next/link";

export function EmailLink({ isCustom = false }: { isCustom?: boolean }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = "newhome.church.paris";
    const domain = "gmail.com";
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) {
    return (
      <span className="inline-block w-40 h-6 bg-gray-200 animate-pulse rounded" />
    );
  }

  return (
    <Link
      href={`mailto:${email}?subject=${encodeURIComponent("Vous avez un nouveau message provenant du site web !")}&body=${encodeURIComponent("Bonjour, je vous contacte au sujet de...")}`}
      className={` ${isCustom ? "inline-flex items-center rounded-xl bg-brand px-5 py-3 text-white hover:opacity-90 transition-opacity" : "text-brand"}`}
    >
      {email}
    </Link>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <Container>
        <div className="rounded-xl border border-black/10 bg-white p-8 md:p-10">
          <h2 className="text-xs uppercase tracking-widest text-black/60">
            Une question ? Nous sommes là pour y répondre.
          </h2>
          <p className="mt-4 text-base text-black/70">
            Une interrogation, une première visite ou une demande de prière.
            Vous pouvez nous écrire à cette adresse&nbsp;:&nbsp;
            <EmailLink isCustom={false} />
          </p>
        </div>
      </Container>
    </section>
  );
}
