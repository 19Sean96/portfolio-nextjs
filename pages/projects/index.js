import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { StyledAboutSection as StyledSection } from "../../components/StyledComponents";
import Project from "../../components/ProjectTemplate";

import data from "../../data.json";

export default function Projects(props) {
  const { height, width } = props.dimensions;
  const [threshold, setThreshold] = useState(0);
  const [ref, inView, entry] = useInView({
    threshold: threshold,
  });

  const router = useRouter();

  useEffect(() => {
    if (inView) router.push("/", "/projects", { shallow: true });
    else if (!inView && router.asPath !== "/projects")
      router.push("/", router.asPath, { shallow: true });
    else router.push("/", undefined, { shallow: true });
  }, [inView]);

  useEffect(() => {
    let pageHeight = 0;
    if (entry) pageHeight = entry.boundingClientRect.height;
    setThreshold(
      height < pageHeight / 2 ? 0.0125 : height < pageHeight ? 0.025 : 0.05
    );
  }, [props.dimensions, entry]);

  return (
    <StyledSection
      className="projects page"
      inView={inView}
      ref={ref}
      id="projects"
      name="projects"
    >
      <div className="projects__wrapper">
        <h3 className="projects--title">projects.</h3>

        <div className="projects--list">
          {data.map((proj, i) => (
            <Project project={proj} index={i} dimensions={props.dimensions}/>
          ))}
        </div>
      </div>
    </StyledSection>
  );
}
