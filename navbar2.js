import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import {useState} from 'react'
import Sidebar from "../Sidebar"
import {faHome,faList,faCog,faEnvelope,faUsers} from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar,setShowSidebar] = useState(false);
    const links=[
        {
            name:"Home",
            path:"/",
            icons:faHome
        },
        {
            name:"Wishlist",
            path:"/wishlist",
            icons:faList
        },
        {
            name:"Recipes",
            path:"/recipes",
            icons:faCog
        },
        {
            name:"About",
            path:"/about",
            icons:faUsers
        },
        {
            name:"Contact",
            path:"/contact",
            icons:faEnvelope
        }
    ]

    function closeSidebar(){
        setShowSidebar(false);
    }
    return(
        <>
        <div className="navbar container">
            <Link to='/' className="logo">R<span>ECIP</span>E</Link>
            <div className="nav-links">
                { links.map((link)=> (
                    <Link to={link.path} key={link.name}>{link.name}</Link>
                )) }
            </div>
            <div onClick={() => setShowSidebar(!showSidebar)} className=
             {showSidebar ? "sidebar-btn active" : "sidebar-btn "}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        
        </>
    )
}


