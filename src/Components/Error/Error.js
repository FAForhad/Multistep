import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-teal-900">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-9xl font-bold">404</h1>
                        <p className="py-6 text-6xl font-bold text-red-600">OOOpS!!</p>
                        <p className='py-6 text-2xl font-bold'>Page Not Found</p>
                        <Link className="btn w-full" to='/'><button>GO TO HOME</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;