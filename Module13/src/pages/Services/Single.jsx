import React from 'react';

const Single = (props) => {

    const {product} = props;
    

    return (
               <div class="col-md-4">
                <style>
                </style>
                    <div class="service-block">
                    <i class="fas fa-users fa-3x text-primary"></i>
                    <h3>{product.title}</h3>
                    <h3>$ {product.price}</h3>
                    <img className="productImage" src={product.images[0]}/>
                    <br/>
                    <br/>
                    <p>{product.description}</p>
                    </div>
                </div>
    );
};

export default Single;