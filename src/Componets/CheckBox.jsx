import React, { useState } from 'react'

function CheckBox() {
    const [isCheck, setCheck] = useState(false)
    console.log(isCheck);
    return (
        <div>
            <div>
                <div className='h-screen flex justify-center items-center '>
                    <label htmlFor="CheckBox">Team For</label>
                    <input type="checkbox" id='CheckBox' onChange={(e)=>{ setCheck(e.target.checked)}} />

                </div>
            </div>
        </div>
    )
}

export default CheckBox