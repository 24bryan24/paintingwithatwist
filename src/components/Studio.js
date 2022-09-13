import "./Studio.css"

import React from 'react'
import Navbar from "./Navbar"

const navLinkList = [
  "Studio Home",
  "Events",
  "Private Party",
  "At Home Kits",
  "About",
  "Franchise",
];


const Studio = () => {
  return (
    <div>
        <Navbar linkList={navLinkList}/>
    </div>
  )
}

export default Studio