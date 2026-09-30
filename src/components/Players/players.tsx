import React, { use, useState, type Dispatch, type SetStateAction } from "react";
import AvailablePlayers from "./Availableplayers";
import type { Iplayer } from "../../assets/types/player";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>; 
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);
  // console.log(players, "players");

  const [buttonType, setButtonType] = useState<"available" | "selected">("available") //available or selected
  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);

  console.log(buttonType);
  
  const handleUpdateBtnType = (type: "available" | "selected" ) => {
    setButtonType(type)
  }

  return (
    <div className="container mx-auto px-9">
      <div className="flex justify-between gap-7 mb-2">
        <h2 className="font-bold text-xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>

        <div>
          <button
          onClick={() => handleUpdateBtnType("available")}
          className = {`btn ${buttonType === "available" ? "btn-success" : "" } rounded-r-none`}>Available</button>
          <button
          onClick={() => handleUpdateBtnType("selected")}
          className = {`btn ${buttonType === "selected" ? "btn-success" : "" } rounded-r-none`}>Selected</button>
        </div>
      </div>

      {/* {buttonType === "available" ? (<AvailablePlayers players={players} coin={coin} setCoin={setCoin} />): (<SelectedPlayers/>)}
    </div> */}


    {buttonType === "available" ? (
      <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
    ) : (
      <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} />
     )}
    
    </div>

);
};


export default Players;











// import React, {
//   use,
//   useState,
//   type Dispatch,
//   type SetStateAction,
// } from "react";

// import AvailablePlayers from "./Availableplayers";
// import type { Iplayer } from "../../assets/types/player";
// import SelectedPlayers from "./SelectedPlayers";

// interface PlayersProps {
//   playersPromise: Promise<Iplayer[]>;
//   coin: number;
//   setCoin: Dispatch<SetStateAction<number>>;
// }

// const Players = ({
//   playersPromise,
//   coin,
//   setCoin,
// }: PlayersProps) => {
//   const players = use(playersPromise);

//   const [buttonType, setButtonType] = useState<
//     "available" | "selected"
//   >("available");

//   const handleUpdateBtnType = (
//     type: "available" | "selected"
//   ) => {
//     setButtonType(type);
//   };

//   return (
//     <div className="container mx-auto px-9">

//       <div className="flex justify-between gap-7 mb-2">
//         <h2 className="font-bold text-xl">
//           {buttonType === "available"
//             ? "Available Players"
//             : "Selected Players"}
//         </h2>

//         <div>
//           <button
//             onClick={() => handleUpdateBtnType("available")}
//             className={`btn ${
//               buttonType === "available" ? "btn-success" : ""
//             } rounded-r-none`}
//           >
//             Available
//           </button>

//           <button
//             onClick={() => handleUpdateBtnType("selected")}
//             className={`btn ${
//               buttonType === "selected" ? "btn-success" : ""
//             } rounded-r-none`}
//           >
//             Selected
//           </button>
//         </div>
//       </div>

//       {buttonType === "available" ? (
//         <AvailablePlayers
//           players={players}
//           coin={coin}
//           setCoin={setCoin}
//         />
//       ) : (
//         <SelectedPlayers />
//       )}

//     </div>
//   );
// };

// export default Players;



