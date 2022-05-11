import Sidebar from "../components/Sidebar"
import ContentPreview1 from "../components/ContentPreview1"

//Styles
import { PageStyles } from "../hooks/Styles"


export default function Home({isLoggedIn, currentUser}) {

  return (
    <div className={PageStyles}>
      <ContentPreview1 isLoggedIn={isLoggedIn} currentUser={currentUser}/>
    </div>
  )
}