import Citizen from './Citizen';

const Locations = ({data}) => {
    return (
        <div className='world'>
            <h1>World Id: {data.id}</h1>
            <h1>Nombre: {data.name}</h1>
            <h1>Tipo: {data.type}</h1>
            <h1><span>Dimension: </span>{data.dimension}</h1>
            <h1>Poblacion: {data.residents?.length}</h1>
        </div>
    )
};

export default Locations