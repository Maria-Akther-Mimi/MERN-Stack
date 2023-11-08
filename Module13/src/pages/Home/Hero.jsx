import React, {useRef} from 'react';

const Hero = () => {

  const myHeadLine = useRef();

  const change = ()=>{
    myHeadLine.current.innerText = "How are you?"
  }
    return (
        <div>
            <div class="jumbotron jumbotron-fluid text-center bg-primary text-white">
                <div class="container">
                    <h1 ref={myHeadLine} class="display-4"></h1>
                    <button onClick={change}>View Heading by useRef()</button>
                    <p class="lead">Discover our amazing services and products.</p>
                    <a href="#" class="btn btn-light btn-lg">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;