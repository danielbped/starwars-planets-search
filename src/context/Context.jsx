import { createContext } from 'react';

const Context = createContext({
  data: [],
  loading: true,
});

export default Context;
