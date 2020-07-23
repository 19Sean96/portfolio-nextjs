import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
export default function Project(props) {
  const [ref, inView, entry] = useInView({
    threshold: 0.43,
  });

return <div className="project">hey this is the {props.name} project</div>;
}
