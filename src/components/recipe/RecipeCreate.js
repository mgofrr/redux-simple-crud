import React from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions';
import RecipeForm from './RecipeForm';

class RecipeCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createRecipe(formValues);
  }

  render() {
    return (
      <div className='bg-light h-100'>
        <div className='pt-5 m-auto' style={{width: '480px'}}>
          <div className='row'>
            <h1 className='text-muted'>Criar Receita</h1>
          </div>
          <div className='row'>
            <RecipeForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }

}

export default connect(
  null,
  { createRecipe }
)(RecipeCreate);
