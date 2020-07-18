import Link from "next/link";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
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

const StyledSection = styled.section`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: 0.25s opacity .15s linear;

  .landing--center-stage {
    transform: translateX(${(props) => (props.inView ? "0%" : "-25%")});
    transition: 0.35s transform ease-out;

    h1 {
      opacity: ${(props) => (props.inView ? 1 : 0)};
      transition: 0.35s opacity .225s ease-in;
    }

    h2 {
      opacity: ${(props) => (props.inView ? 1 : 0)};
      transition: 0.35s opacity .3s ease-out;
    }

    .small-box {
      transform: translateY(${props => props.inView ? "0" : "-50%"});

      &:hover {
        transform: translateY(25%);
      }
    }
  }
`;

export default function Landing(props) {
  const [ref, inView, entry] = useInView({
    threshold: 0.43,
  });
  return (
    <StyledSection className="landing" ref={ref} inView={inView}>
      <h3 className="echo">Holla!</h3>
      <div className="landing--center-stage">
        <div className="big-box">
          <h1>Hey.</h1>
          <h2>Digital Communicator</h2>
          <h2>Creative Developer</h2>
        </div>
        <Link as="/contact" href="/contact">
          <div
            className="small-box"
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            onClick={handleMouseOut}
          >
            <div className="landing--contact-link">get in touch</div>
          </div>
        </Link>
      </div>
    </StyledSection>
  );
}
