import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
export default function Project(props) {
  const { project } = props;
  const [ref, inView, entry] = useInView({
    threshold: 0.43,
  });

  return (
    <div className="project">
      <h1 className="project--title">{project.title}</h1>
      <h2 className="project--subtitle">{project.subtitle}</h2>
    </div>
  );
}
