import React from 'react';

const Form = () => {
    return (
        <>
                              <form>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <textarea className="form-control"/>
                    <br/>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
        </>
    );
};

export default Form;