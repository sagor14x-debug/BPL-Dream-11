import React, { use } from 'react';

const players = ({playersPromise}) => {
    // console.log(playersPromise);
    const players = use(playersPromise);
    console.log(players, "players");
    return (
        <div>
            
        </div>
    );
};

export default players;