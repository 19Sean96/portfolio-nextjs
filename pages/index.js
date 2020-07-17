import Landing from "../components/sections/Home/Landing";
import About from "../components/sections/Home/About"
import Skills from "../components/sections/Home/Skills"
export default function Home(props) {

  return (
    <div
      className="container"
    >
      <Landing />
      <About />
      <Skills />
    </div>
  );
}
