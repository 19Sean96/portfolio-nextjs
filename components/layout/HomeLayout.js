import Head from "next/head";
import Logo from "../svg/Logo";
import Link from "next/link";
const handleMouseIn = (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.backgroundColor = "rgb(255,255,255)";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.borderColor = "rgb(255,255,255)";

  const cursor2 = document.querySelector(".cursor-2");
  cursor2.style.backgroundColor = "rgb(66,66,230)";
};

const handleMouseOut = (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.backgroundColor = "#111";

  const cursorInner = cursor.querySelector(".cursor--inner");
  cursorInner.style.borderColor = "#111";

  const cursor2 = document.querySelector(".cursor-2");
  cursor2.style.backgroundColor = "rgba(66,66,230,0)";
};

export default function MainLayout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Sean Anthony</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />

      <main className="content__WRAPPER">{children}</main>

      <div
        className="menu--toggle"
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
      >
        <Link as="/menu" href="/menu">
          <a>menu</a>
        </Link>
      </div>
    </div>
  );
}
