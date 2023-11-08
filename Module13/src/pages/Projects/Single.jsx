import React from 'react';

const Single = ({projects}) => {
    const {title, description} = projects;
    return (
        <div class="col-md-4">
            <div class="card mb-4">
                        <img src="https://i0.wp.com/freelancermehedi.me/wp-content/uploads/2022/08/Design-2.jpg?resize=640%2C427&ssl=1" class="card-img-top" alt="Project 1"/>
                        <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        </div>
             </div>
             </div>
    );
};

export default Single;