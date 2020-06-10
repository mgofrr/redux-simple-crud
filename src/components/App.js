import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import RecipeList from './recipe/RecipeList';
import RecipeCreate from './recipe/RecipeCreate';
import RecipeEdit from './recipe/RecipeEdit';
import RecipeShow from './recipe/RecipeShow';
import history from '../history';

const App = () => {
  return (
    <div style={{height: '100vh'}}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={RecipeList} />
          <Route path='/criar' exact component={RecipeCreate} />
          <Route path='/editar/:id' exact component={RecipeEdit} />
          <Route path='/receita/:id' exact component={RecipeShow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
