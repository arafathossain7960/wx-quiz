import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizList from '../QuizList/QuizList';

const Home = () => {
    const allQuiz = useLoaderData().data;
    console.log(allQuiz)
    return (
        <div>
           {
            
            allQuiz.map(quiz => <QuizList
            quiz={quiz}
            key={quiz.id}
            ></QuizList>)
           }
        </div>
    );
};

export default Home;