import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { StyledSection } from "../../components/About.styled"
export default function Projects() {
  const [ref, inView, entry] = useInView({
    threshold: 0.375,
  });

  const router = useRouter()

  useEffect(() => {
    if (inView) router.push('/', '/projects', { shallow: true })
    else if (!inView && router.asPath !== "/projects") router.push("/", router.asPath, { shallow: true})
    else router.push('/', undefined, { shallow: true })
  }, [inView])

  return (
    <StyledSection className="projects page" inView={inView} ref={ref}>
      <div className="projects__wrapper">
        <h3 className="projects--title">projects.</h3>
        <div className="projects--list__wrapper"></div>
      </div>
    </StyledSection>
  );
}
