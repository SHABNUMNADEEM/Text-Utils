import React,{useState} from 'react'
export default function Textform(props) {
    const handleupcase = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Mode has been enabled","UpperCase");
    }

    const handlelocase = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase Mode has been enabled","LowerCase");
    }

    const copytext =()=>{
        var copytext=document.getElementById("mybox");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        props.showAlert("CopyText Mode has been enabled","TextCopied");
    }

    const cleartext = ()=>{
        let newText= " ";
        setText(newText);
        props.showAlert("ClearText Mode has been enabled","TextCleared");
    }
    
    const Removeextraspaces= ()=>{
       let newtext= text.replace(/\s+/g,' '); 
       setText(newtext);
       props.showAlert("Extra Space Removed Mode has been enabled","XtraSpaceRemoved");
    }

    const handleonchange=(event)=>{
        
        setText(event.target.value);
    }

    const[text,setText]=useState('');
    
    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
             <h1>{props.heading}</h1>
             <div className="mb-3">
               <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black',cursor:'pointer'}} value={text} onChange={handleonchange} id="mybox" rows="8" ></textarea>
            </div> 
            <button className="btn btn-primary mx-1" onClick={handleupcase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelocase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={cleartext}>Clear the Text</button>
            <button className="btn btn-primary mx-1" onClick={copytext}>Copy the Text</button>
            <button className="btn btn-primary mx-1" onClick={Removeextraspaces}>Remove Extra Spaces</button>
    </div>

    <div className="contianer my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary here</h3>
         <p>{text.split(" ").length-1} words and {text.length} characters</p>
         <p>{0.008*text.split(" ").length-0.008} Minutes to read</p>
         <p>Preview</p>
         <p>{text.length>0?text:"Enter something to preview here!"}</p>
    </div>
    </>
    );
}