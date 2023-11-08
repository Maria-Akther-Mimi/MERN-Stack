import React, {useRef} from 'react';

const InputAlert = () => {
  let firstName, lastName = useRef();
  const change = ()=> {
    let fName = firstName.value;
    let lName = lastName.value;

    alert(fName + " "+lName);

  }
  return (
    <div>
        <input ref={(a)=>firstName=a} placeholder='First Name'/>
        <br></br>
        <br></br>
        <input ref={(a)=>lastName=a} placeholder='Last Name'/>
        <br></br>
        <br></br>
        <button onClick={change}>Click</button>

    </div>
  );
};

export default InputAlert;
