import React from 'react';
import Select from './Select';

function SelectComparison() {
  const selectOptions = [
    { name: 'maior que', value: 'bigger' },
    { name: 'menor que', value: 'smaller' },
    { name: 'igual a', value: 'equal' },
  ];

  return (
    <Select
      options={ selectOptions }
      dataTestid="comparison-filter"
      selectName="comparison"
    />
  );
}

export default SelectComparison;
