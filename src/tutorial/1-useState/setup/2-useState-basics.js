import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("Hello, Tunde");
  const handleClick = () => {
    if (text === "Hello, Tunde"){
      setText("Welcome, Tunde")
    } else{
      setText("Hello, Tunde")
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>Click Here</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
