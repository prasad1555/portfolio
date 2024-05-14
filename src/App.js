import "./App.css";
import AnimatedCursor from "react-animated-cursor";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="125, 125, 125"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        outerStyle={{
          border: "2px solid #73c3c3",
          background: "#17b6cb28",
          zIndex: 9999999999999,
        }}
        innerStyle={{
          zIndex: 9999999999999,
          background: "#2b30b8",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        showSystemCursor="true"
      />
      <Header />
      <Home />
      <About />
      <Resume />
    </>
  );
}

export default App;
