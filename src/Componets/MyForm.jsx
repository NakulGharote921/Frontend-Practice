import React, { useState } from 'react'

function MyForm() {
    const [name , Set_name] = useState();
    const [email , Set_email] = useState();
    console.log(Set_email);
    
  return (
    <div>
        <div className='h-screen flex justify-around items-center'>
                <input type="text" className='border' value={name} onChange={(e)=>{Set_name(e.target.value);
                 }}
            />
            <input type="email" className='border' onChange={(e)=>{Set_email(e.target.value)}}/>
            <h1>{name}</h1>
                <button type="button" className='bg-amber-50 text-black  ' onClick={()=>{console.log(name);
                }}>Submit</button>
                <button type="button" className='border-amber-50' onClick={()=>{Set_name("")}}>Clear</button>
        </div> 
    </div>
  )
}

export default MyForm