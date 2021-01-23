import { store } from '@risingstack/react-easy-state';

const state = store({
  info: { name: null, lastName: null, organization: null },
  details: { country: null, phoneNumber: null, email: null },
});

export default state;
