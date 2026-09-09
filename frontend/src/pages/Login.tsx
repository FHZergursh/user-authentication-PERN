import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { User } from '../types/user'

interface LoginProps {
  set: React.Dispatch<React.SetStateAction<User>>
}

const Login = (props : LoginProps) => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e : React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      console.log("submit")
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      console.log(res)
      props.set(res.data) //setUser from app.tsxs
      navigate('/')
      

    } catch (error) {
      console.log(error)
      setError("Invalid email or password")
    }
  }


  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form className='bg-white p-6 rounded shadow-md'  onSubmit={handleSubmit}>
        <h2 className='text-xl mb-4'>Login</h2>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <input type='email' placeholder='email' className='border p-w w-full mb-3 pl-2' 
        value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
        <input type='password' placeholder='password' className='border p-w w-full mb-3 pl-2' 
        value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
        <button className='bg-blue-500 text-white p-2 w-full' type='submit'>Login</button>
      </form>
      

    </div>
  )
}

export default Login