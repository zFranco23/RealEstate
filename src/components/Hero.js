
import {makeStyles} from '@material-ui/core'
import React, { useRef, useEffect,useState } from 'react'
import HeroSlider from './HeroSlider';
import {SliderData} from '../DataHouses';


import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles=makeStyles((theme)=>({
    hero:{
        fontFamily:"Montserrat,sans-serif",
        height:"100vh",
        maxHeight:"1200px",
        overflow:"hidden",
        position:"relative"
    },
    heroContent:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        position:"relative"
    },
    btnContainer:{
        position:"absolute",
        bottom:"50px",
        right:"50px",
        zIndex:"10"
    },
    btn:{
        width:"50px",
        height:"50px",
        color:"#fff",
        background:"#000d1a",
        cursor:"pointer",
        borderRadius:"50px",
        padding:"10px",
        margin:"1rem",
        userSelect:"none",
        transition:"0.3s",
        "&:hover":{
            background:"#cd853f",
            transform:"scale(1.05)"
        }
    }
}))

function Hero() {
    const classes=useStyles();
    const [currentImage,setCurrentImage]=useState(0);
    const length=SliderData.length;
    const timeOut=useRef(null);


      useEffect(()=>{
        const nextSlide= () => setCurrentImage(currentImage === length-1 ? 0 : currentImage +1);
        
        timeOut.current=setTimeout(nextSlide,3000);
       
        return function (){
            if(timeOut.current ){
                clearTimeout(timeOut.current);
            }
        }
    
    },[currentImage,length])  

    const prevImage = ()=>{

        if(timeOut.current ){
            clearTimeout(timeOut.current);
        }
        setCurrentImage(currentImage===0 ? length-1 : currentImage-1)
    }
    const nextImage = ()=>{

        if(timeOut.current ){
            clearTimeout(timeOut.current);
        }
        setCurrentImage(currentImage===length-1 ? 0 : currentImage+1)
    }
    
    return (
        <>
            <div className={classes.hero}>{/* HeroSection */}
                <div className={classes.heroContent}>{/* Hero wrapper */}
                        <HeroSlider idx={currentImage}/>
                        <div className={classes.btnContainer}>
                            <ArrowBackIcon onClick={prevImage} className={classes.btn}/>
                            <ArrowForwardIcon onClick={nextImage} className={classes.btn}/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Hero
