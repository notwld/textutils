import React, { useState } from 'react'
import '../App.css';
import TextOutput from './TextOutput';

export default function TextForm() {
    const [text, setText] = useState('Enter Text');
    const updateText = (e) => {
        setText(e.target.value);
    }
    const handleUp = ()=>{
        setText(text.toUpperCase());
    }
    const handleLo = ()=>{
        setText(text.toLowerCase());
    }
    
    const handleClr = ()=>{
        setText('');
    }
    

  return (
    <div className='formContainer'>
        <h1>Enter Text</h1>
            <textarea value = {text} onChange={updateText} name="textBox" id="" cols="30" rows="20"></textarea>
            <div className="btnContainer">
            <button onClick={handleUp}>Uppercase</button>
            <button onClick={handleLo}>Lowercase</button>
            <button onClick={handleClr}>Clear</button>
            <button onClick={()=> navigator.clipboard.writeText(text)}>Copy to Clipboard</button>
            </div>
        <TextOutput text={text}/>
    </div>
  )
}
