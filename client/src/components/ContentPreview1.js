import { ethers } from "ethers";
import WalletCard from "./WalletCard";
// new ethers.providers.EtherscanProvider( [ network = "homestead" , [ apiKey ] ] )

export default function ContentPreview1() {
  return (

    <div className="outine outline-4 rounded  p-2 w-fit bg-gray-200 grid grid-rows-1 grid-flow-col place-content-center">

        <div className="Large Wallets bg-gray-400 rounded min-w-min w-64 m-4 p-1">
          <div className="rounded bg-white outline"> Whale Wallets </div>
          <WalletCard />
          <WalletCard />
          <WalletCard />
          <WalletCard />
          <WalletCard />
        </div>

        <div className="Your Wallets bg-gray-400 rounded min-w-min w-64 m-4 p-1">
        <div className="rounded bg-white outline"> Your Watched Wallets </div>
          <WalletCard />
          <WalletCard />
          <WalletCard />
          <WalletCard />
        </div>

    </div>
  )
}