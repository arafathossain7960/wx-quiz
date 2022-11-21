import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const DisplayQuiz = () => {
    const quizDetails = useLoaderData().data;
    console.log(quizDetails)
    console.log(quizDetails.questions
        )
        const questions = quizDetails.questions;
    return (
        <div>
            <h4>This is  a quiz list details page</h4>
            {
                questions.map(question=><Questions 
               MainQuestion={question}
                key={question.id}
                ></Questions>)
            }
        </div>
    );
};

export default DisplayQuiz;