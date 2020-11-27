import React, {useState, useEffect} from "react";
import { getData, getBeers } from "./components/Rest";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Counter from"./components/Counter";
import Queue from "./components/Queue";
import './App.scss';

function App() {
  const [data, setData] = useState({});
  const [beers, setBeers] = useState({});

  useEffect(() => {
    getData(setData);
   getBeers(setBeers);

   setInterval(() => {
     getData(setData);
   }, 10000);
      getData(setData);
  }, []); 


  return (
    <div className="App">
      {data.queue && <Queue data={data}/>}
      {/* { data.bar && <Main data={data}/>} */}
      {data.bar && beers[0] && <Main data={data} beers={beers} />}
      <Counter/>
      {!data.bar && <Loader />}
     
    </div>
  );
}

export default App;
