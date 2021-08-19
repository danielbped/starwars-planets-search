import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

function SelectComparison({ onChange }) {
  const selectOptions = [
    { name: 'maior que', value: 'maior que' },
    { name: 'menor que', value: 'menor que' },
    { name: 'igual a', value: 'igual a' },
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
