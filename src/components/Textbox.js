import React, { useState } from 'react';

export default function Textbox(props) {
    const [text, settext] = useState('');
    const uppercase = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("UpperCase converted ", "success");

    }
    const lowercase = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("lowCase converted ", "success");

    }

    const copytext = () => {
        let text = document.getElementById('textbox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard ", "success");

    }

    const cleartext = () => {
        settext('');
        props.showalert("Text removed ", "success");

    }

    
    const handleextraspaces=()=>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(' '));
        props.showalert("Extra Space removed ", "success");
    }

    const handleonchange = (event) => {
        settext(event.target.value);
        console.log('text entered');
    }
    return <div className={`container mt-3 text-${props.mode==='light'?'dark':'light'}`}>

        <div className="mb-3 mt-2">
            <h3>Enter your text here </h3>
            <textarea className="" placeholder={'Enter your text here '} value={text} onChange={handleonchange} id="textbox" style={{backgroundColor: props.mode === 'light'?'white':'lightgray' }} rows="6" cols="70"></textarea>
        </div>
        <button className="btn btn-sm btn-primary mr-2" onClick={uppercase}>upperCase</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={lowercase}>lowerCase</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={copytext}>Copy Text</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={handleextraspaces}>remove extra spaces</button>
        <button className="btn btn-sm btn-primary mx-2" onClick={cleartext}>Clear Text</button>


        <h3 className='mt-2'>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes reading time required</p>
        <h2>preview</h2>
        <p>{text===''?'Enter text in the text Box to preview here':text}</p>
    </div>;
}
