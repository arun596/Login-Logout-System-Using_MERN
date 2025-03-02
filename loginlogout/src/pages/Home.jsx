import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSuccess } from '../utils';
import {ToastContainer} from 'react-toastify'

function Home() {
    const [loggedInUser , setloggedInUser] = useState('')
    
    const Navigate = useNavigate();

    useEffect(() => {
        setloggedInUser(localStorage.getItem('loggedInUser'))
    },[])


const handleLogout = (e) => {
  localStorage.removeItem('token');
  localStorage.removeItem('loggedInUser');
  handleSuccess('User Loggedout')
  
  setTimeout(()=>{
    Navigate('/login')
  },1000)

}

  return (
    <div>
        <h1>Welcome!</h1>
        <h2>{loggedInUser}</h2>
        <button onClick={handleLogout}>Logout</button>
        <ToastContainer/>
    </div>
  )
}

export default Home