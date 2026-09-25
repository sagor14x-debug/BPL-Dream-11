import React, { use } from "react";
import AvailablePlayers from "./Availableplayers";
import type { Iplayer } from "../../assets/types/player";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  console.log(players, "players");

  return (
    <div className="container mx-auto px-9">
      <div className="flex justify-between gap-7 mb-2">
        <h2 className="font-bold text-xl">Available Plyers</h2>

        <div>
          <button className="btn btn-success">Available</button>
          <button className="btn">Selected</button>
        </div>
      </div>

      <AvailablePlayers players={players} />
    </div>
  );
};

export default Players;




