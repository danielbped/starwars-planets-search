import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

function SelectColumn({ options, onChange }) {
  return (
    <Select
      options={ options }
      onChange={ onChange }
      dataTestid="column-filter"
      selectName="column"
    />
  );
}

SelectColumn.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default SelectColumn;
