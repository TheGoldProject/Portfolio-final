export default function SectionContainer({ children, id }) {
  return (
    <section id={id} className="relative flex flex-col items-center bg-background pt-20 gap-10">
      {children}
    </section>
  );
}
