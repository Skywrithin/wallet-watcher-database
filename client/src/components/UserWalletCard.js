import { useState, useEffect } from "react"

export default function WalletCard({wallet}) {
  const [walletBalance, setWalletBalance] = useState()
  const wall1et = 'test'

  const url = 'https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=5JJTINSZ38FFRH9VRUDJXHTNW6W8SF3TFC'
  
  const userFetch = (e) => {
    fetch(url).then(r => (r.json())).then(r => console.log(r))
  }

  useEffect(() => {
    console.log(wallet)
  }, [wallet])

    return (
      <div className="bg-white outline outline-4 outline-gray-600 rounded m-2">
      <div>Alias: {wall1et}</div>
      <div>Wallet: {wall1et}</div>
      <div>Balance: {wall1et}</div>
      <div><button className="rounded outline outline-1 m-1" onClick={confirmHandler}>Edit</button><button className="rounded outline outline-1 m-1">Delete</button></div>
    </div>
    )

}