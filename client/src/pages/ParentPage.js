import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, Outlet } from 'react-router-dom'

//Icons
// import {  } from 'react-icons/';
import { BsStack } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

//Components
import Sidebar from '../components/Sidebar';


export default function ParentPage({currentUser, setCurrentUser, }) {

  //Sidebar State
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarActive(isSidebarActive => !isSidebarActive)
    console.log('toggled sidebar')
    console.log(isSidebarActive)
  }

  //Hook Assignment
  const navigate = useNavigate();


  //Navigation assignment
  const callLogInForm = () => {
    navigate('/login')
  }
  const callSignUpForm = () => {
    navigate('/signup')
  }
  const logOutHandler = () => {
    logOutFetch()
    navigate('/')
  }


  //Fetch Assignments
  const logOutFetch = (e) => {
    fetch('/logout', {
      method: 'DELETE'
    }).then(() => setCurrentUser(null))
  }
  console.log(BsStack)


  return (
    <div className='bg-gray-300 relative  outline outline-1 '>

      <div className='bg-gray-100 p-2 top-11 w-full sticky h-10 top-0 outline outline-blue-500 z-50 flex grid grid-rows-1 grid-flow-col gap-4 '>

          <button className='outline outline-1 bg-purple-700 text-center w-7 rounded p-1' onClick={toggleSidebar}><BsStack style={{color: "white", fontSize: "1.2em"}}/></button>
          <div className='flex text-justify'>{<FaReact className='m-1' style={{color: "blue"}} />}React-v17.1, React-Router-v6.3, React-Icons{<FaReact className='m-1' style={{color: "blue"}} />}</div>
          <div className='flex text-justify'>{<FaEthereum className='m-1'/>}EtherscanAPI with EthersJS{<FaEthereum className='m-1'/>}</div>
          <div className='flex text-justify'>{<SiTailwindcss className='m-1' style={{color:' #57bfff'}}/>}Tailwind{<SiTailwindcss className='m-1' style={{color:' #57bfff'}}/>}</div>

        <div className='max-w-lg float-right ml-8 justify-self-right'>
          {!currentUser ? (<>
            <button className='rounded outline outline-1 outline-black bg-blue-600 font-semibold text-white -mr-4 w-40' onClick={callLogInForm}>Log In</button>
            <button className='rounded outline outline-1 outline-black bg-purple-600 font-semibold text-white w-32' onClick={callSignUpForm}>Sign Up</button>
          </>)
            :
            <button className='rounded outline outline-1 outline-black bg-purple-600 font-semibold text-white w-24' onClick={logOutHandler}>Logout</button>
          }
        </div>
        <Sidebar isSidebarActive={isSidebarActive} is/>
      </div>

      <Outlet />

    </div>
  )
}