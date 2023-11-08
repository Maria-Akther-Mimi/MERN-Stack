import React from 'react';
import Address from './Address';
import Form from './Form';
const Content = () => {
    return (
        <>
            <div className="container mt-4">
              <div className="row">
                <Address/>
                <div className="col-md-8 contact-form">
                  <h3>Contact Us</h3>
                    <Form/>
                </div>
              </div>
              <br/><br/>
            </div>
        </>
    );
};

export default Content;