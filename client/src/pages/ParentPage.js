import { Navigate, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function ParentPage() {

  //Local State
  const [userData, setUserData] = useState({})

  //Basic Variable Assignment
  const isLoggedIn = () => {
    if (userData) {
      return true
    } else {
      return false
    }
  }

  //Hook Assignment
  const navigate = useNavigate();

  //Conditional Render Functions
  const callSidebar = () => {
  }
  const callLogInForm = () => {
    navigate('/login')
  }
  const callSignUpForm = () => {
    navigate('/signup')
  }
  const logOutHandler = () => {
    logOutFetch()
    navigate('/')
    // console.log(userFetch())
  }

  //Fetch Assignments
  const logOutFetch = (e) => {
    fetch('/logout', {
      method: 'DELETE'
    }).then(()=>setUserData(null))
  }
  const userFetch = (e) => {
    fetch('/me').then(r => (r.json())).then(setUserData)
  }
  // .then(r => (console.log(r)))

  return (
    <div className=''>

      <div className='outline outline-2 bg-gray-400 p-2 top-11 grid grid-rows-1 grid-cols-2'>

        <button className='outline outline-2 bg-purple-700 w-6' onClick={callSidebar}>. H</button>

        <div className='grid grid-rows-1 grid-cols-2'>
          {isLoggedIn()
            ? <button className='rounded outline outline-1 outline-black bg-purple-600 font-semibold text-white' onClick={logOutHandler}>LOGOUT</button>
            : <>  <button className='rounded outline outline-1 outline-black bg-blue-600 font-semibold text-white' onClick={callLogInForm}>Log In</button>
              <button className='rounded outline outline-1 outline-black bg-purple-600 font-semibold text-white' onClick={callSignUpForm}>Sign Up</button>  </>
          }
        </div>
      </div>

      <div className='flex'>
        <div><Sidebar /></div>
        <Outlet />
        <div className='width-max'></div>
      </div>

    </div>
  )
}