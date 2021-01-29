import state from '../store';
import audio from '../data/tutorial.mp3';

const tutorial = new Audio(audio);
tutorial.volume = 0;

export function playTutorial() {
  tutorial.play();
}

export function replayTutorial() {
  tutorial.play();
  tutorial.currentTime = 0;
}

export function muteTutorial() {
  if (tutorial.volume === 0) {
    tutorial.volume = 1;
  } else {
    tutorial.volume = 0;
  }
}

export default function openTutorial() {
  state.tutorial.isOpen = !state.tutorial.isOpen;
}

export function repeatTutorial() {
  setInterval(() => {
    if (state.option < 8) {
      state.option += 1;
    } else {
      state.option = 0;
    }
  }, 5000);
}

export function startTutorial() {
  state.option = 1;
  setTimeout(() => {}, 38000);

  setTimeout(() => {
    state.option = 2;
  }, 44000);

  setTimeout(() => {
    state.option = 3;
  }, 48000);

  setTimeout(() => {
    state.option = 4;
  }, 51000);

  setTimeout(() => {
    state.option = 5;
  }, 57000);

  setTimeout(() => {
    state.option = 6;
  }, 62000);

  setTimeout(() => {
    state.option = 7;
  }, 65000);

  setTimeout(() => {
    state.option = 8;
  }, 72000);

  setTimeout(() => {
    state.option = 0;
  }, 75000);

  setTimeout(() => {
    state.option = 1;
    repeatTutorial();
  }, 80000);
}
