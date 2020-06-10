import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe, deleteRecipe } from '../../actions';

class RecipeShow extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  renderEditButton() {
    if (!this.props.recipe) {
      return <div>Carregando...</div>;
    }

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteRecipe(this.props.recipe.id)}
          className='btn btn-danger m-2'>
            Deletar
        </button>
        <Link to={`/editar/${this.props.recipe.id}`} className='btn btn-primary m-2'>
          Editar Receita
        </Link>
      </React.Fragment>
    );
  }

  render() {
    if (!this.props.recipe) {
      return <div>Carregando...</div>;
    }

    return (
      <div className='bg-light h-100'>
        <div className='pt-5 container'>
          <div className='row mt-5'>
            <div className='col-4 text-muted align-text-bottom'>
              <h1 className='text-muted'>{this.props.recipe.title}</h1>
            </div>
          </div>
          <div className='row mt-5'>
            {this.props.recipe.description}
          </div>

          <div className='row mt-5 align-text-bottom'>
            {this.renderEditButton()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe: state.recipes[ownProps.match.params.id] };
}
export default connect(
  mapStateToProps,
  { fetchRecipe, deleteRecipe }
)(RecipeShow);