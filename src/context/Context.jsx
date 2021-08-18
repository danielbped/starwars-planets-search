import { createContext } from 'react';

const Context = createContext({
  data: [],
  loading: true,
  filters: [],
});

export default Context;
