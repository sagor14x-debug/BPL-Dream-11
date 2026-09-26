import React from "react";
import type { Iplayer } from "../../assets/types/player";
import { FaUserAlt } from "react-icons/fa";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players }) => {
  // console.log(players, "players from available players");
  return (
    <div className="container grid grid-cols-3 gap-7 mt-6">
      {players.map((player: Iplayer, ind: number) => {
        return (
       <PlayerCard key={ind} player={player}/>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
