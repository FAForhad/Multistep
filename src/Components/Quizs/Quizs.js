import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizs = () => {
    const quizs = useLoaderData()
    const { logo, name, questions } = quizs.data
    return (
        <div>
            <div className="mockup-window border border-base-300">
                <div className="flex justify-center px-4 lg:py-16 border-t border-teal-300">
                    <div className="card w-full bg-teal-800 shadow-xl image-full">
                        <figure><img src={logo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl md:text-5xl lg:text-8xl">{name}</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    questions.map(quizQuestion => <Question key={quizQuestion.id} quizQuestion={quizQuestion}></Question>)
                }
            </div>
        </div>
    );
};

export default Quizs;