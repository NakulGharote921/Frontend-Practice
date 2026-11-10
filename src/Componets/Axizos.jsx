import axios from 'axios'
import React, { useState } from 'react'
function Axizos() {
  const [Fetch_Data, Set_FetchData] = useState(null);
  const [Post_data, SetPost] = useState({

    Name: "",
    age: "",
    Phone: "",
  });
  console.log(Post_data);

  function INput_data(e) {
    const { name, value } = e.target;
    SetPost({ ...Post_data, [name]: value });


  }

  async function Get_Data() {
    const Respos = await axios.get("https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS");
    Set_FetchData(Respos.data)
  }
  async function Post_dat() {
    const Response = await axios.post(`https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS`, Post_data);
    Get_Data()


  }
  async function Delete(id) {
    // console.log();

    await axios.delete(`https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS/${id}`);

    Get_Data()

  }
  async function Put(e) {
    // SetPost()
    console.log(e);



  }

  return (
    <div>
      <div className='grid items-center justify-center '>
        <button className="btn btn-primary " onClick={Get_Data} >Get Data <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
          {/*
  Pikaicons: cloud-arrow-download (Duo Stroke), free for personal and commercial use (https://pikaicons.com/free-icons)
  Credit is optional but appreciated: "Icons by Pikaicons" linking to https://pikaicons.com
  License: https://pikaicons.com/license
*/}
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.47 7.08c.01-.04.03-.07.04-.11-.01.04-.03.07-.04.11" opacity=".28" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.51 6.97C7.5 4.64 9.81 3 12.5 3c2.49 0 4.65 1.4 5.74 3.46.24.44.36.66.42.75.1.14.07.1.2.22.07.07.3.22.75.53 1.44.99 2.39 2.66 2.39 4.54 0 1.33-.47 2.55-1.26 3.5M6 9.5c0-.86.17-1.67.47-2.42-.33.8-.49 1.2-.57 1.32-.15.24-.03.11-.24.3-.11.09-.58.39-1.53.97C2.85 10.46 2 11.88 2 13.5c0 .93.28 1.78.76 2.5" opacity=".28" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17.6c-1 1.2-2.15 2.29-3.44 3.23-.34.24-.78.24-1.12 0C10.15 19.89 9 18.8 8 17.6m4-5.37V21" />
        </svg></button>
      </div>
      <div>
        {Fetch_Data && Fetch_Data.map((e) => (<div key={e.id} className=' items-center justify-center flex '>
          <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{e.Name}</h2>
              <div className='flex '>
                <p>id : {e.id}</p>
                <p>
                  Age : {e.age}
                </p>
                <p>
                  Username : {e.Username}
                </p>
              </div>
              <div className="justify-end card-actions">
                <button className="btn btn-primary" onClick={() => {
                  Put(e)
                }}>Edit Now
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    {/*
  Pikaicons: pencil-edit-swoosh (Duo Stroke), free for personal and commercial use (https://pikaicons.com/free-icons)
  Credit is optional but appreciated: "Icons by Pikaicons" linking to https://pikaicons.com
  License: https://pikaicons.com/license
*/}
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c4.02-3.27 4.09 3.36 9-2" opacity=".28" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.07 18.32c.01-.38.01-.57.06-.75.04-.15.1-.3.19-.44.09-.16.22-.29.49-.56L16.86 3.46c.53-.52 1.34-.61 1.97-.21.77.5 1.44 1.18 1.93 1.97.4.65.27 1.47-.26 2L7.53 20.25c-.28.28-.41.42-.58.52-.14.08-.29.15-.46.19-.18.04-.37.04-.76.04H3z" />
                  </svg>
                </button>
                <button className="btn btn-primary" onClick={() => Delete(e.id)
                }>Delete Now
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    {/*
  Pikaicons: delete-dustbin-01 (Duo Stroke), free for personal and commercial use (https://pikaicons.com/free-icons)
  Credit is optional but appreciated: "Icons by Pikaicons" linking to https://pikaicons.com
  License: https://pikaicons.com/license
*/}
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6v9c0 1.86 0 2.8.3 3.53.41.98 1.19 1.76 2.17 2.17.73.3 1.67.3 3.53.3s2.8 0 3.53-.3c.98-.41 1.76-1.19 2.17-2.17.3-.73.3-1.67.3-3.53V6" opacity=".28" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 6-1.11-2.21C14.35 2.69 13.23 2 12 2s-2.35.69-2.89 1.79L8 6M4 6h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>))}
        <div className='flex justify-center flex-col gap-2'>
          <input type="text" placeholder="Name" name="Name" value={Post_data.Name} onChange={(e) => { INput_data(e) }} className="input input-warning" />
          <input type="number" placeholder="age" name='age' value={Post_data.age} onChange={(e) => { INput_data(e) }} className="input input-error" />
          <input type="number" placeholder="Phone" name='Phone' value={Post_data.Phone} onChange={(e) => { INput_data(e) }} className="input input-success" />
        </div>
        <div className='flex justify-center  '>
          <button className="btn btn-neutral" onClick={Post_dat}>Submit
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
              {/*
  Pikaicons: send-plane-horizontal (Duo Stroke), free for personal and commercial use (https://pikaicons.com/free-icons)
  Credit is optional but appreciated: "Icons by Pikaicons" linking to https://pikaicons.com
  License: https://pikaicons.com/license
*/}
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.93 12 3.09 5.73C2.61 4.1 4.14 2.59 5.76 3.1c4.45 1.43 8.7 3.44 12.63 5.97C19.53 9.79 21 10.44 21 12s-1.47 2.21-2.61 2.93c-3.93 2.53-8.18 4.54-12.63 5.97-1.62.51-3.15-1-2.67-2.63z" opacity=".28" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.93 12h4.9" opacity=".28" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.93 12h4.9m8.56-2.93C19.52 9.8 21 10.45 21 12c0 1.56-1.48 2.21-2.61 2.94" />
            </svg>
          </button>

        </div>
      </div>

    </div>
  )
}

export default Axizos
