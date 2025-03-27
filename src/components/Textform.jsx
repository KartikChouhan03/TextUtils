import React, {useState} from 'react';
import  './Textform.css';

export default function Textform(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        settext(newText);
    }
    const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        settext(newText);
    }
    const handleClearClick = ()=>{
        let newText = "";
        settext(newText);
    }
    const handleSpeakClick = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleCopy =() =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }  
    const handleExtraSpace =() =>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
    }

    const handleOnChange= (event) =>{
        settext(event.target.value);
    }
    const [text, settext] = useState('');
    
    return (
        <>
        <div >
            <div className="container mb-3 " style={{color:props.mode === 'dark'? 'white' :'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'? '#4B4E53' :'white' , color: props.mode === 'dark'? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >
                Covert to Uppercase
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handlelowClick} >
                Covert to lowercase
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >
                Clear text
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleSpeakClick}>
            Speak 
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
            Copy Text
            </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>
            Remove Extra Space
            </button>
        </div>
        <div className='container my-4' style={{color:props.mode === 'dark'? 'white' :'black' }} >
            <h3>Your Text Summary</h3>
            <p>{text.length} words and {text.split(" ").length} characters</p>
            <p>{0.008 * text.split(" ").length } minutes read</p>
        </div>
        </>
    )
}
