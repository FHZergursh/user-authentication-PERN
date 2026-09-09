import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import type { User } from './types/user';

axios.defaults.withCredentials = true

const App = () => {
  const [user, setUser] = useState<User>({username: "Guest", email: "", password: "", });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me")
        setUser(res.data)
      }
      catch (error) 
      {
        console.log(error)

      }
      finally {
        setLoading(false)
      }
    };
    fetchUser();
  }, [])

  if (loading === true) {
    return <div>loading...</div>
  }

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login set={setUser}/>} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App