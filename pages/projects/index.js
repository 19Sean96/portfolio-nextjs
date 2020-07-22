import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [ref, inView, entry] = useInView({
    threshold: 0.43,
  });

  return (
    <section className="projects page">
      <div className="projects__wrapper">
        <h3 className="projects--title">projects.</h3>
        <div className="projects--list__wrapper">
        </div>
      </div>
    </section>
  );
}
