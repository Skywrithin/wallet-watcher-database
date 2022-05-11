import { useState, useEffect } from "react"
import { ethers } from "ethers";

export default function WhaleCard({wallet}) {
  const [walletBalance, setWalletBalance] = useState()

  //Styles
  const boldFont = "font-semibold flex"
  const normalFont = "font-normal ml-2"

  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${wallet.wallet_address}&tag=latest&apikey=5JJTINSZ38FFRH9VRUDJXHTNW6W8SF3TFC`
  
  const userWalletFetch = (e) => {
    fetch(url).then(r => r.json()).then(r => {
      // console.log(r)
      if(r.message == "OK"){
        setWalletBalance(r.result)
      } else {
        setTimeout(()=> userWalletFetch(),500)
      }
    })
  }

  useEffect(() => {
    userWalletFetch()
  }, [])
  
    return (
      <div className="bg-white outline outline-2 outline-purple-700 rounded m-3 p-1">
      <div className={boldFont} >Alias:   <div className={normalFont} >{wallet? wallet.alias: null}</div> </div>
      <div className={boldFont} >Address: <div className={normalFont} >{wallet? wallet.wallet_address: null}</div> </div>
      <div className={boldFont} >Balance: <div className={normalFont} >{walletBalance? ethers.utils.formatUnits(walletBalance, 'ether') +" ETH": "Loading..."}</div> </div>
    </div>
    )

}
// message: "NOTOK"
// result: "2113030002434567800000000"
// status: "1"

