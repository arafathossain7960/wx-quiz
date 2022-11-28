import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import QuizList from '../QuizList/QuizList';

const Home = () => {
    const allQuiz = useLoaderData().data;
   
    return (
        <div>
            <Banner></Banner>
           <div className=''>
           {
            
            allQuiz.map(quiz => <QuizList
            quiz={quiz}
            key={quiz.id}
            ></QuizList>)
           }
           </div>
        </div>
    );
};

export default Home;