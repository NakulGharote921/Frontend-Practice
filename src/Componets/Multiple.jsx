import React, { useState } from 'react'

function Multiple() {
    const [Data, set_Data] = useState({
        Html: false,
        Css: false,
        JS: false,
    }
    );
    console.log(Data);
    
    function Handler(e) {
        const {id, checked} = e.target;
        console.log(id , checked);
        set_Data({...Data,[id] :checked} )
    }

    return (
        <div>
            <div className='h-screen flex justify-center items-center gap-10'>
                <label htmlFor="Html" >html</label>
                <input type="checkbox"  checked={Data.Html} id='Html' onChange={Handler} />
                <label htmlFor="Css"   >CSS</label>
                <input type="checkbox" checked= {Data.Css} onChange={Handler} id='Css' />
                <label htmlFor="JS" >JS</label>
                <input type="checkbox" checked= {Data.JS} onChange={Handler} id='JS' />

            </div>
            <div className='h-screen  flex justify-center items-center flex-col gap-10'>
                <h1>
                    {Data.Html && "Selected Html"}
                </h1>
                <h2>
                    {Data.Css && "Selected Css"}
                </h2>
                <h3>
                    {Data.JS && "Selected JS"}
                </h3>
            </div>
        </div>
    )
}

export default Multiple




