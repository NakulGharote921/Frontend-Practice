// import { log } from "node:console";
import { useState } from "react";

function Miniform() {
    const [Data, set_Data] = useState(
        {
            name: "",
            email: "",
            age: 0,
            Mobile: 0,
        });
    console.log(Data);

    function formData_Handler(e) {
        set_Data({...Data, name: e.target.value })
    }


    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="flex-row justify-center items-center " >
                    <input type="text" placeholder="Type here" className=" p-5 input flex input-error" onChange={(e) => {
                        set_Name(e.target.value)
                    }} />
                    <input type="text" placeholder="Type here" className=" p-5 input  flex mt-5 input-error" onChange={(e) => {
                        set_Name(e.target.value)
                    }} />
                    <input type="text" placeholder="Type here" className=" p-5 input flex mt-5  input-error" onChange={(e) => {
                        set_Name(e.target.value)
                    }} />
                    <input type="text" placeholder="Type here" className=" p-5 input  flex mt-5 input-error" onChange={(e) => {
                        set_Name(e.target.value)
                    }} />
                </div>
               
            </div>
             <div className="flex flex-row justify-center ">
                    <h1>
                        {Data.name}
                    </h1>
                    <h2>{Data.email}</h2>
                    <h3>
                        {Data.age}
                    </h3>
                    <h4>
                        {Data.Mobile}
                    </h4>

                </div>
        </div>
    )
}

export default Miniform