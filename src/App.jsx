import Background from "./components/shared/Background";
import Navbar from "./components/shared/Navbar";
import Colors from "./components/ui/Colors";
import Hero from "./components/ui/Hero";

function App() {
  return (
    <div className="relative text-white">
      <Background />
      <Navbar />
      <div className="flex justify-center text-center my-32">
        <Hero />
      </div>
      <div className="px-10">
        <Colors />
      </div>
    </div>
  );
}

export default App;
