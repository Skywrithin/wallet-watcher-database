import Sidebar from "../components/Sidebar"
import ContentPreview1 from "../components/ContentPreview1"


function Home() {

  //Fetch Assignments
  const getWhaleWalletsFetch = (e) => {
    fetch('/whale_wallets', {
      method: 'GET'
    })
  }


  return (
    <div className="flex justify-center rounded bg-gray-100 p-2  outline outline-1 ">
      <ContentPreview1 />
    </div>
  )
}

export default Home