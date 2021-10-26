import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./Venta.css";
import RegistrarVenta from './Pages/RegistrarVenta';
import ListaVentas from './Pages/ListaVentas.jsx';
import PrivateLayoutventa from "./layouts/PrivateLayoutventa.jsx";
import ActualizarVenta from './Pages/ActualizarVenta';



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
      </Router>
    </div>
  );
}

export default App;
