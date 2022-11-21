import React from 'react';
import { Link } from 'react-router-dom';

const QuizList = ({quiz}) => {
    const {id, name, logo, total}=quiz;
    const startQuizHandler =(id)=>{
        console.log(id)
    }
    return (
        <div>
            <img src={logo} alt="" />
            <h3>Name : {name}</h3>
            <p> Total question:  {total}</p>
            <p> Id:  {total}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4' onClick={()=>startQuizHandler(id)}> Start quiz</button>
            <h1><b><Link to={`/quizId/${id}`}>Start quiz</Link></b></h1>
        </div>
    );
};

export default QuizList;