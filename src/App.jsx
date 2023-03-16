import './App.css'
import { useState, useEffect } from 'react'
import axios from "axios"
import Citizen from './components/Citizen';
import Locations from './components/Locations';

function App() {
  let randomId
  const generateIdWorld = () =>{
    randomId = Math.floor(Math.random()*126)+1;
  };
  generateIdWorld();

  const [worldId, setWorldId] = useState(randomId);
  const [idWorld, setIdWorld] = useState("");
  const [worldData,setWorldData] = useState("")
  
  const captureWorld = (event) => {
    setIdWorld(event.target.value );
    
  } 

  const searchWorld = () => {
    setWorldId(idWorld);
   }
 
  useEffect (()=>{
  
  axios
      .get(`https://rickandmortyapi.com/api/location/${worldId}`)
      .then((resp)=>setWorldData(resp.data))
      .catch((error)=>console.log("errorApp"));

  },[worldId])
///////////////////////////

  
  
  return (
    <div className="App">
        <div className='Logotype'>
          <img src="/logo.svg" alt="" width="550"/>
        </div>
        <div className="search">
            <input className='input-search' value={idWorld} placeholder="World id" onChange={captureWorld}/>
            <input className='button-search' type="button" value="Search" onClick={searchWorld}/>
        </div>
        <Locations data = {worldData} />
        <div className="citizen-container">
          <ul>
            {
              worldData?.residents?.map((x)=>(<Citizen key="citizens.id" dataCz={x}/>))
            }
          </ul>
        </div>         
    </div>
  )
}
export default App
 