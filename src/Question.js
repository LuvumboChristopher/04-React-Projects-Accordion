import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info}) => {
  const [display, setDisplay] = useState(false)
  
  const toggleText = () => {
    setDisplay(!display)
  }

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => toggleText()}>
          {display ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {display && <p>{info}</p>}
    </article>
  )
}

export default Question;
