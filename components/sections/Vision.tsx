import Container from "../Container";
import "./Vision.css";

export default function Vision({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <section className="vision py-14 bg-color-brand text-white bg-brand">
      <Container>
        <p className="mt-5  mb-5 text-base md:text-5xl font-light">{text}</p>
      </Container>
    </section>
  );
}
