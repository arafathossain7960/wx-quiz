import React, { useState } from 'react';
import './Questions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import Options from '../Options/Options';
import Toast from '../Toast/Toast';

const Questions = ({MainQuestion, setRightAnswer,setWrongAnswer,wrongAnswer,rightAnswer}) => {
    const [answer, setAnswer]=useState('');
    const [result, setResult]=useState('');
    
    const {id, correctAnswer, question, options}=MainQuestion;

    const currentAnswerHandler=()=>{

        setAnswer(correctAnswer)
    }
    
    const correctAnswerResultHandler =(e)=>{
        const value = e.target.value;
        if(value===correctAnswer){
            const rightAnswerCount = rightAnswer + 1;
         setRightAnswer(rightAnswerCount);
           alert('your answer is correct.')
        
        }else{
            const wrongAnswerCount = wrongAnswer + 1;
            alert(' Your answer is wrong')
          setWrongAnswer(wrongAnswerCount) 
            
        }
        
    }
   
    
    return (
        <div className='border-2 border-red-400 questionsed '>
           


           <div><h1>{answer}</h1></div>
            <h1> {question} <button className='tooltip-visible' value='correctAnswer' onClick={currentAnswerHandler}><FontAwesomeIcon icon={faMapPin} /></button></h1>
           
           {
            options.map(option => <Options
            option={option}
            key={option}
            correctAnswerResultHandler={correctAnswerResultHandler}
            ></Options>)
           }
        </div>
    );
};

export default Questions;