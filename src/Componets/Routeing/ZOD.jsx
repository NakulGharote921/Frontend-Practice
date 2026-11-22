import { Password } from '@hugeicons/core-free-icons'
import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
    Name : z.string().min(3,"Minimum Lenght should be 3 ").max(20,"maximum Name Should be 20"),
    age : z.coerce.number().min(3,"minimum length shoud be 10").max(20 ," maximum length should be 20"),
    Password : z.string().min(5 ,"minimum length should be  ").max(10, " maximum length should be 10")
})
function ZOD() {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(FormSchema)
    });
    function Submitform(params) {
        console.log(params);
        
        
    }

    return (
        <div>
            <form >
                
                <button type='submit' onClick={handleSubmit(Submitform)}>Submit</button>
                <div className='grid place-content-center h-screen' >
                    <label htmlFor="Name" >Name : </label>
                    <input type="text"  {...register("Name")} id="Name" />
                    {errors.Name?.message}
                    <label htmlFor="age">age : </label>
                    <input type="text" {...register("age")} id="age " />
                    {errors.age?.message}
                    <label htmlFor="password" >Password : </label>
                    <input type="text" {...register("Password")} id="password" />
                    {errors.Password ?.message}

                </div>
            </form>
        </div>
    )
}

export default ZOD