import axios from 'axios'
import React, { useState } from 'react'

function Test() {
    const [Data , Set_GetData] = useState();
    async function Get_Data() {
        const Resposns  = await axios.get(`https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS`);
            Set_GetData(Resposns.data);
         
    }
     console.log(Data);
    
    
    return (
        <div>
            <div className='grid-cols-4 place-content-around  grid place-items-center '>
                <button className="btn btn-warning" onClick={Get_Data}>Get Data</button>
                <button className="btn btn-accent">Post</button>
                <button className="btn btn-info">Put</button>
                <button className="btn btn-success">Delete</button>

            </div>
            <div>
                {Data && Data.map((e)=>(<div key={e.id} >
                    <p>
                        {e.Name}
                    </p>
                </div>))}
            </div>
        </div>
    )
}

export default Test
