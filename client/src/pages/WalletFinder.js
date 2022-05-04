import Sidebar from "../components/Sidebar"
import ContentPreview1 from "../components/ContentPreview1"
import { useState } from "react";

function Home() {
  const initialFormState = { 'wallet-address': ""}
  const [formState, setFormState] = useState()


  //Fetch Assignments
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState(formState => ({ ...formState, [name]: value }))
  }


  return (
    <div className="flex justify-center rounded bg-gray-100 p-2  outline outline-1 ">
      <div className="Large Wallets bg-gray-400 rounded min-w-min w-64 m-4 p-1">
        <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
          type="text"
          value={null}
          placeholder=" Wallet Address"
          name="wallet-address"
          onChange={handleInput}
        />
        <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
          type="text"
          value={null}
          placeholder=" sadness"
          name="username"
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

export default Home