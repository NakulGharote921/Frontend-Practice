import axios from 'axios'
import React, { useState } from 'react'


function Test() {
    const [Data, Set_GetData] = useState();
    const [Form_Handle , SetForm_Handle]= useState({
        Name : "",
        age : ""
    })    
    console.log(Form_Handle);
    
    async function Get_Data() {
        const Resposns = await axios.get(`https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS`);
        Set_GetData(Resposns.data);

    }
    
    async function Edit(e) {
    
        console.log(e);
        
       const {placeholder , value} =  e.target;
       SetForm_Handle({...Form_Handle, [placeholder]: value});
       
      
      
        
        
    }
    async function Post_Data() {
        const Respons = await axios.post("https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS", Form_Handle);
        Get_Data();

    }
    return (
        <div>
            <div className='grid-cols-4 place-content-around  grid place-items-center '>
                <button className="btn btn-warning" onClick={Get_Data}>Get Data <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    {/*
  Pikaicons: cloud-arrow-download (Duo Stroke), free for personal and commercial use (https://pikaicons.com/free-icons)
  Credit is optional but appreciated: "Icons by Pikaicons" linking to https://pikaicons.com
  License: https://pikaicons.com/license
*/}
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.47 7.08c.01-.04.03-.07.04-.11-.01.04-.03.07-.04.11" opacity=".28" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.51 6.97C7.5 4.64 9.81 3 12.5 3c2.49 0 4.65 1.4 5.74 3.46.24.44.36.66.42.75.1.14.07.1.2.22.07.07.3.22.75.53 1.44.99 2.39 2.66 2.39 4.54 0 1.33-.47 2.55-1.26 3.5M6 9.5c0-.86.17-1.67.47-2.42-.33.8-.49 1.2-.57 1.32-.15.24-.03.11-.24.3-.11.09-.58.39-1.53.97C2.85 10.46 2 11.88 2 13.5c0 .93.28 1.78.76 2.5" opacity=".28" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17.6c-1 1.2-2.15 2.29-3.44 3.23-.34.24-.78.24-1.12 0C10.15 19.89 9 18.8 8 17.6m4-5.37V21" />
                </svg> </button>
                <button className="btn btn-accent" onClick={()=>Post_Data()}>Post</button>
                <button className="btn btn-info">Put</button>
                <button className="btn btn-success">Delete</button>
            </div>
            <div>
                {Data && Data.map((items) => (<div key={items.id} >
                    <div className='grid  items-center place-content-center h-screen'>
                        <p className='shadow-[300px]'>
                            {items.Name}
                        </p>
                        <button className="btn btn-soft btn-secondary" onClick={()=>SetForm_Handle(items)}>Edit</button>
                    </div>

                </div>))}
                <div>
                   <input type="text"  placeholder="Name" value={Form_Handle.Name} className="input input-error" onChange={(e)=>Edit(e)} />
                   <input type="text" placeholder="age" className="input input-success" value={Form_Handle.age} onChange={(e)=>Edit(e)}/>
                </div>
            </div>
        </div>
    )
}

export default Test

