import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider({ children }) {
  const [data, setData] = useState({
    planets: [],
    loading: true,
  });

  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      columnSort: 'population',
      sort: '',
    },
    sorted: false,
    filtered: false,
  };

  const [filters, setFilters] = useState(INITIAL_STATE);

  const handleChangeName = ({ target: { name, value } }) => {
    setFilters({ ...filters, filterByName: { [name]: value } });
  };

  const handleClickFilter = (filter) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{ ...filter }, ...filters.filterByNumericValues],
      filtered: true,
    });
  };

  const handleChangeOrder = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      order: { ...filters.order, [name]: value },
    });
  };

  const handleClickOrder = () => {
    const { columnSort, sort } = filters;
    if (columnSort !== '' && sort !== '') {
      setFilters({
        ...filters,
        sorted: true,
      });
    }
  };

  useEffect(() => {
    const requestAPI = async () => {
      const result = await fetch(API_URL);
      const response = await result.json();
      if (data.loading) return setData({ ...data, planets: response, loading: false });
    };
    requestAPI();
  });

  return (
    <Context.Provider
      value={ {
        data,
        handleChangeName,
        filters,
        handleClickFilter,
        setFilters,
        INITIAL_STATE,
        handleChangeOrder,
        handleClickOrder,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
