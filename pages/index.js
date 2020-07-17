import Landing from "../components/sections/Home/Landing";
import About from "../components/sections/Home/About"
export default function Home(props) {

  return (
    <div
      className="container"
    >
      <Landing />
      <About />
    </div>
  );
}
