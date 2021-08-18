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
    name: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFilters({ ...filters, [name]: value });
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
    <Context.Provider value={ { data, handleChange, filters } }>
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
