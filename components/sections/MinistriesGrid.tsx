import Container from "@/components/Container";
import Link from "next/link";
import { getMinistries } from "@/lib/strapi";

export default async function MinistriesGrid() {
  let ministries = [];
  try {
    ministries = await getMinistries();
  } catch {
    ministries = [];
  }

  const fallback = [
    { name: "Selah", excerpt: "Soirée louange, un temps pour s’arrêter.", pageUrl: "/selah" },
    { name: "Bloom", excerpt: "Ministère des femmes, encouragement et croissance.", pageUrl: "/bloom" },
  ];

  const items = ministries.length ? ministries : fallback;

  return (
    <section className="py-12">
      <Container>
        <p className="text-xs uppercase tracking-widest text-black/60">Ministères</p>
        <h2 className="mt-2 font-title text-3xl md:text-4xl">Une place pour grandir</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.slice(0, 6).map((m: any, idx: number) => (
            <div key={m.id ?? idx} className="rounded-xl border border-black/10 bg-white p-6">
              <div className="font-title text-2xl">{m.name}</div>
              <p className="mt-2 text-sm text-black/70">{m.excerpt ?? ""}</p>
              {m.pageUrl ? (
                <div className="mt-4">
                  <Link href={m.pageUrl} className="text-sm text-brand hover:opacity-80">
                    Découvrir
                  </Link>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
