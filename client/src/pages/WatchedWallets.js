import EditWalletCard from "../components/EditWalletCard"
import NewWalletCard from "../components/NewWalletCard"
import { useState, useEffect } from "react"

import WalletCard from "../components/WalletCard"

function WatchedWallets({currentUser}) {
  const [userWallets, setUserWallets] = useState([])

  const userWalletsFetch = (e) => {
    fetch('/custom_wallets', {
      method: 'GET'
    }).then(r=>r.json()).then(r=>(setUserWallets(r)))
  }

  useEffect(() => {
    userWalletsFetch()
    console.log(userWallets)
  }, [])
  

  return (
    <div>
      <NewWalletCard currentUser={currentUser}/>
      {  userWallets.map(  (userWallet)=> { return( <WalletCard wallet={userWallet}/> ) }  )  }
    </div>
  )
}

export default WatchedWallets