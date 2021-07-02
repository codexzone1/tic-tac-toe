import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {
  maxWidth: '200px',
  margin: '20px auto'
};
const buttonStyle = {
  lineSpacing:'1em',
  alignSelf:'center',
  boxSizing:'border-box',
  backgroundColor:'transparent',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1',
  
  barderRadius:'0.6em',
  borderColor:'yellow',
  bacgroundImage:'linear-gradient(45deg,yellow 50%,transparent 50%)',
  margin:'1em',
  textTransform:'uppercase',
  padding:'8px',
  transition:'background 300ms ease-in-out',
  hover:'bacground-position:0'
}
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = i => {
     const boardCopy = [...board];
     if(winner || boardCopy[i]) return;
     boardCopy[i] = xIsNext ? 'X' : 'O';
     setBoard(boardCopy);
     setXisNext(!xIsNext);
  };

  const jumpTo = step => {
  
  };

  const renderMoves = () =>(
      <button style={buttonStyle} onClick={() => 
        setBoard(Array(9).fill(null))
      }> Start Game
      </button>
  )


  return (
    <>
      <Board squares={board} onClick={handleClick} />
       <div style={styles}>
         <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
         {renderMoves()}
        </div>
    </>
  );
};

export default Game;
