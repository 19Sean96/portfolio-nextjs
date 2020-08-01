import Home from "./index";

export default function Success() {
  console.log("form submitted!");
  return (
    <>
    <aside className="submitted">your message has been submitted! I'll be touch shortly :)</aside>
      <Home />
    </>
  );
}
