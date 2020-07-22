import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

export default function Project() {
  const [ref, inView, entry] = useInView({
    threshold: 0.43,
  });
  const router = useRouter();
  const { project } = router.query;
  return <div>hey this is the {project} project</div>;
}
