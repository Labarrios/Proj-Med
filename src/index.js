import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Container from './elements/Container';

const Index = () => {

  return(
    <>
      <Helmet>
        <link rel="icon" href={favicon}/>
      </Helmet>

      <BrowserRouter>
        <Container>
          <Switch>
            <Route path='/login' component={}/>
            <Route path='/agragar-uaurio' component={}/>
            <Route path='/agregar-medicamento'>
              <agregarMed />
            </Route>
            <Route path='/agregar-medicamento/:id'>
              <agregarMed />
            </Route>
            <Route path='/consulta-medicamento/:nombre' >
              <consulMed />
            </Route>
            <Route path='/editar-medicamento/:id'>
              <editarMed />
            </Route>
            <Route path='/'>
              <App />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    

    </>
  );

};

ReactDOM.render(<Index/>,document.getElementById('root'));