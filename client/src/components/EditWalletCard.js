//The edit-wallet

//React Imports
import { useState, useEffect } from "react"

//Library Imports
import { ethers } from "ethers";


export default function EditWalletCard({wallet}) {
  const [walletBalance, setWalletBalance] = useState()

  //Styles
  const boldFont = "font-semibold flex"
  const normalFont = "font-normal ml-2"

  //Basic Variable Assignment
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${wallet.wallet_address}&tag=latest&apikey=5JJTINSZ38FFRH9VRUDJXHTNW6W8SF3TFC`
  
  //Fetch Assignment
  const userWalletFetch = () => {
    fetch(url).then(r => r.json()).then(r => {
      if(r.message == "OK"){
        setWalletBalance(r.result)
      } else {
        setTimeout(()=> userWalletFetch(),500)
      }
    })
  }
  const editFormFetch = () => {

  }
  const deleteWalletFetch = () => {

  }

  //On Page Load:
  useEffect(() => {
    // userWalletFetch() (For Development)
  }, [])
  
    return (
      <div className="bg-white outline outline-2 outline-blue-600 rounded m-3 p-1">
      <div className={boldFont} >Alias:   <div className={normalFont} >{wallet? wallet.alias: null}</div> </div>
      <div className={boldFont} >Address: <div className={normalFont} >{wallet? wallet.wallet_address: null}</div> </div>
      <div className={boldFont} >Balance: <div className={normalFont} >{walletBalance? ethers.utils.formatUnits(walletBalance, 'ether') +" ETH": "Loading..."}</div> </div>
      <div><button className="outline outline-1 rounded m-2">Edit</button><button className="outline outline-1 rounded m-2">Delete</button></div>
    </div>
    )

}

