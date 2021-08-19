import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

function SelectColumn({ onChange }) {
  const selectOptions = [
    { name: 'population', value: 'population' },
    { name: 'orbital_period', value: 'orbital_period' },
    { name: 'diameter', value: 'diameter' },
    { name: 'rotation_period', value: 'rotation_period' },
    { name: 'surface_water', value: 'surface_water' },
  ];

  return (
    <Select
      options={ selectOptions }
      onChange={ onChange }
      dataTestid="column-filter"
      selectName="column"
    />
  );
}

SelectColumn.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectColumn;
