import {makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {SliderData} from '../DataHouses';
import Button from './Button';
import CountUp from 'react-countup';
import Zoom from 'react-reveal/Zoom';

const useStyles=makeStyles(()=>({
     heroSlide:{//HeroSlide
        zIndex:"1",
        width:"100%",
        height:"100%"
    },
    heroSlider:{
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        "&::before":{
            content:"",
            position:"absolute",
            zIndex:2,
            height:"100vh",
            width:"100%",
            left:0,
            overflow:"hidden",
            opacity:0.4,
            background:"linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.2) 50%,rgba(0, 0, 0, 0.6) 100%)"
        }
    },
    heroImage:{
        position:"absolute",
        top:0,
        left:0,
        width:"100vw",
        height:"100vh",
        objectFit:"cover",
        transition:"0.3s ease-in-out"
    },
    heroContent:{
        position:"relative",
        zIndex:2,
        display:"flex",
        flexDirection:"column",
        maxWidth:"1600px",
        width:"calc(100% - 100px)",
        color:"#fff"
    },
    text:{
        fontFamily:"Montserrat,sans-serif",
    },
    texTitle:{
        
        fontFamily:"Montserrat,sans-serif",
        textTransform:"uppercase",
    }
}))
function HeroSlider({idx}) {
    const classes=useStyles();
    return (
        <> 
            {SliderData.map((slide,index)=>(
                
                index===idx &&
                <div key={index} className={classes.heroSlide}>
                    <div className={classes.heroSlider}>
                        <img src={slide.image}  alt={slide.alt} className={classes.heroImage}/>
                            <div className={classes.heroContent}>
                                <Zoom left cascade >
                                    <Typography className={classes.textTitle} variant="h6">{slide.title}</Typography>
                                    <Typography className={classes.text} variant="subtitle1">
                                        $
                                        <CountUp
                                            end={slide.price}
                                            duration={2}
                                            separator=", "
                                        />              
                                    </Typography>
                                    <Button className={classes.text}style={{maxWidth:"160px"}} to={slide.path} primary="true">
                                        {slide.label}
                                        <ArrowForwardIcon/>
                                    </Button>
                                </Zoom>               
                            </div>                                                                       
                    </div>              
                </div>
            ))}
        </>
    )
}

export default HeroSlider
