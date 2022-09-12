import React from "react";
import logo from "./images/assests/logo.svg";
import Calculate from "./components/Calculate";
import Result from "./components/Result";

function App() {
  return (
    <main>
      <header className="main-logo">
        <img src={logo} alt="main-logo" />
      </header>
      <section id="tips-calculator">
        <Calculate />
        <Result />
      </section>
    </main>
  );
}

export default App;
