import React, { useContext } from 'react';
import TableHead from './TableHead';
import Context from '../context/Context';

const sortItems = (sorted, filteredByNumber, columnSort, sort) => {
  const magicNumber = -1;
  const sortedItems = sorted ? filteredByNumber.sort(
    (a, b) => {
      const acc = parseInt(a[columnSort], 10);
      const curr = parseInt(b[columnSort], 10);
      switch (sort) {
      case 'ASC':
        return (acc > curr) ? 1 : magicNumber;
      default:
        return (acc > curr) ? magicNumber : 1;
      }
    },
  ) : filteredByNumber.sort((a, b) => ((a.name > b.name) ? 1 : magicNumber));
  return sortedItems;
};

const filterByNumber = (filtered, filteredByName, filterByNumericValues) => {
  const filteredByNumberResults = !filtered ? filteredByName
    : filteredByName.filter((item) => {
      if (filterByNumericValues.length === 0) return filteredByName;
      const { column, value, comparison } = filterByNumericValues[0];
      const itemNumber = parseInt(item[column], 10);
      const valueNumber = parseInt(value, 10);
      switch (comparison) {
      case 'maior que':
        return itemNumber > valueNumber;
      case 'menor que':
        return itemNumber < valueNumber;
      default:
        return itemNumber === valueNumber;
      }
    });
  return filteredByNumberResults;
};

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

  const filteredByName = results.filter(({ name }) => name.includes(filterName));
  const filteredByNumber = filterByNumber(
    filtered, filteredByName, filterByNumericValues,
  );

  return (
    <table>
      <thead>
        <TableHead />
        { sortItems(sorted, filteredByNumber, columnSort, sort).map(({
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
