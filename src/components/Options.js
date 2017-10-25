import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started</p>}
    {
      props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

Options.propTypes = {
  options: PropTypes.node.isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Options;
