import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import Carousel from './Carousel';


const useStyles=makeStyles(()=>({
    banner:{
        backgroundImage: "url(./CryptoBackground2.jpg)",
    },
    bannerContent:{
        height: 450,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-around",
        color:"white",
    },
    tagline:{
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",

    }
}));


const Banner = () => {
  const classes=useStyles();
  return (
    <div className={classes.banner}>
         <Container className={classes.bannerContent}>
        <div className={classes.tagLine} style={{marginLeft: 412, marginTop: 20 }}>
            <Typography
            variant="h2"
            style={{
                fontWeight: "bold",
                marginBottom: 10,
                
                fontFamily:"Share Tech Mono",
                marginLeft:"60px"
                
            }}>
            MY CRYPTO

            </Typography>
            <Typography 
            variant="subtitle2"
            style={{
                color:'darkgrey',
                textTransform:'capitalize',
                fontFamily:'Share Tech Mono',
                
            }}> 
                Here is some info regarding your favorite Cryptocurrency :
            </Typography>
        </div>
        <Carousel/>
        
      </Container>
    </div>
  )
}

export default Banner
