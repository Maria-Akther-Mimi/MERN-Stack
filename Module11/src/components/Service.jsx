import React from 'react';

const Service = () => {
    return (
        <div>
            <div class="container-fluid bg-light py-5">
            <div class="container">
                <h2 class="text-center">Our Services</h2>
                <hr></hr>
                <div class="row text-center">
                <div class="col-md-4">
                    <div class="service-block">
                    <i class="fas fa-cogs fa-3x text-primary"></i>
                    <h3>Web Design</h3>
                    <p>Our web design services include responsive and user-friendly designs tailored to your business needs. We focus on creating a seamless user experience.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-block">
                    <i class="fas fa-chart-bar fa-3x text-primary"></i>
                    <h3>Digital Marketing</h3>
                    <p>Maximize your online presence with our digital marketing strategies. We help you reach your target audience and achieve your business goals.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-block">
                    <i class="fas fa-users fa-3x text-primary"></i>
                    <h3>Social Media Management</h3>
                    <p>We handle your social media accounts, creating engaging content, and interacting with your followers to boost your online presence and customer engagement.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;