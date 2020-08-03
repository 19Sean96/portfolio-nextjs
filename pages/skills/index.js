import { useInView } from "react-intersection-observer";
import { StyledSection } from "../../components/Skills.styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SkillsPage(props) {
  const { height, width } = props.dimensions;
  const [threshold, setThreshold] = useState(0);

  const [ref, inView, entry] = useInView({
    threshold: threshold,
  });

  // SCROLLING DOWN FROM ABOUT TRIGGERS /SKILLS. ONCE /ABOUT GOES OUT OF VIEW, IT RESETS BACK TO /

  const router = useRouter();
  useEffect(() => {
    if (inView) router.push("/", "/skills", { shallow: true });
    else if (!inView && router.asPath !== "/skills")
      router.push("/", router.asPath, { shallow: true });
    else router.push("/", undefined, { shallow: true });
  }, [inView]);

  useEffect(() => {
    let pageHeight = 0;
    if (entry) pageHeight = entry.boundingClientRect.height;
    setThreshold(
      height < pageHeight / 2 ? 0.075 : height < pageHeight ? 0.15 : 0.3
    );
  }, [props.dimensions, entry]);

  return (
    <StyledSection
      className="skills page"
      inView={inView}
      ref={ref}
      id="skills"
      name="skills"
    >
      <div className="skills__wrapper">
        <h3 className="skills--title">skills.</h3>
        <div className="skills--list__wrapper">
          <article className="skills--list skills--list-1">
            <h4 className="skills--list--title">development</h4>
            <ul>
              <li className="skills--list--item">
                <span className="skills--list--item__name">React:</span>
                <span className="skills--list--item__details">
                  Next.js, CRA
                </span>
              </li>
              <li className="skills--list--item">
                <span className="skills--list--item__name">
                  Database Languages:{" "}
                </span>
                <span className="skills--list--item__details">
                  SQL, MongoDB
                </span>
              </li>
              <li className="skills--list--item">
                <span className="skills--list--item__name">Headless-CMS: </span>
                <span className="skills--list--item__details">
                  Directus, Strapi, Shopify
                </span>
              </li>
              <li className="skills--list--item">
                <span className="skills--list--item__name">Server-Side: </span>
                <span className="skills--list--item__details">
                  Node.js, Express.js
                </span>
              </li>
              <li className="skills--list--item">
                <span className="skills--list--item__name">SCSS: </span>
                <span className="skills--list--item__details">
                  Animations (Keyframes & Transitions), Mixins, Variables
                </span>
              </li>
            </ul>
          </article>
          <article className="skills--list skills--list-2">
            <h4 className="skills--list--title">software</h4>
            <ul>
              <li className="skills--list--item">
                <span className="skills--list--item__name">
                  Creative Cloud:{" "}
                </span>
                <span className="skills--list--item__details">
                  XD, Photoshop, Illustrator, After Effects
                </span>
              </li>
              <li className="skills--list--item">
                <span className="skills--list--item__name">Development: </span>
                <span className="skills--list--item__details">
                  Postman, Visual Studio, Git
                </span>
              </li>
            </ul>
          </article>
          <article className="skills--list skills--list-3">
            <h4 className="skills--list--title">Techniques (DevOps)</h4>
            <ul>
              <li className="skills--list--item">
                <span className="skills--list--item__name">Hosting</span>
                <span className="skills--list--item__details">
                  Ubuntu 18.04, Digital Ocean, AWS (EC2)
                </span>
              </li>
              <li className="skills--list--item">
                <span className="skills--list--item__name">
                  Communication Protocols
                </span>
                <span className="skills--list--item__details">
                  SSH, SMTP, FTP, HTTPS, HTTP
                </span>
              </li>
              <li className="skills--list--item">
                <span className="skills--list--item__name">
                  Server Management
                </span>
                <span className="skills--list--item__details">
                  SSL certification, process management (pm2), load balancing
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </StyledSection>
  );
}
