import React, { useState } from 'react'

function MYApitest() {
    const [From_Data , SetData ] = useState({
      Name : "",
      age : "",
      Phone : "",
      Username : "",
      Alive : true
    })
    console.log(From_Data);
    
    function form_DataHandler(e) {
      console.log(e);
      
        const {name , value} = e.target;
       SetData({...From_Data , [name]: value});
        
      
    }
    const [Data , set_Data] = useState(null);
    async function Get_Data() {
        const Respose = await fetch("https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS")
        const Data = await Respose.json();
          
        
        set_Data(Data);   
    }
    async function Post_Data() {
      const Respose  = await fetch("https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS", {
        method:"POST",
        headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify(From_Data)
       
      })
      Get_Data();
      
    }
    async function Edit_data(e) {
      
    }
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-10 px-4">
      {/* Fetch Button */}
      <button 
        type="button" 
        className="cursor-pointer btn btn-dash btn-primary mb-6" 
        onClick={Get_Data}
      >
        Fetch Data
      </button>

      {/* Responsive List Container */}
      <div className="w-full max-w-md space-y-4">
        {Data && Data.map((e, index) => (
          <div key={e.id ?? index} className="card bg-base-100 shadow-md">
            <div className="card-body p-4">
              <span className="text-xs opacity-60 tracking-wide uppercase">
                @{e.Username}
              </span>
              
              <div className="text-lg font-bold">
                {e.Name}
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-xs uppercase font-semibold opacity-60">
                <div>Age: {e.age}</div>
                <div>Phone: {e.Phone}</div>
              </div>
            </div>
            <button className="btn btn-soft btn-accent"onClick={()=>Edit_data(e)} >Edit</button>
            
          </div>
        ))}
      </div>
        <button className="btn btn-soft btn-warning" onClick={Post_Data}>Add New User </button>
        <div >
          <input type="text" placeholder="Name" name='Name' className="input input-error" onChange={(e)=>{form_DataHandler(e)}}/>
          <input type="text" placeholder="Username" name='Username' className="input input-error" onChange={(e)=>{form_DataHandler(e)}}/>
          <input type="text" placeholder="Phone" name='Phone' className="input input-error" onChange={(e)=>{form_DataHandler(e)}}/>
          <input type="text" placeholder="age" name='age' className="input input-error" onChange={(e)=>{form_DataHandler(e)}}/>
          <input type="text" placeholder="Alive" name='Alive' className="input input-error" onChange={(e)=>{form_DataHandler(e)}}/>

        </div>
        
    </div>
  );
}

export default MYApitest;