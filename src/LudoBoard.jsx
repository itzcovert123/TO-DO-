import { useState } from "react";

export default function LudoBoard(){
    const [moves,setMoves] = useState({blue : 0, red : 0, green : 0, yellow : 0});
    
    let updateBlue = () =>{
        setMoves((preMoves) =>{
            return {...preMoves, blue : preMoves.blue + 1};
        });                                                                                                                                                                                                                                                                                                                                 
    };
    let updateYellow = () =>{
        setMoves((preMoves) =>{
            return {...preMoves, yellow : preMoves.yellow + 1};
        });                                                                                                                                                                                                                                                                                                                                 
    };
    let updateRed = () =>{
        setMoves((preMoves) =>{
            return {...preMoves, red : preMoves.red + 1};
        });                                                                                                                                                                                                                                                                                                                                 
    };
    let updateGreen = () =>{
        setMoves((preMoves) =>{
            return {...preMoves, green : preMoves.green + 1};
        });                                                                                                                                                                                                                                                                                                                                 
    };
    return (
        <>
            <p>Game begins !</p>
            <div className="board">
                <p>Blue Moves {moves.blue}</p>
                <button style={{backgrooundColor : "blue"}} onClick={updateBlue}>+1</button>
            </div>
             <div className="board">
                <p>Blue Moves {moves.red}</p>
                <button style={{backgrooundColor : "blue"}} onClick={updateRed}>+1</button>
            </div>
             <div className="board">
                <p>Blue Moves {moves.yellow}</p>
                <button style={{backgrooundColor : "blue"}} onClick={updateYellow}>+1</button>
            </div>
             <div className="board">
                <p>Blue Moves {moves.green}</p>
                <button style={{backgrooundColor : "blue"}} onClick={updateGreen}>+1</button>
            </div>
        </>
    )
}