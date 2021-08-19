import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';

function Filter() {
  const {
    handleChangeName,
    handleClickFilter,
  } = useContext(Context);

  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={ (e) => handleChangeName(e) }
        placeholder="Digite para buscar"
        data-testid="name-filter"
      />
      <SelectColumn onChange={ (e) => handleChange(e) } />
      <SelectComparison onChange={ (e) => handleChange(e) } />
      <input
        type="number"
        name="value"
        placeholder="Digite um número"
        data-testid="value-filter"
        onChange={ (e) => handleChange(e) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClickFilter(filter) }
      >
        Aplicar Filtro
      </button>
    </div>
  );
}

export default Filter;
