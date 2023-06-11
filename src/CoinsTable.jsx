 import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

import { LinearProgress, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, createTheme, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { Container }from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { numberWithCommas } from './Carousel';

const CoinsTable = () => {
    const [coins, setCoins]=useState([]);
    const [loading, setLoading]=useState(false);
    const [search, setSearch]=useState('');

    const fetchCoins= async ()=>{
        setLoading(true);
        const {data} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
        setCoins(data);
        setLoading(false);
    }

    useEffect(()=>{
        fetchCoins();
    },[])

    const darkTheme=createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            type: "dark",
            
        }
    })

   const handleSearch = () =>{
    return coins.filter((coin)=>(
        coin.name.toLowerCase().includes(search)
    ))
   }

   

   
    
  return (
   <ThemeProvider theme={darkTheme}>
    <Container style={{textAlign: "center"}}>
        <Typography variant= "h4"
        style={{margin:18, fontFamily:"Share Tech Mono"}}>
        Cryptocurrency Prices by Market Cap
           
        </Typography>
        <TextField label="Search For a Cryptocurrency"
        variant="outlined"
        style={{marginBottom:20, width:"100%"}}
        onChange={(e)=>setSearch(e.target.value)}/>

        <TableContainer>
            {loading ? (
                <LinearProgress style={{backgroundColor: "#90e0ef"}}/>
            ):(
                <Table>
                    <TableHead style={{backgroundColor:"#ef233c"}}>
                        <TableRow>
                            {['Coin', 'Price', '24Hr Change', 'Market Cap'].map((head)=>(
                                <TableCell style={{color:"black", fontWeight: "600"
                                }}
                                key={head}
                                align={head==="Coin"? "" : "right"}>
                                {head}

                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {handleSearch().map(row=>{
                            const profit = row.price_change_percentage_24h> 0;

                            return (
                                <TableRow
                                key={row.name}
                                >
                                <TableCell component='th' scope='row' style={{display:"flex", gap: 15}}>

                                <img src={row.image}
                                alt={row.name}
                                height="50"
                                style={{marginBottom: 10}}/>

                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <span style={{textTransform:"uppercase", fontSize: 22}}>
                                    {row.symbol}

                                    </span>
                                    <span style={{color: "darkGrey"}}>
                                    {row.name}

                                    </span>
                                </div>

                                </TableCell>

                                <TableCell align="right" style={{fontSize:20}}>
                                    $ {numberWithCommas(row.current_price.toFixed(2))}
                                </TableCell>

                                <TableCell align='right' style={{color: profit> 0 ? "rgb(14, 203, 129)": "red", fontSize:20 }}>
                                    {profit && "+"}
                                    {row.price_change_percentage_24h.toFixed(2)}%

                                </TableCell>

                                <TableCell align="right" style={{fontSize:20}}>
                                $ {row.market_cap.toFixed(2)}

                                </TableCell>
                                    
                                </TableRow>
                            )

                        })}
                    </TableBody>
                </Table>
            )}
        </TableContainer>

    </Container>
   </ThemeProvider>
  )
}

export default CoinsTable;