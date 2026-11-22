import React from 'react'
import { z } from "zod";
import { useForm } from "react-hook-form";
function TestZod() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const from = z.object({
        Name: z.string().min(10, "Min 10 charecters enter").max(20, "max 20 charecters enter"),
    })
    function Submit(params) {
        console.log(params);

    }
    return (
        <div>
            <form >
                <div className='grid items-center place-content-center h-screen grid-cols-2'>
                    <input type="text" placeholder="Name"  {...register("Name")} className="input input-primary" />
                    <input type="text" placeholder="age" {...register("age")} className="input input-primary" />
                    <select defaultValue="Color scheme" {...register("Gender")} className="select select-accent">
                        <option disabled={true} >Select Gender </option>
                        <option value={"Other"}>Other</option>
                        <option value={"male"}>Male</option>
                        <option value={"Female"}>Female</option>
                    </select>
                    <input type="text" placeholder="Mobile No." className="input input-primary" {...register("Mobile_Number")} />
                </div>
                <div>
                    <button type='submit' className="btn btn-error grid-cols-3" onClick={handleSubmit(Submit)}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TestZod