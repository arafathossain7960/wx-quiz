import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const DisplayQuiz = () => {
    const quizDetails = useLoaderData().data;
    const [rightAnswer, setRightAnswer]=useState(0);
    const [wrongAnswer, setWrongAnswer]=useState(0); 


    
    console.log(quizDetails)
        
        const questions = quizDetails.questions;
    return (
        <div>
            <h4> Quiz name : {quizDetails.name} </h4>
            <h1>Right answer : {rightAnswer}</h1>
            <h1>Wrong answer : {wrongAnswer}</h1>
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