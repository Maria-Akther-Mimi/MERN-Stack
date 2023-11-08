import React from 'react';
import Api from './Api';

const MainPage = () => {
    return (
        <div class="container-fluid bg-light py-5">
            <div class="container">
                <h2 class="text-center">Our Services</h2>
                <hr></hr>
                <div class="row text-center">

                    <Api/>

                </div>
            </div>
        </div>
    );
};

export default MainPage;