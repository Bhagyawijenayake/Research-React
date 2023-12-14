import "./App.css";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Numbers from "./components/Numbers";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (await fetch("http://numbersapi.com/1..51")).json();
      // set state when the data received
      setData(Object.entries(data));
    };

    dataFetch();
  }, []);
  return (
    <>
      <Background />
      <Nav />
      <Hero />
      <Numbers data={data} />
      <Footer />
    </>
  );
}

export default App;
