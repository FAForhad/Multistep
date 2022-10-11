import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizs = () => {
    const quizs = useLoaderData()
    console.log(quizs.data)
    return (
        <div>
            <h1>this is quiz</h1>
        </div>
    );
};

export default Quizs;