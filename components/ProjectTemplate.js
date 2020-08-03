import { useRouter } from "next/router";
import Link from "next/link";
import { StyledProject } from "./StyledComponents";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
const Image = (props) => (
  <img src={props.src} alt={props.alt} className="project--img" />
);

const Video = (props) => {
  return (
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      className="project--vid"
    >
      <source src={props.webm} type="video/webm" />
      <source src={props.mp4} type="video/mp4" />
    </video>
  );
};

const handleMouseIn = (e, bg) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.backgroundColor = "rgb(120,120,120)";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(4.45)";
  cursorInner.style.backgroundColor = bg;
  cursorInner.style.borderColor = bg;

  const cursor2 = document.querySelector(".cursor-2");
  cursor2.style.backgroundColor = "rgba(25,70,55,.5)";
};

const handleMouseOut = (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.backgroundColor = "#111";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(.2)";
  cursorInner.style.backgroundColor = "rgba(255,255,255,0)";
  cursorInner.style.borderColor = "#111";

  const cursor2 = document.querySelector(".cursor-2");
  cursor2.style.backgroundColor = "#111";
};

export default function Project(props) {
  const { project } = props;
  const { height, width } = props.dimensions;
  const [threshold, setThreshold] = useState(0);

  const [ref, inView, entry] = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    let pageHeight = 0;

    if (entry) pageHeight = entry.boundingClientRect.height;

    setThreshold(
      height < pageHeight / 2 ? 0.125 : height < pageHeight ? 0.2 : 0.4
    );
  }, [props.dimensions, entry]);

  return (
    <StyledProject
      className="project"
      inView={inView}
      ref={ref}
      key={props.index}
    >
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
          onMouseOver={e => handleMouseIn(e, "#7bd")}
          onMouseOut={handleMouseOut}
        >
          demo
        </a>

        <a
          className="project--nav__docs"
          href={project.siteRepo}
          target="_blank"
          onMouseOver={e => handleMouseIn(e, "#7d7")}
          onMouseOut={handleMouseOut}
        >
          docs
        </a>
      </nav>
      <article className="project--img__wrapper">
        {project.media.type === "image" ? (
          <Image src={project.media.src[0]} alt={project.media.alt} />
        ) : (
          <Video webm={project.media.src[0]} mp4={project.media.src[1]} />
        )}
      </article>
      <article className="project--description">
        <h3 className="project--description__title">Description</h3>
        <p className="project--description__par">{project.description}</p>
      </article>
      <article className="project--details">
        <div className="project--tech">
          <h3 className="project--tech__title">tech</h3>
          <ul className="project--tech__list">
            {project.technologyUsed.map((techItem, i) => {
              return (
                <li className="project--tech__list--item" key={i}>
                  <p>{techItem[0]}</p>
                  <p>{techItem[1]}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="project--role">
          <h3 className="project--role__title">roles</h3>
          {project.role.map((role, i) => (
            <p key={i}>{role}</p>
          ))}
        </div>
      </article>
    </StyledProject>
  );
}
