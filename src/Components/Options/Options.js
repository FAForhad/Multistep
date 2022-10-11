import React from 'react';

const Options = ({ option, correctAnswer }) => {
    console.log(correctAnswer)

    return (
        <div>
            <div className='p-5 border border-teal-600 mx-2 my-2 flex justify-between hover:bg-teal-900'>
                {option}
            </div>
        </div>
    );
};

export default Options;