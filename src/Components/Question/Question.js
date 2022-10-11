import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Options from '../Options/Options';

const Question = ({ quizQuestion }) => {
    const { id, correctAnswer, options, question } = quizQuestion
    console.log(quizQuestion)
    return (
        <div>
            <div className='flex justify-center border border-teal-800 my-8 max-w-screen-lg mx-auto rounded-lg'>
                <div>
                    <div className='flex justify-items-center justify-between mx-8 my-2'>
                        <h1 className='mx-8'>Quiz :{question.split('</p>')}</h1>
                        <EyeIcon className='h-6 w-6'></EyeIcon>
                    </div>
                    <div className='grid grid-cols-2 m-4 p-6'>
                        {
                            options.map(option => <Options key={option.id} option={option} id={id}></Options>)
                        }
                    </div>
                    <p className='text-2xl hidden pb-2'>Correct Answer : <span className='text-yellow-200'> {correctAnswer}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Question;