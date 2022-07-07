import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const url = "https://ourmenu-backend.herokuapp.com/data";
function App() {
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get(url)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  let filtered = Object.values(data)?.filter((item) => item.category === category);


  
  return (
    <div className="App">
      <Header />
      <Navbar setCategory={setCategory} data={data} category={category} />
      <Main data={data} filtered={filtered}/>
    </div>
  );
}

export default App;
