import Container from "@/components/Container";
import { getFAQ } from "@/lib/strapi";
import type { FAQItem } from "@/lib/types";

export default async function FAQ() {
  let items: FAQItem[] = [];
  try {
    items = await getFAQ();
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    items = [];
  }

  const fallback = [
    { question: "Comment venir dimanche ?", answer: "Arrive 10 minutes avant, viens comme tu es, on t’accueille.", id: 1 },
    { question: "Y a-t-il un accueil enfants ?", answer: "Selon les équipes présentes, on t’indique sur place.", id: 2 },
    { question: "Puis-je demander la prière ?", answer: "Oui. Passe par la section Contact ou viens à la fin du culte.", id: 3 },
  ];

  const list = items.length ? items : fallback;

  return (
    <section className="py-12">
      <Container>
        <p className="text-xs uppercase tracking-widest text-black/60">FAQ</p>
        <h2 className="mt-2 font-title text-3xl md:text-4xl">Questions fréquentes</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {list.slice(0, 6).map((f: FAQItem) => (
            <div key={f.id} className="rounded-xl border border-black/10 bg-white p-6">
              <div className="font-title text-2xl">{f.question}</div>
              <p className="mt-2 text-sm text-black/70">{f.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
