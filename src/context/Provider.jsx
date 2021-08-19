import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const API_URL = 'https://swapi.dev/api/planets/';

function Provider({ children }) {
  const [data, setData] = useState({
    planets: [],
    loading: true,
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: 'population',
      comparison: 'bigger',
      value: '',
      filtered: false,
    },
  });

  const handleChangeName = ({ target: { name, value } }) => {
    setFilters({ ...filters, filterByName: { [name]: value } });
  };

  const handleChangeValues = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues, [name]: value } });
  };

  const handleClickFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues, filtered: true } });
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
      value={ { data, handleChangeName, filters, handleChangeValues, handleClickFilter } }
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
