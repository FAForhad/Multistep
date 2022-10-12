import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Swal from 'sweetalert2';
import Options from '../Options/Options';

const Question = ({ quizQuestion }) => {
    const { id, options, question, correctAnswer } = quizQuestion;
    function showCorrect() {
        Swal.fire({
            title: 'Answer',
            text: `${correctAnswer}`,
        })
    }
    return (
        <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div className='flex justify-center border border-teal-800 my-8 max-w-screen-lg mx-auto rounded-lg'>
                <div>
                    <div className='flex justify-items-center justify-between mx-8 my-2'>
                        <h1 className='mx-8'>Quiz :{question.replace('</>')}</h1>
                        <EyeIcon onClick={() => showCorrect()} className='h-6 w-6 animate__bounce'></EyeIcon>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 m-4 p-6'>
                        {
                            options.map(option => <Options key={id} option={option} correctAnswer={correctAnswer}></Options>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;