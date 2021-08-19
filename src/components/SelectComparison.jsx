import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

function SelectComparison({ onChange }) {
  const selectOptions = [
    { name: 'maior que', value: 'bigger' },
    { name: 'menor que', value: 'smaller' },
    { name: 'igual a', value: 'equal' },
  ];

  return (
    <Select
      options={ selectOptions }
      onChange={ onChange }
      dataTestid="comparison-filter"
      selectName="comparison"
    />
  );
}

SelectComparison.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectComparison;
