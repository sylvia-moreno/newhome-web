import Container from "@/components/Container";
import Link from "next/link";
import { getEvents } from "@/lib/strapi";

type EventItem = {
  id: string | number;
  title?: string;
  startsAt?: string;
  endsAt?: string | null | undefined;
  locationName?: string | null | undefined;
  address?: string | null | undefined;
  signupUrl?: string | null | undefined;
  featured?: boolean | null | undefined;
  excerpt?: string | null | undefined;
};

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("fr-FR", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  } catch {
    return iso;
  }
}

export default async function EventsList() {
  let events: EventItem[] = [];
  try {
    events = await getEvents();
  } catch (error) {
    console.error("Error fetching events:", error);
    events = [];
  }

  return (
    <section className="py-12">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-black/60">
              Agenda
            </p>
            <h2 className="mt-2 font-title text-3xl md:text-4xl">
              Événements à venir
            </h2>
          </div>
          <Link href="/evenements" className="text-sm hover:text-brand">
            Voir tout
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {events.length === 0 ? (
            <div className="md:col-span-3 rounded-xl border border-black/10 bg-white p-6 text-sm text-black/70">
              Ajoute des événements dans Strapi pour les voir apparaître ici.
            </div>
          ) : (
            events.slice(0, 6).map((e) => (
              <div
                key={e.id}
                className="rounded-xl border border-black/10 bg-white p-6"
              >
                <div className="text-xs uppercase tracking-widest text-black/60">
                  {formatDate(e.startsAt ?? "")}
                </div>
                <div className="mt-2 font-title text-2xl">{e.title}</div>
                <p className="mt-2 text-sm text-black/70">{e.excerpt ?? ""}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {e.signupUrl ? (
                    <Link
                      href={e.signupUrl}
                      className="text-sm text-brand hover:opacity-80"
                    >
                      S’inscrire
                    </Link>
                  ) : null}
                  <span className="text-xs text-black/50">
                    {e.locationName ?? ""}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  );
}
