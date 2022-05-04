import { Navigate, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

export default function ParentPage() {
  const navigate = useNavigate();
  
  const callSidebar = () => {
  }

  const callLogInForm = () => {
    navigate('/login')
  }

  const callSignUpForm = () => {
    navigate('/signup')
  }

  return (
    <div className=''>

        <div className='outline outline-2 bg-gray-400 p-2 top-11 grid grid-rows-1 grid-cols-2'>
          
            <button className='outline outline-2 bg-purple-700 w-6' onClick={callSidebar}>. H</button>

            <div className='grid grid-rows-1 grid-cols-2'>
                <button className='rounded outline outline-1 outline-black bg-blue-600 font-semibold text-white' onClick={callLogInForm}>Log In</button>
                <button className='rounded outline outline-1 outline-black bg-purple-600 font-semibold text-white' onClick={callSignUpForm}>Sign Up</button>
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