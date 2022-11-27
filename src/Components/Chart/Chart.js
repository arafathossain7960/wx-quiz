import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const Chart = () => {
    const data = useLoaderData().data;
  
    return (
        <div className='text-center mx-auto my-16'>
         <h3>This is a Rechart</h3>
         <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="total" stroke="red" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <XAxis dataKey="name" />
            <XAxis dataKey="name" />
            <YAxis />
         </LineChart>
        </div>
    );
};

export default Chart;