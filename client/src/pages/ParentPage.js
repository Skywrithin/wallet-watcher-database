import { Navigate, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function ParentPage() {

  //Local State
  const [userData, setUserData] = useState({})

  //Basic Variable Assignment
  const isLoggedIn = () => {
    console.log('ran')
    if (userFetch()) {
      console.log('truthy')
    } else {
      console.log(userData)
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
    })
  }
  const userFetch = (e) => {
    fetch('/me').then(r => (r.json())).then(r => setUserData(r))
  }
  // .then(r => (console.log(r)))

  return (
    <div className=''>

      <div className='outline outline-2 bg-gray-400 p-2 top-11 grid grid-rows-1 grid-cols-2'>

        <button className='outline outline-2 bg-purple-700 w-6' onClick={callSidebar}>. H</button>

        <div className='grid grid-rows-1 grid-cols-2'>
          {true
            ? <button className='rounded outline outline-1 outline-black bg-purple-600 font-semibold text-white' onClick={logOutHandler}>LOGOUT</button>
            : <>  <button className='rounded outline outline-1 outline-black bg-blue-600 font-semibold text-white' onClick={callLogInForm}>Log In</button>
              <button className='rounded outline outline-1 outline-black bg-purple-600 font-semibold text-white' onClick={callSignUpForm}>Sign Up</button>  </>
          }
        </div>
      </div>

      <div className='flex'>
        <div><Sidebar /></div>
        <Outlet />
        <div className='width-max'>signup</div>
      </div>

    </div>
  )
}