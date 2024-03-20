import React,{useState} from 'react';
function Toggle(){
    let [changeText,setChangeText]=useState(true);
    const handleChange =() => {
        return setChangeText(!changeText);
    };
    return(
        <div>
            <h1><center>
                <button onClick={()=> handleChange()}>click me</button>
                <br></br>
                {changeText ?
                "Kochin" : "Wayanad"}
                </center></h1>
        </div>
    );
} 
export default Toggle;