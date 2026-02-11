import Container from "@/components/Container";

export default function TextBlock({ title, text }: { title: string; text: string }) {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-xl border border-black/10 bg-white p-8 md:p-10">
          <p className="text-xs uppercase tracking-widest text-black/60">À propos</p>
          <h2 className="mt-2 font-title text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-black/70">{text}</p>
        </div>
      </Container>
    </section>
  );
}
