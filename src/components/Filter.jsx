import React, { useContext } from 'react';
import Context from '../context/Context';

function Filter() {
  const { handleChange } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={ (e) => handleChange(e) }
        placeholder="Digite para buscar"
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filter;
