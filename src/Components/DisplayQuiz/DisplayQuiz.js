import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './DisplayQuiz.css';

const DisplayQuiz = () => {
    const quizDetails = useLoaderData().data;
    const [rightAnswer, setRightAnswer]=useState(0);
    const [wrongAnswer, setWrongAnswer]=useState(0); 


  
        
        const questions = quizDetails.questions;
       
    return (
        <div className=' text-center'>
            <h4 className='text-3xl text-blue-400 my-4 bolded '> Quiz name : {quizDetails.name} </h4>
            <h1 className='text-lg'>Right answer : {rightAnswer}</h1>
            <h1 className='text-lg'>Wrong answer : {wrongAnswer}</h1>
            {
                questions.map(question=><Questions 
               MainQuestion={question}
                key={question.id}
               setRightAnswer={setRightAnswer}
               setWrongAnswer={setWrongAnswer}
               wrongAnswer={wrongAnswer}
               rightAnswer={rightAnswer}
                ></Questions>)
            }
        </div>
    );
};

export default DisplayQuiz;