import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core'
import { TrendingCoins } from './api'
import { useState } from 'react'
import { useEffect } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel'

const useStyles=makeStyles({
    carousel:{
        height:"20%",
        display:"flex",
        alignItems:"center",
        marginLeft:"60px",
        marginBottom:"35px"
    },
    carouselItem:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      marginBottom:"20px"
    }
   
})

export function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Carousel = () => {
    const [trending, setTrending] = useState([])
    
    const classes=useStyles();
   
    const fetchTrendingCoins=async ()=> {
      const {data}=await axios.get(TrendingCoins());
      setTrending(data)
    }

    useEffect(()=>{
      fetchTrendingCoins();
    },[])

    const items=trending.map((coin)=>{
      let profit=coin.price_change_percentage_24h >=0;
      return(
        <div className={classes.carouselItem}>
        <img 
           src={coin.image}
           alt={coin.name}
           height="90"
           style={{marginBottom: 10}}

        />
        <span>
          {coin.symbol}
          &nbsp;
          <span style={{color: profit > 0 ? "rgb(14, 203, 129)": "red"}}>
          {profit &&'+'} {coin.price_change_percentage_24h.toFixed(2)}%</span>
        </span>

        <span style={{fontSize: 22, fontWeight: 500}}>
          $ {numberWithCommas(coin.current_price.toFixed(2))}
        </span>
        </div>

     
           
      )
    })

    const responsive={
      0:{
        items: 2,
      },
      512:{
        items: 4,
      },
    }

  return (
    <div className={classes.carousel}>
      <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      responsive={responsive}
      autoPlay
      items={items}
      disableButtonsControls>

      </AliceCarousel>
    </div>
  )
}

export default Carousel
