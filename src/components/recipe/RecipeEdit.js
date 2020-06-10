import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, editRecipe } from '../../actions/';
import RecipeForm from './RecipeForm';

class RecipeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editRecipe(
      this.props.match.params.id,
      formValues
    );
  }

  render() {
    if (!this.props.recipe) {
      return <div>Carregando...</div>;
    }

    return (
      <div className='bg-light h-100'>
        <div className='pt-5 m-auto' style={{ width: '480px' }}>
          <div className='row'>
            <h1 className='text-muted'>Editar Receita</h1>
          </div>
          <div className='row'>
            <RecipeForm
              onSubmit={this.onSubmit}
              initialValues={_.pick(this.props.recipe, 'title', 'description')} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe: state.recipes[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchRecipe, editRecipe }
)(RecipeEdit);