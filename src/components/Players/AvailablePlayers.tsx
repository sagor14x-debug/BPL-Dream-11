import React from "react";
import type { Iplayer } from "../../assets/types/player";
import { FaUserAlt } from "react-icons/fa";

const AvailablePlayers = ({ players }) => {
  console.log(players, "players from available players");
  return (
    <div className="container grid grid-cols-3 gap-4 mt-6">
      {players.map((player: Iplayer) => {
        return <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src= {player.playerimg}
      alt="Shoes" />
  </figure>

  <div className="card-body space-y-3">
    
    <h2 className="card-title"><FaUserAlt />{player.playerName} </h2>
    <div className="flex justify-between gap-4">
      <p>{player.origin} </p>
      <button className="btn">{player.playerType}</button>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      })}
    </div>
  );
};

export default AvailablePlayers;
