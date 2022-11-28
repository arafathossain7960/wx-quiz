import React from 'react';
import bannerImg from '../../img/quiz5.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner flex items-center mx-8 my-2'>
              <div className='p-4   '>
           <h1 className='text-4xl py-2'>Welcome to <b className='text-blue-600'>WX-quiz</b></h1>
           <p>Let's check your basic programming knowledge <br /> with some funny questions, it will be varey enjoyable...</p>
           </div>
            <img  src={bannerImg} alt="" />
         
        </div>
    );
};

export default Banner;