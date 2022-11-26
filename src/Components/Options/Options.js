import React from 'react';

const Options = ({option, correctAnswerResultHandler  }) => {
    return (
        <div>
        
            <input className='w-100' onClick={correctAnswerResultHandler}value={option} />
        </div>
    );
};

export default Options;