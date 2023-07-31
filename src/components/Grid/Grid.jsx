import React, { useCallback, useState } from "react";
import Card from "../Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isWinner from "../Helpers/CheckWinner";

const Grid = ({ numberOfCards }) => {
  const [turn, setTurn] = useState(false); // false -> X true -> 0
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null)
  const play = useCallback(function playCallback(index) {
    console.log("Move played", index);
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = isWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
      toast(`Congratulation! ${win} won the game`);
    }
    setBoard([...board]);
    setTurn(!turn);
  }, [turn]);
  function reset(){
    setTurn(false)
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null)
  }
  return (
    <div className="h-[80%] md:w-[70%] w-[90%] flex flex-col items-center">
      <h1 className="text-white font-semibold text-3xl text-center">
        Current Turn : {turn ? "O" : "X"}
      </h1>
      <div className="flex h-[70%] md:w-[50%] flex-wrap w-[90%] content-center justify-center items-center">
        {board.map((value, idx) => {
          return <Card gameEnd={winner?true:false} onPlay={play} player={value} key={idx} index={idx} />;
        })}
      </div>
      {winner && (
        <>
          <h1 className="text-2xl text-white">Winner is {winner}</h1>
          <button
            onClick={reset}
            className="text-white bg-green-600 p-1 rounded-md px-2 hover:bg-green-700 mt-5"
          >
            Reload
          </button>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      )}
    </div>
  );
};

export default Grid;
