import Link from "next/link";
import Router from "next/router";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import { StyledLandingSection as StyledLanding } from "../components/StyledComponents";

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export default function Home(props) {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0
  })

  const [threshold, setThreshold] = useState(.5)

  useEffect(() => {
    console.log("The entry", entry)
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })

    // setThreshold(() => {
      
    // })
  }, [])

  useEffect(() => {


    const handleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

      console.log(dimensions.height)
      console.log(dimensions.width)

    }, 50)

    window.addEventListener("resize", handleResize)

    return _ => window.removeEventListener("resize", handleResize)
  })

  return (
    <div className="container">
      {formSubmitted && (
        <aside className="submitted">
          your message has been submitted! <br></br>I'll be in touch shortly :)
        </aside>
      )}

      <StyledLanding className="landing page" ref={ref} inView={inView}>
        <h3 className="echo">Hola!</h3>
        <div className="landing--center-stage">
          <div className="big-box">
            <h1 onClick={pushLink}>Hey.</h1>
            <h2>Digital Communicator</h2>
            <h2>Creative Developer</h2>
          </div>
          <Link href="#contact">
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
      </StyledLanding>
      <About dimensions={dimensions}/>
      <Skills dimensions={dimensions}/>
      <Projects dimensions={dimensions}/>
      <Contact setFormSubmitted={setFormSubmitted} formSubmitted={formSubmitted} dimensions={dimensions}/>
    </div>
  );
}

// FUNCTIONALITY

const handleMouseIn = (e) => {
  const cursor = document.querySelector(".cursor");
  // cursor.style.backgroundColor = "rgb(41, 170, 18)";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(1)";
  cursorInner.style.borderColor = "rgb(31, 150, 7)";
};

const handleMouseOut = (e) => {
  const cursor = document.querySelector(".cursor");
  // cursor.style.backgroundColor = "#111";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(.2)";
  cursorInner.style.borderColor = "#111";
};

const pushLink = () => {
  console.log("you clicked hey");
  Router.push("/menu", undefined, { shallow: true });
};
