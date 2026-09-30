import Nav from "./components/Nav";
import Banner from "./components/Banner";
import { Suspense, useState } from "react";
import Players from "./components/Players/players";
import type { Iplayer } from "./assets/types/player";
// import type { Iplayer } from "./types/player";
// import Players from "./components/players/Players";


const playersFetch = async ():Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const playersPromise = playersFetch();

  const [coin, setCoin] = useState(1500);


  return (
    <>
      <Nav coin={coin}/>
      <Banner />
    <Suspense fallback = {<h2>Lodaing.......</h2>}>
      <Players playersPromise = {playersPromise} coin = {coin} setCoin = {setCoin} />
    </Suspense>
    </>
  );
}

export default App;
