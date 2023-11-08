import React from "react";
import Single from "./Single";

function Data({ data }) {
  return (
    <>
      {
        data.map((item, index)=>{
          return(
            <Single projects={item} key={index}/>
          )
        })
      }
    </>
  );
}

export default Data;

