// This component is called by the "Sign Up" Button and allows the user to post an account to the database and automatically login

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUpForm({ setUser }) {

  //Local State
  const initialFormState = { username: "", password: "", password_confirmation: "" }
  const [formState, setFormState] = useState(initialFormState)


  //Hook Assignment
  const navigate = useNavigate();


  //Handler Assignments
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState(formState => ({ ...formState, [name]: value }))
  }
  const SignInHandler = (e) => {
    e.preventDefault()
    signUnFetch()
    setFormState(initialFormState)
    navigate('/')
  }


  //Fetch Assignment
  const signUnFetch = () => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formState.username,
        password: formState.password,
        password_confirmation: formState.password_confirmation
      }),
    }).then((r) => r.json()).then(console.log)
  }


  return (
    <div className="w-1/5 min-w-min min-h-min bg-white m-3 flex rounded outline outline-1 z-20 absolute left-1/2 -translate-x-1/2">
      <div className="w-32 bg-blue-700"></div>

      <form className="w-96 p-4" onSubmit={SignInHandler}>
        <div className="p-3 bg-white w-64 rounded">
          <p className="text-xl text-blue-700">Sign Up</p>
        </div>
        <div className="mt-11">
          <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
            type="text"
            value={formState.username}
            placeholder=" username"
            name="username"
            onChange={handleInput}
          />
          <input
            className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
            type="text"
            value={formState.password}
            placeholder=" Password"
            name="password"
            onChange={handleInput}
          />
          <input
            className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
            type="text"
            value={formState.password_confirmation}
            placeholder=" Confirm Password"
            name="password_confirmation"
            onChange={handleInput}
          />
          <button className="rounded-xl mt-4 m-1 p-1 text-lg w-48" type="submit">Continue</button>
        </div>
      </form>

    </div>
  )
}