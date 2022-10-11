import React from 'react';
import Swal from 'sweetalert2';

const Options = ({ option, correctAnswer }) => {
    console.log(correctAnswer)
    const correctQuiz = event => {
        const value = event.target.innerText;
        if (value === correctAnswer) {
            Swal.fire({
                icon: 'success',
                title: 'Correct...',
                text: `${correctAnswer}`,
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Answer!!!',
            })
        }
    }
    return (
        <div>
            <div onClick={(event) => correctQuiz(event)} className='p-5 border border-teal-600 mx-2 my-2 flex justify-between hover:bg-teal-900'>
                {option}
            </div>
        </div>
    );
};

export default Options;