import Head from "next/head";
import Logo from "./Logo";
import Link from "next/link";
import { StyledLink } from "./HomeLayout.styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const handleMouseIn = (e) => {
  const cursor = document.querySelector(".cursor");
  // cursor.style.backgroundColor = "rgb(120,120,120)";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(8)";
  cursorInner.style.backgroundColor = "#7bd";
  cursorInner.style.borderColor = "#7bd";

  const cursor2 = document.querySelector(".cursor-2");
  cursor2.style.backgroundColor = "rgba(25,70,55,.5)";
};

const handleMouseOut = (e) => {
  const cursor = document.querySelector(".cursor");
  // cursor.style.backgroundColor = "#111";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.transform = "translate(-50%,-50%) scale(.2)";
  cursorInner.style.backgroundColor = "rgba(255,255,255,0)";
  cursorInner.style.borderColor = "#111";

  const cursor2 = document.querySelector(".cursor-2");
  cursor2.style.backgroundColor = "#111";
};

export default function MainLayout({ children }) {
  const router = useRouter();

  const [sectionActive, setSectionActive] = useState({
    about: false,
    skills: false,
    projects: false,
  });

  useEffect(() => {
    console.log("THIS IS COMING FROM HOME LAYOUT", window);
    if (router.asPath === "/about") {
      setSectionActive({
        about: true,
        skills: false,
        projects: false,
      });
    } else if (router.asPath === "/skills") {
      setSectionActive({
        about: false,
        skills: true,
        projects: false,
      });
    } else if (router.asPath === "/projects") {
      setSectionActive({
        about: false,
        skills: false,
        projects: true,
      });
    }
  }, [router.asPath]);

  return (
    <div className="container">
      <Head>
        <title>Sean Anthony</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />

      <main className="content__WRAPPER">{children}</main>

      <div className="menu--toggle">
        <Link href="#about">
          <StyledLink
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            active={sectionActive.about}
          >
            about
          </StyledLink>
        </Link>
        <Link href="#skills">
          <StyledLink
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            active={sectionActive.skills}
          >
            skills
          </StyledLink>
        </Link>
        <Link href="#projects">
          <StyledLink
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            active={sectionActive.projects}
          >
            projects
          </StyledLink>
        </Link>
      </div>
    </div>
  );
}
