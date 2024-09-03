import { useState } from "react";
import './index.css';

export default function App(){

  const [advice, setAdvice] = useState("");

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return(
    <div className="wrapper" >
      <div className="text-area">
        <p className="advice-text" >{advice}</p>
      </div>
      <button className="advice-button" onClick={getAdvice}>Give me advice</button>
    </div>
  )
}