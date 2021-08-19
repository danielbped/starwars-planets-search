import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function Select({ options, dataTestid, selectName }) {
  const { handleChangeValues } = useContext(Context);

  return (
    <select
      data-testid={ dataTestid }
      onChange={ (e) => handleChangeValues(e) }
      name={ selectName }
    >
      {options.map(({ name, value }) => (
        <option value={ value } key={ value }>
          { name }
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  dataTestid: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
};

export default Select;
