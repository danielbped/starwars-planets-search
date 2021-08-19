import React, { useContext } from 'react';
import Context from '../context/Context';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';

function Filter() {
  const {
    handleChangeName,
    handleChangeValues,
    handleClickFilter,
  } = useContext(Context);

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={ (e) => handleChangeName(e) }
        placeholder="Digite para buscar"
        data-testid="name-filter"
      />
      <SelectColumn />
      <SelectComparison />
      <input
        type="number"
        name="value"
        placeholder="Digite um número"
        data-testid="value-filter"
        onChange={ (e) => handleChangeValues(e) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClickFilter() }
      >
        Aplicar Filtro
      </button>
    </div>
  );
}

export default Filter;
