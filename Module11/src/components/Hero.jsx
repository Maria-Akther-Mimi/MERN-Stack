import React from 'react';
const Hero = () => {
const city = ["Chittagong", "Dhaka", "Sylhet", "Borishal"];
const age = 148;
let isUserLoggedIn = (status)=>{
    if(status){
        return <button className="btn btn-success text-center">Logout Button!</button>
    }else{
        return <button>Login Button!</button>
    }
}
    return (
        <div>
             {/* JSX Writing Start */}
                    <ul>
                        {
                            city.map((items)=>{
                                return <li>{items}</li>
                            })
                        }
                    </ul>
                    <br></br>
                    {isUserLoggedIn(true)}
                    <br></br>
                    
                    {
                        age>18?(<h1>You are Adult!</h1>):(<h1>You are Child!</h1>)
                    }
            {/* JSX Writing End */}



            <div class="jumbotron jumbotron-fluid text-center bg-primary text-white">
            <div class="container">
                <h1 class="display-4">Welcome to Our Website</h1>
                <p class="lead">Discover our amazing services and products.</p>
                <a href="#" class="btn btn-light btn-lg">Learn More</a>
            </div>
            </div>
        </div>
    );
};

export default Hero;