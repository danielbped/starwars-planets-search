import React, { useContext } from 'react';
import Filter from '../components/Filter';
import Table from '../components/Table';
import Loading from '../components/Loading';
import Context from '../context/Context';

function Main() {
  const { loading } = useContext(Context);

  return (
    <main>
      <Filter />
      {loading ? <Loading /> : <Table />}
    </main>
  );
}

export default Main;
