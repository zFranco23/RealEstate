import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Button from './Button';
import SortIcon from '@material-ui/icons/Sort';
const useStyles=makeStyles((theme)=>({
    logo:{
        color:"black",
        fontSize:"1.5rem",
        textDecoration:"none",
        fontStyle:"italic"
    },
    link:{
        textDecoration:"none",
        color:"black",
        cursor:"pointer",
        padding: "0 1rem"
    },
    navbar:{
        zIndex:2,
        fontFamily:"Montserrat,sans-serif",
        height:"60px",
        fontWeight:"500",
        background:"transparent"
    },
    toolbar:{
        margin:"0 0.25rem",
        justifyContent:"space-between"
    },
    menu:{
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    iconMenu:{
        display:"none",
        color:"black",
        fontSize:"5rem",
        transition:"0.3s",
        [theme.breakpoints.down("xs")]:{
            display:"block"
        }
        
    },
    icon:{
        fontSize:"2rem"
    }
}))

function Navbar({setVisibility}) {
    const classes=useStyles();
    return (
        <AppBar className={classes.navbar} elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Link to="/" className={classes.logo}>
                    FRALUCA
                </Link>
                <div className={classes.menu}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/about" className={classes.link}>
                        About
                    </Link>
                    <Link to="/rentals" className={classes.link}>
                        Rentals
                    </Link>
                </div>
                <Button primary="true" to="/contact" show={false}>
                    Contact us
                </Button>
                <IconButton className={classes.iconMenu} onClick={setVisibility}> 
                   <SortIcon className={classes.icon} /> 
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
