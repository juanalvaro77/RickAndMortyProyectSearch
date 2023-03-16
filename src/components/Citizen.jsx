import { useEffect, useState } from 'react';
import axios from "axios";
const Citizen = ({dataCz}) => {
    const [citizens,setCitizens] = useState(dataCz)
    let citizens2 = dataCz
    useEffect(()=>{
        axios
            .get(citizens2)
            .then((resp)=>setCitizens(resp.data))
            .catch((error)=>console.log("errorCiti"));
    },[dataCz])
    return (
    <div className='citizen-container'>   
        <div className="citizen-card">
            <li key={citizens.id} >
                <div className='citizen-card-head'>
                    <img src={citizens.image} alt="" className='citizen-img' />
                </div>
                <div className='status'>
                        {citizens.status}
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
        </div>
    );
}; export default Citizen;