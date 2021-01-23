import state from '../store';
import sendRequest from './sendRequest';

export default async function sendUserInfo() {
  await sendRequest('/info', 'POST', {
    name: state.info.name,
    lastName: state.info.lastName,
    organization: state.info.organization,
    details: state.details,
  });
}
