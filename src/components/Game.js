import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {
  width: '200px',
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
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    
    if (winner || squares[i]) return;
    
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Got to move #${move}` : 'Go to start';
      return (
        <li key={move}>
          <button style={buttonStyle} onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
