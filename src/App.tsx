import Nav from "./components/Nav";
import Banner from "./components/Banner";
import { Suspense } from "react";
import type { Iplayer } from "./types/player";

const playersFetch = async ():Promise<Iplayer> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // console.log(playerPromise);
  const playersPromise = playersFetch();

  return (
    <>
      <Nav />
      <Banner />
    <Suspense fallback = {<h2>Lodaing.......</h2>}>
      <Players playersPromise = {playersPromise} />
    </Suspense>
    </>
  );
}

export default App;
