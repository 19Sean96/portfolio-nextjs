import { useInView } from "react-intersection-observer";
import {
  StyledAboutArticle as StyledArticle,
  StyledAboutSection as StyledSection,
} from "../../components/StyledComponents";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const defaultDimensions = {
  height: 720,
  width: 1080
}

export default function AboutPage(props) {
  const { height, width } = props.dimensions || defaultDimensions;
  const [threshold, setThreshold] = useState(0);

  const [ref, inView, entry] = useInView({
    threshold: threshold,
  });

  const router = useRouter();

  useEffect(() => {
    console.log(inView);
    if (inView) router.push("/", "/about", { shallow: true });
    else if (!inView && router.asPath !== "/about")
      router.push("/", router.asPath, { shallow: true });
    else router.push("/", undefined, { shallow: true });
  }, [inView]);

  useEffect(() => {
    let pageHeight = 0;

    if (entry) pageHeight = entry.boundingClientRect.height;
    setThreshold(
      height < pageHeight / 2 ? 0.125 : height < pageHeight ? 0.2 : 0.4
    );
  }, [props.dimensions, entry]);

  return (
    <StyledSection
      className="about page"
      inView={inView}
      ref={ref}
      id="about"
      name="about"
    >
      <div className="about__wrapper">
        <h3 className="about--title">about.</h3>
        <div className="about--paragraph__wrapper">
          <StyledArticle
            inView={inView}
            delay={0.1}
            translate={"(0,-25%)"}
            className="about--paragraph about--paragraph-1"
          >
            <h4 className="about--paragraph--title">Process</h4>
            <p className="about--paragraph--text">
              Understanding & visualizing what is important - this is the first
              step that both Design & Development fundamentally share. With
              endless opportunity for creating experiences on the web, a
              targeted vision is needed to avoid wasting time and focus on the
              most impactful factors to the application end-goal.
            </p>
            <p className="about--paragraph--text">
              To me, being able to visualize an application architecture and
              understand its impact on future development is indistinguishable
              to visualizing a design language for a web-app or website and
              understand how the user experience will be impacted.
            </p>
          </StyledArticle>
          <StyledArticle
            inView={inView}
            delay={0.2}
            translate={"(-25%,0)"}
            className="about--paragraph about--paragraph-2"
          >
            <h4 className="about--paragraph--title">Purpose</h4>
            <p className="about--paragraph--text">
              With proven capabilities in mathematics & creative design, I see
              myself as being ambidextrous to both creative & technical work.
              Neutral to either department, I enjoy acting as the translator
              between technical & creative teams.
            </p>
            <p className="about--paragraph--text">
              Communication is essential to success in any industry, and it’s a
              hard, dynamic skill to master, yet one that returns dividends. It
              impacts business operations, marketing, development timeframes,
              and so much more. My role is to be that impact through
              transparency, cooperation & understanding audiences.
            </p>
          </StyledArticle>
          <StyledArticle
            inView={inView}
            delay={0.3}
            translate={"(25%,0)"}
            className="about--paragraph about--paragraph-3"
          >
            <h4 className="about--paragraph--title">Passion</h4>
            <p className="about--paragraph--text">
              Original ideas are nothing more than a “mixing” of pre-existing
              ideas to create something brand new - an innovation. Meaning, an
              original idea is only as good as the existing ideas the thinker
              was already exposed to.
            </p>
            <p className="about--paragraph--text">
              I’m passionate about diversifying the ideas I’m exposed to.
              Whether that be peaking through history, sharing a conversation of
              ideals with someone from a different country, or simply watching
              nature documentaries, everything leaves an impact on how I
              approach life and work. I love digesting what I observe & finding
              analogies that seem to make more sense when combined with
              otherwise unrelated topics.
            </p>
          </StyledArticle>
        </div>
      </div>
    </StyledSection>
  );
}
