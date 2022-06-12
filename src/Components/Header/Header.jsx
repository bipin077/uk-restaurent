import React,{useState} from 'react';
import './Header.css';
import { FaBars,FaTimes } from "react-icons/fa";

function Header() {
    const [show,setShow]=useState(false);
  return (
    <>
        <header>

        <div className="link-icon" onClick={()=>setShow(!show)}>
                { show ? <FaTimes /> : <FaBars />  }
            </div>
            
            { show ? <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Order Online</li>
                    <li>Contact Us</li>
                </ul>
            </div> : '' }

           
            
           
        </header>
    </>
  )
}

export default Header;