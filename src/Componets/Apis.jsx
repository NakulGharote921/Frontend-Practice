import axios from 'axios'

import React, { useState } from 'react'

function Apis() {
  // async function Data() {
  // const Response =  await fetch("https://jsonplaceholder.typicode.com/users");
  // const JSON = await Response.json();
  // console.log(JSON);
  const [AddUser, AddUser_F] = useState(
    {
      Name: String,
      age: Number,
      Phone: Number,
      Alive: false
    }
  );
  const [UserDetil, Set_User] = useState([]);
  const config = {
    url: "https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS"
  }
  async function FetchData() {
    const Response = await axios(config)
    Set_User(Response.data)
  }
  async function Post_Data() {
    const Response = await axios({
      url: "https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS",

      method: "post",
      data: {
        Name: "Nakul",
        age: "54",
        Phone: 89,
        Username: "Test_User2222222222222222",
      }
    }

    )
    // console.log(Response.data);

  }
  async function FillingData(e) {
    const {name , value , type , checked} = e.target;
    console.log(`${value} \n ${checked}`);



  }
  return (
    <div>
      <div className='h-screen flex justify-center items-center flex-col gap-4'>
        <h1>
          Nakul Good Evneing
        </h1>
        <button type='button' className='cursor-pointer' onClick={FetchData}>fachData</button>
        <button type="button" onClick={Post_Data} className='cursor-pointer'>New Data</button>
      </div>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          name="Name"
          
          onChange={FillingData}
        />
        <input type="number"
          placeholder='age'
          name='age'

          onChange={FillingData} />
        <input
          type="number"
          placeholder='phone'
          name="Phone"
          className='mr-5'
          onChange={FillingData} />


      </div>
      <div>
        {UserDetil.map((Render_Data) => {
          return (

            <div className=' justify-center-safe   items-center text-xl text-black gap-3.5 bg-emerald-400 rounded-2xl  flex' key={Render_Data.Name}>
              <p className=''> ID:
                {Render_Data.id}
              </p>
              <p>

                {Render_Data.Name}
              </p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Apis