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
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard ", "success");
        // text.getSelection().removeAllRanges();

    }

    const cleartext = () => {
        settext('');
        props.showalert("Text removed ", "success");

    }


    const handleextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(' '));
        props.showalert("Extra Space removed ", "success");
    }

    const handleonchange = (event) => {
        settext(event.target.value);
        console.log('text entered');
    }
    return <div className={`container mt-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>

        <h3>Utilize your text here </h3>
        <div className="mb-3 mt-2 input-group">
            <textarea className="" placeholder={'Enter your text here '} value={text} onChange={handleonchange} id="textbox"  rows="6" cols="70"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-sm btn-primary mr-2 my-2" onClick={uppercase}>upperCase</button>
        <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2 my-2" onClick={lowercase}>lowerCase</button>
        <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2 my-2" onClick={copytext}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2 my-2" onClick={handleextraspaces}>remove extra spaces</button>
        <button disabled={text.length === 0} className="btn btn-sm btn-primary mx-2 my-2" onClick={cleartext}>Clear Text</button>


        <h3 className='mt-2'>Your text summary</h3>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length}  Characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes reading time required</p>
        <h2>preview:</h2>
      
        <div className="mb-3 mt-2 input-group">
            <textarea className="" placeholder={'Nothing to Preview '} value={text} onChange={handleonchange} id="previewtext" rows="6" cols="70"></textarea>
        </div>
    </div>;
}
