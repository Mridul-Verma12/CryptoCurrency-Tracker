import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import { makeStyles } from '@material-ui/core';
import CoinsTable from './CoinsTable';


const useStyles=makeStyles({
  backg:{
    backgroundColor:"#1b263b",
    minHeight:"100vh",
    color:"white",

  }
})

function App() {
  const classes=useStyles();
  return (
  <div className={classes.backg}>
    <Navbar/>
    <Banner/>
    <CoinsTable/>
   
    
  </div>
   
  );
}

export default App;
