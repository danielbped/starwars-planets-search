import React, { useContext } from 'react';
import TableHead from './TableHead';
import Context from '../context/Context';

function Table() {
  const {
    data: { planets: { results } },
    filters: {
      filterByName: { name: filterName },
      order: { columnSort, sort },
      filterByNumericValues,
      filtered,
      sorted,
    },
  } = useContext(Context);

  const filteredByName = results.filter((result) => result.name.includes(filterName));
  const filteredByNumber = !filtered ? filteredByName
    : filteredByName.filter((item) => {
      if (filterByNumericValues.length === 0) return filteredByName;
      const { column, value, comparison } = filterByNumericValues[0];
      if (comparison === 'maior que') {
        return parseInt(item[column], 10) > parseInt(value, 10);
      }
      if (comparison === 'menor que') {
        return parseInt(item[column], 10) < parseInt(value, 10);
      }
      return parseInt(item[column], 10) === parseInt(value, 10);
    });
  const magicNumber = -1;
  const sortedItems = sorted ? filteredByNumber.sort(
    (a, b) => {
      if (sort === 'ASC') {
        return (
          (parseInt(a[columnSort], 10) > parseInt(b[columnSort], 10)
          ) ? 1 : magicNumber);
      }
      return (
        (parseInt(a[columnSort], 10) > parseInt(b[columnSort], 10)
        ) ? magicNumber : 1);
    },
  ) : filteredByNumber.sort((a, b) => ((a.name > b.name) ? 1 : magicNumber));
  return (
    <table>
      <thead>
        <TableHead />
        { sortedItems.map(({
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
            <td data-testid="planet-name">{ name }</td>
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
