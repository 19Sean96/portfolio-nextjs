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
        style={{ visibility: "hidden", fill: "#FF0066" }}
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

const GithubSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 351.258 342.482"
  >
    <path
      id="github"
      d="M117.487,276.328c0,1.416-1.629,2.549-3.683,2.549-2.337.212-3.966-.921-3.966-2.549,0-1.416,1.629-2.549,3.683-2.549C115.646,273.566,117.487,274.7,117.487,276.328Zm-22.024-3.187c-.5,1.416.921,3.045,3.045,3.47,1.841.708,3.966,0,4.391-1.416s-.921-3.045-3.045-3.683C98.012,271.017,95.959,271.725,95.463,273.141Zm31.3-1.2c-2.054.5-3.47,1.841-3.258,3.47.212,1.416,2.054,2.337,4.178,1.841,2.054-.5,3.47-1.841,3.258-3.258C130.73,272.646,128.818,271.725,126.764,271.938ZM173.363.563C75.138.563,0,75.134,0,173.359,0,251.9,49.431,319.1,120.037,342.756c9.065,1.629,12.252-3.966,12.252-8.569,0-4.391-.212-28.611-.212-43.482,0,0-49.573,10.623-59.983-21.1,0,0-8.073-20.608-19.687-25.919,0,0-16.217-11.118,1.133-10.906a37.382,37.382,0,0,1,27.336,18.271c15.509,27.336,41.5,19.475,51.626,14.8,1.629-11.331,6.232-19.192,11.331-23.866C104.244,237.591,64.3,231.854,64.3,163.727c0-19.475,5.382-29.248,16.713-41.712-1.841-4.6-7.861-23.582,1.841-48.085,14.8-4.6,48.864,19.121,48.864,19.121a167.3,167.3,0,0,1,88.948,0s34.064-23.795,48.865-19.121c9.7,24.574,3.683,43.482,1.841,48.085,11.331,12.535,18.271,22.308,18.271,41.712,0,68.339-41.712,73.792-81.3,78.254,6.515,5.595,12.039,16.217,12.039,32.86,0,23.866-.212,53.4-.212,59.2,0,4.6,3.258,10.2,12.252,8.569C303.243,319.1,351.258,251.9,351.258,173.359,351.258,75.134,271.587.563,173.363.563ZM68.835,244.814c-.921.708-.708,2.337.5,3.683,1.133,1.133,2.762,1.629,3.683.708.921-.708.708-2.337-.5-3.683C71.385,244.389,69.756,243.894,68.835,244.814Zm-7.648-5.736c-.5.921.212,2.054,1.629,2.762a2.107,2.107,0,0,0,3.045-.5c.5-.921-.212-2.054-1.629-2.762C62.816,238.157,61.683,238.37,61.187,239.078Zm22.945,25.211c-1.133.921-.708,3.045.921,4.391,1.629,1.629,3.683,1.841,4.6.708.921-.921.5-3.045-.921-4.391C87.177,263.369,85.053,263.156,84.132,264.289Zm-8.073-10.41c-1.133.708-1.133,2.549,0,4.178s3.045,2.337,3.966,1.629c1.133-.921,1.133-2.762,0-4.391C79.033,253.666,77.192,252.958,76.059,253.879Z"
      transform="translate(0 -0.563)"
    />
  </svg>
)

const LinkedInSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 354.27 354.262"
  >
    <path
      id="linked-in"
      d="M79.3,354.263H5.852V117.74H79.3ZM42.536,85.476C19.05,85.476,0,66.023,0,42.537a42.536,42.536,0,1,1,85.072,0C85.072,66.023,66.014,85.476,42.536,85.476ZM354.191,354.263H280.9V239.125c0-27.44-.554-62.63-38.187-62.63-38.187,0-44.039,29.812-44.039,60.653V354.263H125.307V117.74H195.75V150h1.028c9.806-18.583,33.758-38.195,69.494-38.195,74.333,0,88,48.949,88,112.528V354.263Z"
      transform="translate(0 -0.001)"
    />
  </svg>
)

export { MorphingSVG, GithubSVG, LinkedInSVG };
