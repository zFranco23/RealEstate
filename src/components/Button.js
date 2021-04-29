import { makeStyles } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'


const useStyles=makeStyles((theme)=>({
    btn:{
        backgroundColor: "CD853F",
        whiteSpace:"no-wrap",
        outline: "none",
        border: "none",
        minWidth:"100px",
        maxWidth:"200px",
        cursor: "pointer",
        textDecoration:"none",
        transition: "0.3s",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"14px 24px",
        color: "000d1a",
        fontSize:"14px",
        "&:hover":{
            transform :"translateY(-2px)"
        },
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    btnView:{
        backgroundColor: "CD853F",
        whiteSpace:"no-wrap",
        outline: "none",
        border: "none",
        minWidth:"100px",
        maxWidth:"200px",
        cursor: "pointer",
        textDecoration:"none",
        transition: "0.3s",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"14px 24px",
        color: "000d1a",
        fontSize:"14px",
        "&:hover":{
            transform :"translateY(-2px)"
        }
    },
    primary:{
        backgroundColor: "#000d1a",
        color:"#fff"
    },
    big:{
        padding:"16px 40px",
        fontSize:"20px"
    },
    rounded:{
        borderRadius:"25px"
    },
    fs:{
        fontSize:"1.5rem"
    }
}))

function Button({children,primary,big,to,style,show,rounded,fs}) {
    const classes=useStyles();
    return (
        (to==="/contact" && !show ) ?
        <Link to={to} className={`${classes.btn} ${rounded? classes.rounded : ""} ${primary ? `${classes.primary}` :""} ${big ? `${classes.big}` :""}`}>
            {children}
        </Link>
        :
        <Link style={style} to={to} className={`${fs? classes.fs : ""} ${classes.btnView} ${rounded? classes.rounded : ""} ${primary ? `${classes.primary}` :""} ${big ? `${classes.big}` :""}`}>
            {children}
        </Link>
    )
}

export default Button
