import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Static = () => {
    const states = useLoaderData()
    const data = states.data
    return (
        <div className=''>
            <div style={{ width: '50%', height: 500 }} className="md:mx-auto lg:mx-auto my-12">
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="total" fill="" stroke="" />
                        <Bar dataKey="total" barSize={20} fill="#00a0a0" />
                        <Line type="monotone" dataKey="total" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Static;