import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../assets/types/player";
import { FaUser } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  //  console.log(isSelected, setIsSelected, "isSelected, setIsSelected");
  console.log(coin, setCoin, "from card");

  const handleSelectPlayer = () => {
    setIsSelected(true);

    const newCoinPrice = coin - player.price;
    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);

      toast.success(`${player.playerName} is purchased succesfully`, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

    } else {
      toast.error("coin is not enough to purchase")
    }

  // Selected players logic: 
   setSelectedPlayers([...selectedPlayers, player]);
  };

  

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 overflow-hidden">
      {/* Player Image */}
      <figure className="bg-base-200 h-64 overflow-hidden">
        <img
          src={player.playerimg}
          alt={player.playerName}
          className="w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body p-5">
        {/* Player Name */}
        <div className="flex items-center gap-2">
          <div className="bg-green-100 text-green-600 p-2 rounded-full">
            <FaUser />
          </div>

          <h2 className="card-title text-xl font-bold">{player.playerName}</h2>
        </div>

        {/* Origin & Player Type */}
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-sm text-gray-500">Origin</p>
            <p className="font-semibold">{player.origin}</p>
          </div>

          <span className="badge badge-success badge-outline">
            {player.playerType}
          </span>
        </div>

        <div className="divider my-2"></div>

        {/* Playing Style */}
        <div>
          <h3 className="font-bold text-lg mb-3">Playing Style</h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-base-200 rounded-lg p-3">
              <p className="text-xs text-gray-500">Batting</p>
              <p className="font-semibold text-sm">{player.battingStyle}</p>
            </div>

            <div className="bg-base-200 rounded-lg p-3">
              <p className="text-xs text-gray-500">Bowling</p>
              <p className="font-semibold text-sm">{player.bowlingStyle}</p>
            </div>
          </div>
        </div>

        <div className="divider my-2"></div>

        {/* Price & Button */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <h2 className="text-2xl font-bold text-green-600">
              ${player.price}
            </h2>
          </div>

          <button
            onClick={() => handleSelectPlayer()}
            className={`btn btn-primary rounded-xl px-5 shadow-md transition-all hover:scale-105`}
            // disabled = {isSelected === true ? true : false}
            // disabled = {isSelected ? true : false}
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
