import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const quizTopics = useLoaderData()
    return (
        <div className='bg-teal-800'>
            <Header></Header>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 m-1'>
                {
                    quizTopics.data.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;