import React, { useState } from 'react';



const Registrationform1 = (props) => { 

     const [name1,setName1]=useState('');

     const handleSubmit=(props)=>{
      setName1("Arun");
      console.log(props);
      console.log("Name is "+name1);
      //console.log(name1);
     }

     function handleSubmit1(){
      console.log("HandleEventRegularFunction");
     }

  return (
    <div>
       <button onClick={()=>handleSubmit('helloarrow')} >  Updat name to Orange </button>
       <div>updated name is {name1}</div>
    </div>       

  )
}


export default Registrationform1
