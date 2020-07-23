import { useRouter } from "next/router";
import Link from "next/link";
import StyledProject from "./Project.styled";
import { useInView } from "react-intersection-observer";

const Image = (props) => (
  <img
    src="/campaign-builder.jpg"
    alt="Campaign Builder"
    className="project--img"
  />
);

export default function Project(props) {
  const { project } = props;
  const [ref, inView, entry] = useInView({
    threshold: 0.43,
  });

  return (
    <StyledProject className="project" inView={inView} ref={ref}>
      <div className="project--header">
        <h1 className="project--title">{project.title}</h1>
        <h2 className="project--subtitle">{project.subtitle}</h2>
        <p className="project--year">{project.year}</p>
      </div>
      <nav className="project--nav">
        <a
          className="project--nav__demo"
          href={project.siteLink}
          target="_blank"
        >
          demo
        </a>

        <a
          className="project--nav__docs"
          href={project.siteRepo}
          target="_blank"
        >
          docs
        </a>
      </nav>
      <article className="project--img__wrapper">
        <Image />
      </article>
      <article className="project--description">
        <h3 className="project--description__title">Description</h3>
        <p className="project--description__par">{project.description}</p>
      </article>
      <article className="project--details">
        <div className="project--tech">
          <h3 className="project--tech__title">tech</h3>
          <ul className="project--tech__list">
            {project.technologyUsed.map((techItem) => {
              return (
                <li className="project--tech__list--item">
                  <p>{techItem[0]}</p>
                  <p>{techItem[1]}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="project--role">
          <h3 className="project--role__title">roles</h3>
          {project.role.map((role) => (
            <p>{role}</p>
          ))}
        </div>
      </article>
    </StyledProject>
  );
}
