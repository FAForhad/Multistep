import React from 'react';


const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/thoughtful-young-woman-with-question-mark_1134-622.jpg?w=1380&t=st=1665419356~exp=1665419956~hmac=7683a66a9a7ab10c2cfe5a66187d3f75189801a80f87914012b4845fe0d552f9")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 lg:text-7xl md:text-5xl text-4xl text-green-500 font-bold">Option's Describes Your Activity</h1>
                        <p className="mb-5 text-lg">The effect of this system of learning is to teach students that the best answer is in someone else brain.Experiential education, and project-based learning to provide opportunity to look for the right answer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;