import React from 'react';
import { Link } from 'react-router-dom';
import './Quizlist.css';

const QuizList = ({quiz}) => {
    const {id, name, logo, total}=quiz;
 
    return (
        <div className='quizList my-2 bg-blue-100  text-center py-6 px-2'>

        
        <div className='' >
            <img className='img' src={logo} alt="" />
            <h3 className='text-3xl text-blue-400 py-2' >Quiz name : {name}</h3>
            <p className='my-2'> Total  question:  <b>{total}</b></p>
         
         
            <Link className=' my-4 rounded  bg-blue-400 hover:bg-blue-500 text-white py-2 px-4'  to={`/quizId/${id}`}>Start Quiz</Link>
        </div>
        </div>
    );
};

export default QuizList;