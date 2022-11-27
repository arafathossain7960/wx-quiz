import React from 'react';
import { Link } from 'react-router-dom';

const QuizList = ({quiz}) => {
    const {id, name, logo, total}=quiz;
 
    return (
        <div>
            <img src={logo} alt="" />
            <h3>Name : {name}</h3>
            <p> Total question:  {total}</p>
            <p> Id:  {total}</p>
         
            <h1  ><b><Link className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4'  to={`/quizId/${id}`}>Start quiz</Link></b></h1>
        </div>
    );
};

export default QuizList;