import React from 'react';
import { Link } from 'react-router-dom';


const QuizTopic = ({ quizTopic }) => {
    const { logo, name, total, id } = quizTopic
    return (
        <div className='p-4 lg:p-8 md:p-8 lg:m-8 md:m-8'>
            <div className="card lg:card-side bg-teal-900 shadow-xl">
                <figure><img src={logo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl font-bold">{name}</h2>
                    <p className='font-bold text-lg'>AVAILABLE QUIZS : {total}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn w-full" to={`/quiz/${id}`}><button>START QUIZZ</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;