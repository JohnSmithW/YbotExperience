import state from '../store';

export default function closePopUp() {
  state.popUp.isOpen = false;
}

export function popUp(text, type) {
  state.popUp.isOpen = true;
  state.popUp.text = text;
  state.popUp.type = type;
}
