import React, { useRef } from 'react';

const Admin = () => {
    const myImg = useRef();
    const onchange = ()=>{
        myImg.current.classList.remove('mehedi')
        myImg.current.classList.add('mehedi-active')
    } 
    return (
        <div>
            <button className='btn btn-success' onClick={onchange}>View Profile</button>
            <img ref={myImg} className='mehedi' src='https://i0.wp.com/freelancermehedi.me/wp-content/uploads/2023/07/Untitled-1-copy.png?w=477&ssl=1'/>
        </div>
    );
};

export default Admin;