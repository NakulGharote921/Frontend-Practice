import axios from 'axios'
import React, { useState } from 'react'
function Axizos() {
  const [Fetch_Data, Set_FetchData] = useState(null);
  const [Post_data, SetPost] = useState({
    Name: "",
    age: ""
  });
  async function Get_Data() {
    const Respos = await axios.get("https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS");
    Set_FetchData(Respos.data)
  }
  // async function Post_data() {
  //   const Response = await axios.post(`https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS/1`,{});
  //   console.log(  Response);

  // }
  return (
    <div>
      <div className='grid items-center justify-center '>
        <button className="btn btn-primary " onClick={Get_Data} >Get Data</button>
      </div>
      <div>
        {Fetch_Data && Fetch_Data.map((e) => (<div key={e.id} className=' items-center justify-center flex '>
          <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{e.Name}</h2>
              <div className='flex '>
                <p>Phone : {e.Phone}</p>
                <p>
                  Age : {e.age}
                </p>
              </div>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Edit Now</button>
              </div>
            </div>
          </div>
        </div>))}
          <div className='flex justify-center flex-col gap-2'>
            <input type="text" placeholder="Name" className="input input-warning" />
            <input type="text" placeholder="age" className="input input-error" />
            <input type="text" placeholder="Phone" className="input input-success" />
          </div>
        <div className='flex justify-center  '>
         <button className="btn btn-neutral">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Axizos
