import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import actionTeste from './Redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './pages/Foods';
import Details from './pages/Details';
import InProgress from './pages/InProgress';
import Beverages from './pages/Beverages';
import Ingredients from './pages/Ingredients';
import Areas from './pages/Areas';
import Done from './pages/Done';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import ExploreBeverages from './pages/ExploreBeverages';
import ExploreFoods from './pages/ExploreFoods';

function App() {
  // const { dispatchTeste } = props;
  return (
    <Switch>
      <Route path="/comidas" component={ Foods } />
      <Route path="/comidas/:id" render={ (props) => <Details { ...props } /> } />
      <Route
        path="/comidas/:id/in-progress"
        render={ (props) => <InProgress { ...props } /> }
      />
      <Route path="/bebidas" component={ Beverages } />
      <Route path="/bebidas/:id" render={ (props) => <InProgress { ...props } /> } />
      <Route path="/bebidas/:id/in-progress" Ingredients />
      <Route path="/explorar" component={ Explore } />
      <Route path="/explorar/bebidas" component={ ExploreBeverages } />
      <Route path="/explorar/comidas" component={ ExploreFoods } />
      <Route
        path="/explorar/bebidas/ingredientes"
        render={ (props) => <Ingredients { ...props } /> }
      />
      <Route
        path="/explorar/comidas/ingredientes"
        render={ (props) => <Ingredients { ...props } /> }
      />
      <Route path="/explorar/comidas/area" component={ Areas } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/receitas-feitas" component={ Done } />
      <Route path="/receitas-favoritas" component={ Favorites } />
      <Route exact path="/" />
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchTeste: (frase) => dispatch(actionTeste(frase)),
});

export default connect(null, mapDispatchToProps)(App);
