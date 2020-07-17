import Link from "next/link";

export default function Menu() {
  return (
    <nav className="nav">
      <div className="nav--box">
        <Link as="/about" href="/about">
          <a className="nav--link">about</a>
        </Link>
        <Link as="/skills" href="/skills">
          <a className="nav--link">skills</a>
        </Link>
        <Link as="/projects" href="/projects">
          <a className="nav--link">projects</a>
        </Link>
        <Link as="/contact" href="/contact">
          <a className="nav--link">contact</a>
        </Link>
      </div>
    </nav>
  );
}
