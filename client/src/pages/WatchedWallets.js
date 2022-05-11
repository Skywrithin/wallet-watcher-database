import EditWalletCard from "../components/EditWalletCard"
import NewWalletCard from "../components/NewWalletCard"
import { useState, useEffect } from "react"

import WalletCard from "../components/WalletCard"


//Styles
import { PageStyles } from "../hooks/Styles"

export default function WatchedWallets({ currentUser }) {
  return (
      (<div className={PageStyles}>
      <NewWalletCard currentUser={currentUser}/>
      <div className="( Your-Wallets ) bg-gray-100 rounded min-w-min w-64 m-4 p-1">
        <div className="rounded bg-white outline outline-1 text-center p-1 m-1 text-blue-800 font-semibold"> Your Watched Wallets </div>
          {currentUser ?  currentUser.custom_wallets.map( (userWallet)=> { return <WalletCard wallet={userWallet}/> }  ) : null}
        </div>
      </div>)
  )
}