import React from 'react';
import Single from './Single';

const Data = (props) => {

    const {data} = props;
    return (
        <>
        {
            data.map((service, index)=>{
                return <Single key={index.toString()} product={service} />;
            })
        }

        </>
    );
};

export default Data;


