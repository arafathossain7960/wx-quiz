import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-100 mx-8 py-10  text-center'>
            <h1 className='text-3xl py-4'>Welcome to my blog </h1>
            <div className='py-2'>
                <h3 className='text-xl bold pb-2 text-blue-400'> What is the purpose of react router ? </h3>
                <p className='text-lg '><b>Ans: </b> Basically react router has solved our routing problem without reload  the page, The react.js provide single page application and the react router handle their page, React router give us so many building hook like <b>loader</b> these hooks create life easy for developers.</p>
                
            </div>
            <div className='py-2'>
                <h3 className='text-xl bold pb-2 text-blue-400'> How does context API works? </h3>
                <p className='text-lg '><b>Ans: </b> Context API is a built-in API in react.js it works like a data tower, It is helped pass data without props drilling, The context API contains components or pages and takes a value, then it passes the value to any of the components that are its content.    </p>
                
            </div>
            
            <div className='py-2'>
                <h3 className='text-xl bold pb-2 text-blue-400'> About useRef hooks </h3>
                <p className='text-lg '><b>Ans: </b> Basically we use useRef hook for form handling in react project. This works because useRef creates a plain JavaScript object. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.   </p>
                
            </div>
            
        </div>
    );
};

export default Blog;