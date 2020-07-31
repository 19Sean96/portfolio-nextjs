import { gsap } from "gsap/dist/gsap";
import { PixiPlugin } from "gsap/dist/PixiPlugin";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { useEffect, useState, useRef } from "react";
import { SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(PixiPlugin, MorphSVGPlugin, SlowMo, CSSRulePlugin);

console.log(gsap);

const MorphingSVG = (props) => {
  const base = useRef();
  const github = useRef();
  const phone = useRef();
  const blob1 = useRef();
  const blob2 = useRef();
  const blob3 = useRef();
  const blob4 = useRef();

  const [tl, setTl] = useState();

  useEffect(() => {
    setTl(
      gsap
        .timeline({ repeat: -1, smoothChildTiming: true, yoyo: true })
        .to(blob1.current, {
          morphSVG: blob2.current,
          ease: "slow (0.5, 0.4, false)",
          duration: 2.5,
        })
        .to(blob1.current, {
          morphSVG: blob3.current,
          ease: "slow (0.5, 0.4, false)",
          duration: 2.5,
        })
        .to(blob1.current, {
          morphSVG: blob4.current,
          //   rotation: 360,
          ease: "slow (0.5, 0.4, false)",
          duration: 2.5,
        })
    );

    gsap.set(".feather", {
      rotation: 0,
    });

    gsap.timeline({ repeat: -1, smoothChildTiming: true }).to(".feather", {
      rotation: 360,
      duration: 45,
      ease: "none",
    });
  }, []);

  //   useEffect(() => {
  //     tl.resume()
  //   }, [paperclip, github, phone]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-phone-call"
      preserveAspectRatio="xMidYMid meet"

    >
      <path
        d="M41.3 -67.1C55.5 -63.3 70.4 -56.3 79.4 -44.5C88.4 -32.8 91.6 -16.4 88.4 -1.8C85.2 12.8 75.8 25.5 64.6 33.6C53.5 41.6 40.7 45 29.7 45.6C18.6 46.2 9.3 44.1 0.6 43.1C-8.2 42.2 -16.4 42.4 -25.6 40.7C-34.8 39 -45 35.5 -52.7 28.4C-60.5 21.3 -65.7 10.6 -66.7 -0.6C-67.8 -11.8 -64.5 -23.6 -56.1 -29.4C-47.6 -35.2 -33.8 -35 -23.6 -41.1C-13.4 -47.1 -6.7 -59.4 3.4 -65.3C13.5 -71.2 27.1 -70.8 41.3 -67.1Z"
        ref={blob1}
        transform="translate(6 6)"

      />
      <path
        fill="#FF0066"
        d="M38.5 -60C51.7 -59.1 65.3 -52.4 71.7 -41.4C78.2 -30.4 77.4 -15.2 69.8 -4.4C62.2 6.4 47.8 12.9 35.7 14C23.6 15.1 13.7 10.9 8.1 15.1C2.6 19.3 1.3 32 -7.4 44.8C-16 57.5 -32 70.3 -37.9 66.3C-43.9 62.3 -39.9 41.5 -43.1 27.6C-46.4 13.8 -56.9 6.9 -51.9 2.9C-46.9 -1.1 -26.3 -2.2 -22.7 -15.5C-19.1 -28.7 -32.5 -54.1 -31.6 -62C-30.6 -69.9 -15.3 -60.4 -1.3 -58.1C12.7 -55.9 25.4 -60.9 38.5 -60Z"
        ref={blob2}
        style={{ visibility: "hidden", fill: "#FF0066" }}
        transform="translate(100 100)"
      />
      <path
        fill="#FF0066"
        d="M35.2 -69.6C41.2 -57.5 38.7 -39.2 43.3 -26.6C47.9 -14 59.5 -7 66.6 4.1C73.7 15.2 76.3 30.4 71.9 43.2C67.4 56.1 56 66.6 42.9 70.2C29.7 73.8 14.9 70.4 3.4 64.5C-8.1 58.7 -16.2 50.4 -29.3 46.8C-42.5 43.2 -60.6 44.4 -57.8 37.3C-55 30.3 -31.2 15.2 -23.8 4.2C-16.5 -6.7 -25.6 -13.3 -26.2 -16.6C-26.9 -19.9 -19.2 -19.9 -13.4 -32.2C-7.6 -44.4 -3.8 -69 5.4 -78.3C14.6 -87.6 29.1 -81.7 35.2 -69.6Z"
        transform="translate(100 100)"
        ref={blob3}
        style={{ visibility: "hidden", fill: "#FF0066" }}
      />
      <path
        fill="#FF0066"
        d="M36.9 -63.1C51 -55.9 67.7 -52.3 76.4 -42.4C85.2 -32.5 85.9 -16.2 79.4 -3.8C72.8 8.7 59 17.4 47.2 22C35.4 26.6 25.7 27.2 18.2 28.1C10.7 29.1 5.3 30.5 -0.1 30.7C-5.5 30.8 -11 29.7 -25.1 32.5C-39.2 35.3 -62 42.1 -70.7 37.4C-79.5 32.6 -74.2 16.3 -70.6 2.1C-66.9 -12.1 -64.8 -24.1 -59.4 -34.7C-54 -45.2 -45.3 -54.3 -34.8 -63.6C-24.4 -73 -12.2 -82.8 -0.4 -82.1C11.4 -81.5 22.9 -70.4 36.9 -63.1Z"
        transform="translate(100 100)"
        ref={blob4}
        style={{ visibility: "hidden",  fill: "#FF0066" }}
      />
    </svg>
  );
};

const BlobSVG = (props) => {
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#FF0066"
      d="M41.3,-67.1C55.5,-63.3,70.4,-56.3,79.4,-44.5C88.4,-32.8,91.6,-16.4,88.4,-1.8C85.2,12.8,75.8,25.5,64.6,33.6C53.5,41.6,40.7,45,29.7,45.6C18.6,46.2,9.3,44.1,0.6,43.1C-8.2,42.2,-16.4,42.4,-25.6,40.7C-34.8,39,-45,35.5,-52.7,28.4C-60.5,21.3,-65.7,10.6,-66.7,-0.6C-67.8,-11.8,-64.5,-23.6,-56.1,-29.4C-47.6,-35.2,-33.8,-35,-23.6,-41.1C-13.4,-47.1,-6.7,-59.4,3.4,-65.3C13.5,-71.2,27.1,-70.8,41.3,-67.1Z"
      transform="translate(100 100)"
    />
  </svg>;
};

const AttachmentSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-paperclip"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

const GithubSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-github"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const GlobeSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-globe"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const PhoneSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-phone-call"
  >
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export { AttachmentSVG, GithubSVG, GlobeSVG, PhoneSVG, MorphingSVG };
