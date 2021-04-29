
import React, { useState } from 'react'


import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DropdowMenu from '../components/DropdownMenu';

function Home() {
    const [menuMobile,setMenuMobile]=useState(false);
    
    const showMenu = () =>{
        console.log("Prendido");
        setMenuMobile(true);
    }
    const offMenu= () =>{
        setMenuMobile(false);
    }
    return (
        <>
         <DropdowMenu setVisibilityOff={offMenu} show={menuMobile} />
         <Navbar setVisibility={showMenu} />
         <Hero />
        </>
    )
}

export default Home
