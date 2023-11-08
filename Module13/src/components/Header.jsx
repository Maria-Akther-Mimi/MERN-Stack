import React from 'react';
import AppNav from './AppNav';

const Header = () => {
const status = false;
if(status){
    return (
        <>
            <h1>You Are Logged Out</h1>
        </>
    )
}else{
    return (
        <AppNav/>
    );
}
};

export default Header;