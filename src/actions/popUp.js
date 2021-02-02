import state from '../store';

export default function closePopUp() {
  state.popUp.isOpen = false;
}

export function popUp(text, type) {
  state.popUp.isOpen = true;
  state.popUp.text = text;
  state.popUp.type = type;
}

export function warningPopUp(id) {
  if (id === 3) {
    popUp(
      'We are adding new locations to the ybot experience demo based on demand. We will contact you to arrange a live demo.',
      false,
    );

    state.isOther = true;
  } else {
    state.isOther = false;
    state.popUp.isOpen = false;
  }
}
