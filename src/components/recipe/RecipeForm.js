import React from 'react';
import { Field, reduxForm } from 'redux-form';

class RecipeForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='alert alert-danger'>
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `form-group ${meta.error && meta.touched ? 'has-error' : ' '}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' className='form-control' />
        {this.renderError(meta)}
      </div>
    );
  };

  renderTextArea = ({ input, label, meta }) => {
    const className = `form-group ${meta.error && meta.touched ? 'has-error' : ' '}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete='off' className='form-control' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form'>

        <Field name='title' component={this.renderInput} label='Título' />
        <Field name='description' component={this.renderTextArea} label='Descrição' />

        <button className='btn btn-success'>Enviar</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'A receita deve ter um título';
  }

  if (!formValues.description) {
    errors.description = 'A receita deve ter uma descrição';
  }

  return errors;
};

export default reduxForm({
  form: 'recipeForm',
  validate
})(RecipeForm);
