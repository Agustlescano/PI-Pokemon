import {Link} from 'react-router-dom';
import './home.css'
function HomePage() {
    return (<div className="home">
           <h1>Bienvenido</h1>
           
               <Link to='/pokemons'>Ingresar</Link>
               

           </div>)

}

export default HomePage