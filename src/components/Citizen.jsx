import { useEffect, useState } from 'react';
import axios from "axios";

const Citizen = ({dataCz}) => {
    const [citizens,setCitizens] = useState(dataCz)

    useEffect(()=>{
        
        axios
            .get(citizens)
            .then((resp)=>setCitizens(resp.data))
            .catch((error)=>console.log("errorCiti"));

    },[dataCz])
    return (
        <div className="citizen-card">
            <li key={citizens.id} >
                <div className='citizen-card-head'>
                    <img src={citizens.image} alt="" className='citizen-img' />
                    <div className='status'>
                        {citizens.status}
                    </div>
                </div>
            <div className='citizen-card-info'>
                <h1><span></span>{citizens.name}</h1>
                <div className='citizen-card-info-down'>
                    <h2><span>id: </span>{citizens.id}</h2>
                    <h2><span>Especie: </span>{citizens.species}</h2>
                    <h2><span>Origen: </span>{citizens?.origin?.name}</h2>
                    <h2><span>Episodios: </span>{citizens?.episode?.length}</h2>
                </div>
                
            </div>
            
            </li>
                               
        </div>
        
    );
} 

export default Citizen;

    /*let randomId
        const generateIdWorld = () =>{
            randomId = Math.floor(Math.random()*(dataCz.residents?.length));
        };
        generateIdWorld();
        /*let citizens3 = dataCz.residents?.[randomId]*/
        /*for (let i=0; i<dataCz.residents?.length; i++)
        {
        citizens3 = dataCz.residents?.[i]
        }*/
        /*<div className='citizen-card-head'>
                <img src={citizens.image} alt="" />
                <div className='status'>
                    {citizens.status}
                </div>
            </div>
            <div>
                <h2>{citizens.name}</h2>
                <h2>{citizens.species}</h2>
                <h2>{citizens?.origin?.name}</h2>
                <h2>{citizens?.episode?.length}</h2>
    </div>*/
/*<li key={citizens.id} className="citizen-card">
            <div className='citizen-card-head'>
                <img src={citizens.img} alt="" />
                <div className='status'>
                    {citizens.status}
                </div>
            </div>
            <div>
                {citizens.name}
                {citizens.species}
                {citizens?.origin?.name}
                {citizens?.episode?.length}
            </div>
        </li>*/
    