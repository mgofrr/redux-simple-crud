import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions';
import { Link } from 'react-router-dom';

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderList() {
    return this.props.recipes.map(recipe => {
      return (
        <div className='col-md-4' key={recipe.id}>
          <div className='card item mb-4'>
            <div className='card-body'>
              <h3>
                <Link to={`/receita/${recipe.id}`} className='text-success'>
                  {recipe.title}
                </Link>
              </h3>
              <div className='card-text'>
                {recipe.description}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='container mt-5'>
          <div className='row justify-content-between'>
            <div className='col-4 text-muted align-text-bottom'>
              <h1>Receitas</h1>
            </div>
            <div className='col-4 align-text-bottom'>
              <Link to='/criar' className='btn btn-success'>
                Criar Receita
              </Link>
            </div>
          </div>
        </div>
        <div className='album py-5 bg-light'>
          <div className='container'>
            <div className='row'>
              {this.renderList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: Object.values(state.recipes)
  };
};

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(RecipeList);
