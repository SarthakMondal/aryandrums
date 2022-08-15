import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import open from "../Images/open.png";
import close from "../Images/close.png";
import logo from "../Images/logo.png";
import "../Styles/Elements.css";
import gsap from 'gsap';

function Header() {

  let tl = gsap.timeline({ defaults: { duration: 0.7, ease: 'expo.inOut' } });
  const [scrollWidth, setScrollWidth] = useState("");

  const scrollIndicator = () =>{
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollWidth((winScroll / height) * 100 + "%");
  }
  
  useEffect(() => {
    window.addEventListener("scroll", scrollIndicator);
    return () => {
        window.removeEventListener("scroll", scrollIndicator);
    }
  }, [])
  

  const navOpen = () => {
    if (tl.reversed()) {
        tl.play();
    } else {
        tl
            .to('header nav', { zIndex: 5 })
            .to('header nav', { right: 0 })
            .to('header nav', { height: '100vh' }, '-=.1')
            .to('header nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.7')
    }
  }
  const navClose = () => {
    tl.reverse();
  }

  return (
   <header>
        <div className="menuOpenAndLogo">
            <img src={logo} alt="logo" id="logo"/>
            <img src={open} alt="open" id="open" onClick={navOpen}/>
        </div>
        <nav>
            <div className="menuClose">
                <img src={close} alt="close" onClick={navClose}/>
            </div>
            <ul class="d-flex flex-column justify-content-center align-items-center">
                <li><a href="#home" onClick={navClose}>Home</a></li>
                <li><a href="#about" onClick={navClose}>About Me</a></li>
                <li><a href="#gallary" onClick={navClose}>Gallary</a></li>
                <li><a href="#myworks" onClick={navClose}>My Works</a></li>
                <li><a href="#testimonial" onClick={navClose}>Testimonial</a></li>
                <li><a href="#reachme" onClick={navClose}>Reach Me</a></li>
            </ul>
        </nav>
        <div class="progressWrap">
            <div class="progressBar" id="myBar" style={{width: `${scrollWidth}`}}></div>
        </div>
   </header>
  )
}

export default Header