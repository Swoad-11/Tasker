import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
