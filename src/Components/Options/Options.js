import React from 'react';

const Options = ({option, correctAnswerResultHandler  }) => {
    return (
        <div>
        
            <input className='mb-2 text-center p-2 rounded bg-blue-100 hover:bg-white hover:text-blue-900' onClick={correctAnswerResultHandler}value={option} />
        </div>
    );
};

export default Options;