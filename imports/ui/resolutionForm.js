import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution {
    createResolution {
      _id
    }
  }
`;

class ResolutionForm extends React.Component {
  submitForm = () => {
    console.log('🙌🏻', this.name.value)
    this.props.createResolution();
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.name = input;
          }}
        />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: 'createResolution'
})(ResolutionForm)