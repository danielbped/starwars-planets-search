import React from 'react';
import Select from './Select';

function SelectColumn() {
  const selectOptions = [
    { name: 'population', value: 'population' },
    { name: 'orbital_period', value: 'orbitalPeriod' },
    { name: 'diameter', value: 'diameter' },
    { name: 'rotation_period', value: 'rotationPeriod' },
    { name: 'surface_water', value: 'surfaceWater' },
  ];

  return (
    <Select
      options={ selectOptions }
      dataTestid="column-filter"
      selectName="column"
    />
  );
}

export default SelectColumn;
