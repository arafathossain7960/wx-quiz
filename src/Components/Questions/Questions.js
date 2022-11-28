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

        setAnswer(`Correct answer: ${correctAnswer}` )
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
        <div className='bg-gray-100 mx-16 my-6 py-6 px-2 shadow-lg shadow-gray-200 '>

         
            <h1 className='text-xl my-4'> {question} <button className='tooltip-visible text-blue-900 text-xl ml-6' value='correctAnswer' onClick={currentAnswerHandler}><FontAwesomeIcon icon={faMapPin} /></button></h1>
            <div> <h1 className='text-blue-500 my-2'> {answer}</h1></div>
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