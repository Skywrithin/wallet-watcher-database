// This component is called by the "Log In" Button and allows the user to post to an account to the database and save the cookie as session

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LogInForm({setUser}) {

  //Local State
  const initialFormState = { username: "", password: ""}
  const [formState, setFormState] = useState(initialFormState)


  //Hooks Assignment
  const navigate = useNavigate();


  //Handler Assignments
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState(formState => ({...formState, [name]: value}))
  }
  const logInHandler = (e) => {
    e.preventDefault()
    logInFetch()
    setFormState(initialFormState)
    navigate('/')
  }


  //Fetch Assignment
  const logInFetch = () => {
    fetch('/login', {
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

      <form className="w-96 p-4" onSubmit={logInHandler}>
        <div className="p-3 bg-white w-64 rounded">
          <p className="text-xl text-blue-700">Log in</p>
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

          <button className="rounded-xl mt-4 m-1 p-1 text-lg w-48" type="submit">Continue</button>
        </div>
      </form>

    </div>
  )
}