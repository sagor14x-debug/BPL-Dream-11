// import React, { type Dispatch, type SetStateAction } from 'react';
// import type { Iplayer } from '../../assets/types/player';
// import { TbTrash } from 'react-icons/tb';
// import SelectedPlayers from './SelectedPlayers';

// interface ISelectedPlayersCardProps {
//     player: Iplayer;
//     coin: number;
//     setCoin: Dispatch<SetStateAction<number>>; 
//     selectedPlayers: Iplayer[];
//     setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
// }




// const SelectedPlayersCard = ({
//     player,
//     coin,
//     setCoin,
//     selectedPlayers,
//     setSelectedPlayers
// }: ISelectedPlayersCardProps  ) => {

//   const handleRemovePlayer = (player: Iplayer) => { 
//     const restPlayers = selectedPlayers.filter(
//          (selectedPlayer) => selectedPlayer.playerName !== player.playerName
//          );
//         console.log(restPlayers, "restPlayers"); setSelectedPlayers(restPlayers); 
//         const newCoinPrice = coin + player.price;
//         setCoin(newCoinPrice);
//   };
    
//     return (
//           <div className='flex gap-2 justify-between items-center border-2 border-gray-400 rounded-3xl py-2 px-4'>
//                                <div className='flex gap-2'>
//                                    <img src={player.playerimg} alt="" className='h-[60px] w-[60px]' />
//                                    <div>
//                                        <h2 className='font-bold text-2xl'>{player.playerName} </h2>
//                                        <p>{player.playerType} </p>
//                                    </div>
//                                </div>
//                                <span className='text-red-500 font-bold cursor-pointer' onClick={() => handleRemovePlayer(player)} >
//                               <TbTrash />
       
//                                </span>
//                            </div>)
//     );
// };

// export default SelectedPlayersCard;



import React, { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../assets/types/player";
import { TbTrash } from "react-icons/tb";

interface ISelectedPlayersCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayersCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: ISelectedPlayersCardProps) => {

  const handleRemovePlayer = () => {
    const restPlayers = selectedPlayers.filter(
      (selectedPlayer) =>
        selectedPlayer.playerName !== player.playerName
    );

    setSelectedPlayers(restPlayers);

    // Player remove করলে তার price আবার coin এ যোগ হবে
    setCoin(coin + player.price);
  };

  return (
    <div className="flex gap-2 justify-between items-center border-2 border-gray-400 rounded-3xl py-2 px-4">
      
      <div className="flex gap-2">
        <img
          src={player.playerimg}
          alt={player.playerName}
          className="h-15 w-15"
        />

        <div>
          <h2 className="font-bold text-2xl">
            {player.playerName}
          </h2>

          <p>{player.playerType}</p>
        </div>
      </div>

      <span
        className="text-red-500 font-bold cursor-pointer"
        onClick={handleRemovePlayer}
      >
        <TbTrash />
      </span>

    </div>
  );
};

export default SelectedPlayersCard;