import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const Chart = () => {
    const data = useLoaderData().data;
  
    return (
        <ResponsiveContainer width='100%' height='100%'>
        <div className='text-center  my-16'>
         <h3>This is a Rechart</h3>
         <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="total" stroke="blue" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <XAxis dataKey="name" />
            <XAxis dataKey="name" />
            <YAxis />
         </LineChart>
        </div>
        </ResponsiveContainer>
    );
};

export default Chart;