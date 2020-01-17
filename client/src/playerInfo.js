import React from 'react';

export const Players = (props) => {
    return (
        <> 
            {props.players.map(player => {
                return(

                    <div key={player.id} className='player' >
                    <div data-testid='player'>
                        <h2>{player.name}</h2>
                        <h3>{player.country}</h3>
                    </div>
                </div>

                )
                
            })}
        </>
    )
}