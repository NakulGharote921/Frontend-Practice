import { Email } from '@hugeicons/core-free-icons';
import React, { useState } from 'react'

function MyformH() {
    const [Data, Set_Data] = useState({
        name: "",
        Email: ""
    });
    console.log(Data);
    // function Name_handler(e) {
    //     Set_Data({ ...Data, name: e.target.value })
        
        

    // }
    // function EmailHandler(e) {
    //         Set_Data({ ...Data,Email: e.target.value})
    // }
    // function ClerHandler(){

    //     Set_Data({...Data , name:"", Email:""})


    // }
    function inputHandler(e) {
        Set_Data({})
        
    }
    return (
        <div>
            <div className='border-red-600  justify-center items-center flex h-screen gap-3.5 flex-col'>
                <input type="text" name='name'  value={Data.name}  onChange={Name_handler} placeholder='Enter Name '  />
                <input type="text"   placeholder='Email' value={Data.Email} onChange={EmailHandler}/>
                
            </div>
            <div className='flex-col flex justify-center items-center gap-6'>
                <h1>
                    {Data.name}
                </h1>
                <h2>
                    {Data.Email}
                </h2>
                <button className='bg-amber-300 text-black rounded-3xl ' onClick={ClerHandler}>Clear</button>
            </div>
        </div>
    )
}

export default MyformH