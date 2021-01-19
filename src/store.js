import { store } from '@risingstack/react-easy-state';

const state = store({
  info: { name: null, lastName: null, organization: null },
});

export default state;
