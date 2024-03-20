import React from "react";
import{Data} from'./Data';
import Result from "./Result";
import{useState} from "react";
export default function Quiz(){
    const[currentQuestion]=useState(0);
    const[score,setScore]=useState(0);
    const[clickedOption,setclickedOption]=useState(0);
    const[showResult,setShowResult]=useState(false);
    return(
        const changequestion=()=>{
            update score();
            if(currentQuestion<Data.length-1){
                setCurrentQuestion(currentQuestion+1);
                setclickedOption(0);
            }else{
                setShowResult(true)
            }
        } 
        const updateScore()=>{
            if(clickOption===Data[currentQuestion].answer){
                setScore(score+1);
            }
        }
        const reserAll=()=>{
            setShowResult(false);
            setCurrentQuestion(0);
            setclickedOption(0);
            setScore(0);
        }
        return(
            <div>
                <p className='heading-txt'>Online Quiz</p>
                <div className='container'>
                    {showResult ?(
                        <Result score={score}totalScore={Data.length}tryAgain={resetAll}/>
                    ):(
                        <>
                        <div className='question'>
                        <span id="question-number">
                        {currentQuestion+1}</span>
                        <span id="question-txt">{Data[currentQuestion].question}</span>
                    )}
                </div>
            </div>
        )
    )
}
expport default Quiz;