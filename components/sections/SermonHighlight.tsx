import Container from "@/components/Container";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { getLatestSermon } from "@/lib/strapi";
import type { SermonItem } from "@/lib/types";
function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return iso;
  }
}

export default async function SermonHighlight() {
  let sermon: SermonItem | null = null;
  try {
    sermon = await getLatestSermon();
  } catch (error) {
    console.error("Error fetching latest sermon:", error);
    sermon = null;
  }

  return (
    <section className="py-12">
      <Container>
        <div className="rounded-xl border border-black/10 bg-white p-8 md:p-10">
          <p className="text-xs uppercase tracking-widest text-black/60">
            Dernier message
          </p>
          <h2 className="mt-2 font-title text-3xl md:text-4xl">
            {sermon?.title ?? "Retrouver les messages"}
          </h2>
          <p className="mt-3 text-sm text-black/70">
            {sermon?.date
              ? formatDate(sermon.date)
              : "Sur YouTube, chaque semaine."}
            {sermon?.speaker ? ` · ${sermon.speaker}` : ""}
          </p>
          <p className="mt-4 max-w-3xl text-base text-black/70">
            {sermon?.excerpt ??
              "Des messages simples, bibliques, pour nourrir ta foi et t’encourager dans la semaine."}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={sermon?.youtubeUrl ?? SITE.links.youtube}
              className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-white hover:opacity-90 transition-opacity"
            >
              Regarder
            </Link>
            <Link
              href="/messages"
              className="inline-flex items-center rounded-xl border border-black/15 bg-white px-5 py-3 hover:border-black/30 transition-colors"
            >
              Voir tous les messages
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
