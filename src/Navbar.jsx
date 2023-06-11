import React from 'react'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles=makeStyles({
    App:{
        backgroundColor:"#1b263b",
        color:"white",
        
    },
    Nav:{
        backgroundColor:"#0d1b2a",
    },
    Navfont:{
        fontFamily:"Poppins",
        color:"#d00000",
        
    }
})



const Navbar = () => {

  const classes=useStyles();
  return (
    <div className={classes.App}>
        <AppBar className={classes.Nav}>
            <Toolbar>
                <Typography variant="h6" component="div" style={{marginLeft: 70}} className={classes.Navfont}>
                    MyCrypto  By  Mridul  Verma

                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar;
