import { useNavigate } from "react-router-dom"

export default function Sidebar() {

  //UseNavigate hook
  const navigate = useNavigate();

  //Navigate to endpoint base on the button name data
  const navigateHandler = (e) => {
    navigate(e.target.name)
  }

  return (
    <div className='(Sidebar Parent) Computed:( grid w-56 p-1 ) Style:( outline-1 bg-gray-300 ) absolute left-1/2 -translate-x-1/2' >
        <button className='(Home   ) Computed:( m-1 ) Styles:( rounded outline outline-1 bg-blue-400   ) ' name={'/'}                onClick={navigateHandler} > Home </button>
        <button className='(Wallets) Computed:( m-1 ) Styles:( rounded outline outline-1 bg-purple-400 ) ' name={'/watched-wallets'} onClick={navigateHandler} > Watched Wallets </button>
        <button className='(Wallets) Computed:( m-1 ) Styles:( rounded outline outline-1 bg-blue-400   ) ' name={'/whales'} onClick={navigateHandler} > Whales </button>
        <button className='(Wallets) Computed:( m-1 ) Styles:( rounded outline outline-1 bg-purple-400 ) ' name={'/wallet-finder'} onClick={navigateHandler} > Wallet-Finder </button>
    </div>
  )
}
//The sidebar component is a hideable set of buttons on the side to navigate to different pages//