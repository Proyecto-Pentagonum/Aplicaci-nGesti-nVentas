import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./Venta.css";
import RegistrarVenta from './Pages/RegistrarVenta';
import ListaVentas from './Pages/ListaVentas.jsx';
import PrivateLayoutventa from "./layouts/PrivateLayoutventa.jsx";
import ActualizarVenta from './Pages/ActualizarVenta';
import PrivateLayoutUsuario from './layouts/PrivateLayoutUsuario';
import ListaUsuarios from './Pages/Usuario/ListaUsuarios';
import ActualizarUsuario from './Pages/Usuario/ActualizarUsuario';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateLayoutventa>
            <Route path={['/ListaVentas',"/RegistrarVenta",'/ActualizarVenta']}>
              <Switch>
                <Route path="/ListaVentas">
                  <ListaVentas />
                </Route>
                <Route path="/RegistrarVenta">
                  <RegistrarVenta/>
                </Route>
                <Route path="/ActualizarVenta">
                  <ActualizarVenta/>
                </Route>
              </Switch>
            </Route>
          </PrivateLayoutventa>
        </Switch>
        <Switch>
          <PrivateLayoutUsuario>
            <Route path={['/ListaUsuarios','/ActualizarUsuario']}>
              <Switch>
                
                <Route path="/ListaUsuarios">
                  <ListaUsuarios />
                </Route>
                <Route path="/ActualizarUsuario">
                  <ActualizarUsuario />
                </Route>
              </Switch>
            </Route>
          </PrivateLayoutUsuario> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
