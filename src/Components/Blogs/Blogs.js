import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="mockup-window border border-base-300">
                <div className="md:flex-wrap lg:flex justify-center m-4 lg:px-4 lg:my-16 lg:py-24 border-t border-base-300">
                    <div className="card min-w-sm max-w-lg p-6 my-2 mx-4 bg-teal-700 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">What is the porpose of react router ?</h2>
                            <p>React Router keeps your UI in sync with the URL, It has a simple API with powerful features like dynamic route matching, React Router switches from server-side to client-side, so when you click on the Link, the app checks the routes and loads the route and jump to the route</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card min-w-sm max-w-lg p-6 my-2 mx-4 bg-teal-700 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">How dose context API works ?</h2>
                            <p>React Context API was introduced to make the state management easier in React applications,Context API is a dependency injection mechanism that allows passing data through the component tree without having to pass props down manually at every level</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card min-w-sm max-w-lg p-6 my-2 mx-4 bg-teal-700 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">About useRef :</h2>
                            <p>useRef is a built-in React Hook.The useRef Hook in React can be used to directly access DOM nodes,useRef can be used to store local mutable value in a component.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;