// React Imports
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// Page Components
import ParentPage from "./pages/ParentPage";
import Home from "./pages/Home";
import WatchedWallets from "./pages/WatchedWallets";

import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";


// Style Sheet
import './App.css';

// export const SidebarContext = React.createContext()

export default function App() {

  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarActive(isSidebarActive => !isSidebarActive)}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentPage sidebarState={isSidebarActive} toggleSidebar={toggleSidebar}/>}>  {/*Parent Route/Source */}
          <Route path="" element={<Home />} />                                                                 {/*Home Page*/}
          <Route path="watched-wallets" element={<WatchedWallets />} />                                        {/*Watched Wallets*/}

          <Route path="login" element={<LogIn />} />  {/*login Wallets*/}
          <Route path="/signup" element={<SignUp />} />  {/*sign up Wallets*/}
        </Route>
      </Routes>
    </Router>
  );
}