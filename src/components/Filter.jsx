import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import FilterRemove from './FilterRemove';

function Filter() {
  const {
    handleChangeName,
    handleClickFilter,
  } = useContext(Context);

  const FILTER_INITIAL_STATE = {
    column: 'population',
    comparison: 'maior que',
    value: '',
  };

  const OPTIONS_INITIAL_STATE = [
    { name: 'population', value: 'population' },
    { name: 'orbital_period', value: 'orbital_period' },
    { name: 'diameter', value: 'diameter' },
    { name: 'rotation_period', value: 'rotation_period' },
    { name: 'surface_water', value: 'surface_water' },
  ];

  const [filter, setFilter] = useState(FILTER_INITIAL_STATE);

  const [selectOptions, setSelectOptions] = useState(OPTIONS_INITIAL_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setFilter({ ...filter, [name]: value });
  };

  const resetOptions = () => setSelectOptions(OPTIONS_INITIAL_STATE);

  const handleClick = () => {
    if (filter.value !== '') {
      handleClickFilter(filter);
      setSelectOptions(selectOptions.filter((option) => option.name !== filter.column));
    }
  };

  return (
    <section>
      <div>
        <input
          type="text"
          name="name"
          onChange={ (e) => handleChangeName(e) }
          placeholder="Digite para buscar"
          data-testid="name-filter"
        />
        <SelectColumn options={ selectOptions } onChange={ (e) => handleChange(e) } />
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
          onClick={ () => handleClick() }
        >
          Aplicar Filtro
        </button>
      </div>
      <FilterRemove onClick={ resetOptions } />
    </section>
  );
}

export default Filter;
