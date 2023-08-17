import React, { useState } from 'react';

function EightBall(props) {
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  function chooseAnswer() {
    let randomIdx = Math.floor(Math.random() * props.answers.length);
    let answer = props.answers[randomIdx];
    setMessage(answer.msg);
    setColor(answer.color);
  }

  const ballStyle = {
    width: '25vw',
    height: '25vw',
    borderRadius: '50%',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    textAlign: 'center',
    lineHeight: '1.5',
    padding: '1rem',
  };

  return (
    <div style={ballStyle} onClick={chooseAnswer}>
      {message}
    </div>
  );
}

export default EightBall;
