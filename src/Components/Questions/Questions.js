import React from 'react';

const Questions = ({MainQuestion}) => {
    console.log('this is a', MainQuestion);
    const {id, correctAnswer, question}=MainQuestion;

    return (
        <div>
            <h1>this is a question list {id}</h1>
            <p>{
                MainQuestion.options.map(option=><p>{option}</p>)

                }</p>
        </div>
    );
};

export default Questions;