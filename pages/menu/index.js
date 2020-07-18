import Link from "next/link";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const handleMouseIn = (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.backgroundColor = "rgb(41, 170, 18)";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(1)";
  cursorInner.style.borderColor = "rgb(31, 150, 7)";
};

const handleMouseOut = (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.backgroundColor = "#111";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(.2)";
  cursorInner.style.borderColor = "#111";
};

const StyledNav = styled.nav`
  .nav--box {
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transition: 0.25s opacity ease-in-out;
  }
`;

export default function Menu() {
  const [ref, inView, entry] = useInView({
    threshold: 0.43,
  });

  return (
    <StyledNav className="nav" inView={inView} ref={ref}>
      <div className="nav--box">
        <Link as="/about" href="/about">
          <a
            className="nav--link"
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            onClick={handleMouseOut}
          >
            about
          </a>
        </Link>
        <Link as="/skills" href="/skills">
          <a
            className="nav--link"
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            onClick={handleMouseOut}
          >
            skills
          </a>
        </Link>
        <Link as="/projects" href="/projects">
          <a
            className="nav--link"
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            onClick={handleMouseOut}
          >
            projects
          </a>
        </Link>
        <Link as="/contact" href="/contact">
          <a
            className="nav--link"
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            onClick={handleMouseOut}
          >
            contact
          </a>
        </Link>
      </div>
    </StyledNav>
  );
}
