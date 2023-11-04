import React from "react";
const Result = ({score,playAgain})=>
(
    <div className="score-board">
        <div className="score">
            You scored {score}/5 correct answers! 
        </div>
        <button className="playbtn" onClick={playAgain}>
            play again!
        </button>
    </div>
);
export default Result;