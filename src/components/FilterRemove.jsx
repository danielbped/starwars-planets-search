import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function FilterRemove({ onClick }) {
  const { filters:
    {
      filterByNumericValues,
      filtered,
    },
  setFilters,
  filters,
  } = useContext(Context);

  const handleClick = (column) => {
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues.filter((col) => col.column !== column),
    });
    if (filterByNumericValues.length === 0) setFilters({ filters: { filtered: false } });
    onClick();
  };

  if (!filtered) return '';
  return (
    <div>
      { filterByNumericValues.map(({ column, comparison, value }) => (
        <div data-testid="filter" key={ `${column}${comparison}${value}` }>
          <span>
            {
              `column: ${column}, comparison: ${comparison}, value: ${value}`
            }
          </span>
          <button
            type="button"
            onClick={ () => handleClick(column) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

FilterRemove.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FilterRemove;
