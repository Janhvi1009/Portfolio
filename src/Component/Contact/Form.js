import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

let {register,handleSubmit,formState:{errors}, reset}=useForm()

const getData=(data)=>{
  axios.post("https://portfolio-763bb-default-rtdb.firebaseio.com/contact.json/",data)
  console.log(data);
  reset();
}

  return (
    <>
      <h1>Contact Us</h1>
      <form data-aos="flip-left" data-aos-easing='ease-out-cubic' data-aos-duration='2000' action="" onSubmit={handleSubmit((data)=>getData(data))}>
        <input {...register("fullname",{required:"name is required"})} name='fullname' type="text" className='form-control' placeholder='Enter Name' />
        <p className='text-danger'>{errors.fullname?.message}</p>
        <input {...register("mail",{required:"email is required"})} name='mail' type="email" className='form-control'  placeholder='Enter Email' />
        <p className='text-danger'>{errors.mail?.message}</p>
        <textarea {...register("query",{required:"message is required"})} name="query"  className='form-control' id="" cols="30" rows="3" placeholder='Any Query'></textarea>
        <p className='text-danger'>{errors.query?.message}</p>
        <br />
        <input className='btn btn-success' type="submit" />
      </form>
    </>
  )
}

export default Form