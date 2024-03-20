    import React,{useState}from "react";
function ClickCounter(){
            const [counter,setCounter]=useState(0);
            const handleClick1=()=>{
                setCounter(counter+1);
            }
            const handleClick2=()=>{
                if(counter>0){
                   setCounter(counter-1);
                }
            }
            const handleClick3=()=>{
                counter=0;
                setCounter(counter);
            }
       return(
        <div className="App">
        <h1>Counter:{counter}</h1>                                       
        <button className="btn1" onClick={handleClick1}>Increment</button>
        <button className="btn2" onClick={handleClick2}>Decrement</button>
        <button className="btn3" onClick={handleClick3}>Reset</button>
        </div>
       );
}
export default ClickCounter;
