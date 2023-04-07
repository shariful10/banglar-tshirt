import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);

    return (
        <div>
            <h1>This is Home{tshirts.length}</h1>
        </div>
    );
};

export default Home;