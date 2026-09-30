import React, { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../assets/types/player";
// import { FaUserAlt } from "react-icons/fa";
import PlayerCard from "./PlayerCard";

interface IAvailableProps {
  players: Iplayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>; 
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}


const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: IAvailableProps) => {
  // console.log(players, "players from available players");
  return (
    <div className="grid grid-cols-3 gap-3 mt-6">
      {players.map((player: Iplayer, ind: number) => {
        return (
       <PlayerCard key={ind} player={player} coin={coin} setCoin = {setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;




// import React, { type Dispatch, type SetStateAction } from "react";
// import type { Iplayer } from "../../assets/types/player";
// import PlayerCard from "./PlayerCard";

// interface IAvailableProps {
//   players: Iplayer[];
//   coin: number;
//   setCoin: Dispatch<SetStateAction<number>>;
//   selectedPlayers: object[];
//   setSelectedPlayers: Dispatch<SetStateAction<object[]>>;
// }

// const AvailablePlayers = ({
//   players,
//   coin,
//   setCoin,
//   selectedPlayers,
//   setSelectedPlayers,
// }: IAvailableProps) => {
//   return (
//     <div className="grid grid-cols-3 gap-3 mt-6">
//       {players.map((player: Iplayer, ind: number) => {
//         return (
//           <PlayerCard
//             key={ind}
//             player={player}
//             coin={coin}
//             setCoin={setCoin}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default AvailablePlayers;