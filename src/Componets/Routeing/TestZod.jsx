import React from 'react'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
const form = z.object({
        Name: z.string().min(10, "Min 10 charecters enter").max(20, "max 20 charecters enter"),
        age : z.coerce.number().min(17,"Your not Eligable for Vote").max(60,"Your Not eligble for Vote"),
        Mobile_No : z.coerce.string().length(10,"Mobile number must be exactly 10 digits").regex(/^[6-9]\d{9}$/, "Enter a valid mobile number")
    })
function TestZod() {
    const { register, handleSubmit, formState: {errors} } = useForm({
            resolver : zodResolver(form)
    });
    
    function Submit(params) {
        console.log(params);

    }
    return (
        <div>
            <form >
                <div className='grid items-center place-items-center  h-screen grid-cols-1'>
                    <input type="text" placeholder="Name"  {...register("Name")} className="input input-primary" />
                    {errors.Name?.message}
                    <input type="text" placeholder="age" {...register("age")} className="input input-primary" />
                    {errors.age?.message}
                    <select defaultValue="Color scheme" {...register("Gender")} className="select select-accent">
                        <option disabled={true} >Select Gender </option>
                        <option value={"Other"}>Other</option>
                        <option value={"male"}>Male</option>
                        <option value={"Female"}>Female</option>
                    </select>
                    <input type="number" maxLength={10} placeholder="Mobile No." className="input input-primary" {...register("Mobile_Number")} />
                    {errors.Mobile_No?.message}
                </div>
                <div>
                    <button type='submit' className="btn btn-error grid-cols-3" onClick={handleSubmit(Submit)}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TestZod