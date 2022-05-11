// React Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// Page Components
import ParentPage from "./pages/ParentPage";
import Home from "./pages/Home";
import WatchedWallets from "./pages/WatchedWallets";
import WalletFinder from "./pages/WalletFinder"
import Whales from "./pages/Whales";

import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

import PageNotFound from "./pages/PageNotFound";


// Style Sheet
import './App.css';


export default function App() {

  //User State
  const [currentUser, setCurrentUser] = useState()


  //Variable Assignment
  const isLoggedIn = () => {
    if (currentUser) {
      return (true)
    } else {
      return (false)
    }
  }

  //Fetch Assignments
  const getMeFetch = () => {
    fetch('/me')
      .then(res => {
        if (res.ok) {
          res.json().then(user => setCurrentUser(user))
        } else {
          setCurrentUser(null)
          console.log('Not logged In')
        }
      })
  }

  // const getNewestWhaleTransaction = () => {
  //   fetch('https://api.whale-alert.io/v1/status', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-WA-API-KEY': 'HxeUjz0ujc9FLs9t1LtOimebYCYTKs5C'
  //   }
  //   })
  // }

  //On-page-load:
  useEffect(() => {
    getMeFetch()
    isLoggedIn() //Remove later
    // getMeFetchtest()
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentPage currentUser={currentUser} setCurrentUser={setCurrentUser} />}>    {/*Parent Route/Source */}
          <Route path="" element={<Home isLoggedIn={isLoggedIn} currentUser={currentUser} />} /> {/*Home Page*/}
          <Route path="watched-wallets" element={<WatchedWallets currentUser={currentUser} />} />               {/*Watched Wallets*/}
          <Route path="wallet-finder" element={<WalletFinder />} />                                           {/*Wallet Finder, Not Completed Yet*/}

          <Route path="whales" element={<Whales />} >
            {/* Whale user data  */}
          </Route>

          <Route path="login" element={<LogIn setCurrentUser={setCurrentUser} />} />   {/*login Wallets*/}
          <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} />} />  {/*sign up Wallets*/}

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

//For later:
//sidebarState={isSidebarActive} toggleSidebar={toggleSidebar} 