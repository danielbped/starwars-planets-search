import React, { useContext } from 'react';
import TableHead from './TableHead';
import Context from '../context/Context';

function Table() {
  const {
    data: { planets: { results } },
    filters: { name: filterName },
  } = useContext(Context);

  const filteredResults = results.filter((result) => result.name.includes(filterName));
  return (
    <table>
      <thead>
        <TableHead />
        { filteredResults.map(({
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }) => (
          <tr key={ name }>
            <td>{ name }</td>
            <td>{ rotationPeriod }</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{ gravity }</td>
            <td>{ terrain }</td>
            <td>{ surfaceWater }</td>
            <td>{ population }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>
        ))}
      </thead>
    </table>
  );
}

export default Table;
