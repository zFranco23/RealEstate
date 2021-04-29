import { makeStyles,IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom'
import React from 'react'
import Button from './Button';

import CloseIcon from '@material-ui/icons/Close';

const useStyles=makeStyles((theme)=>({
    dropdown:{
        position:"fixed",
        zIndex:"999",
        width:"100%",
        height:"100%",
        top:0,
        background:"#cd853f",
        justifyContent:"center",
        alignItems:"center",
        display:"none",
        transition:"0.3s ease-in-out",
        opacity:1,
        [theme.breakpoints.down("xs")]:{
            display:"flex"
        }
    },
    menu:{
        display:"flex",
        fontSize:"1.5rem",
        flexDirection:"column",
        alignItems:"center"
    },
    menuItem:{
        textDecoration:"none",
        color:"#fff",
        fontWeight:"500",
        marginBottom:"2.5rem",
        transition:"0.2s ease-in-out",
        "&:hover":{
            color:"#000d1a"
        }
    },
    btn:{
        position:"absolute",
        top:"1.2rem",
        right:"1.5rem",
    },
    closeIcon:{
        color:"#000",
        fontSize:"2rem",
    },
    container:{
        display:"flex"
    },
    dropdownOpacity:{
        position:"fixed",
        zIndex:"999",
        width:"100%",
        height:"100%",
        background:"#cd853f",
        justifyContent:"center",
        alignItems:"center",
        display:"none",
        opacity:0,
        top:"-100%",
        transition:"0.3s ease-in-out",
        [theme.breakpoints.down("xs")]:{
            display:"flex"
        }
    }
}))
function DropdowMenu({show,setVisibilityOff}) {
    const classes=useStyles();

    const drawDropdown = ()=>{
        if(show){
            return (<div className={classes.dropdown}>
            <IconButton className={classes.btn} onClick={setVisibilityOff}>
                    <CloseIcon className={classes.closeIcon} />
            </IconButton>
            <div className={classes.menu}>
                <Link className={classes.menuItem} to="/about">
                    About
                </Link>
                <Link className={classes.menuItem} to="/">
                    Home
                </Link>
                <Link className={classes.menuItem} to="/rentals">
                    Rentals
                </Link>
                <Button style={{marginTop:"2rem"}} primary="true" to="/contact" show={true} rounded={true}>
                    Contact us
                </Button>
            </div>
            </div>)
        }else{
            return (<div className={classes.dropdownOpacity}>
                <IconButton className={classes.btn} onClick={setVisibilityOff}>
                        <CloseIcon className={classes.closeIcon} />
                </IconButton>
                <div className={classes.menu}>
                    <Link className={classes.menuItem} to="/about">
                        About
                    </Link>
                    <Link className={classes.menuItem} to="/">
                        Home
                    </Link>
                    <Link className={classes.menuItem} to="/rentals">
                        Rentals
                    </Link>
                    <Button style={{marginTop:"2rem"}} primary="true" to="/contact" show={true} rounded={true}>
                        Contact us
                    </Button>
                </div>
            </div>)
        }
    }
    return (
        <>
        {drawDropdown()}
        </>
    )
}

export default DropdowMenu
