import state from '../store';
import { popUp } from './popUp';
import sendRequest from './sendRequest';

export default async function startSMS(option) {
  if (!state.isOther) {
    if (!state.smsSent) {
      popUp(`ybot sent an SMS to ${state.details.phoneNumber}, check your device to continue`, true);
      state.smsSent = true;
      await sendRequest('/sendSms', 'POST', {
        name: state.info.name,
        surname: state.info.lastName,
        email: state.details.email,
        org: state.info.organization,
        phone: state.details.country.code + state.details.phoneNumber,
        code: state.details.country.code,
        country: state.details.country.name,
        type: option,
      }).catch(() => popUp('server error', false));

      await setTimeout(() => {
        state.smsSent = false;
      }, 10000);
    } else {
      popUp('Selections are limited to 1 every 10 seconds. Try again shorty.', false);
    }
  } else {
    await sendRequest('/sendSms', 'POST', {
      name: state.info.name,
      surname: state.info.lastName,
      email: state.details.email,
      org: state.info.organization,
      phone: state.details.country.code + state.details.phoneNumber,
      code: state.details.country.code,
      country: state.details.country.name,
      type: option,
    });
  }
}
