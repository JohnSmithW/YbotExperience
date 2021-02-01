import state from '../store';
import audio from '../data/tutorial.mp3';

let interval = null;
const tutorial = new Audio(audio);
tutorial.volume = 0;

export function playTutorial() {
  tutorial.play();
}

export function replayTutorial() {
  tutorial.volume = 1;
  tutorial.play();
  tutorial.currentTime = 0;
}

export function muteTutorial() {
  if (tutorial.volume === 0) {
    tutorial.volume = 1;
    tutorial.muted = false;
  } else {
    tutorial.volume = 0;
    tutorial.muted = true;
  }
}

export default function openTutorial() {
  state.tutorial.isOpen = !state.tutorial.isOpen;
}

export function repeatTutorial() {
  if (state.startInterval) {
    interval = setInterval(() => {
      if (state.option < 8) {
        state.isHovered = true;
        state.option += 1;
      } else {
        state.option = 0;
      }
    }, 2000);

    state.startInterval = false;
  }
}

export function stopTutorial() {
  clearInterval(interval);
}

export function startTutorial() {
  setTimeout(() => {
    state.isHovered = true;
    state.option = 1;
  }, 38000);

  setTimeout(() => {
    state.isHovered = true;
    state.option = 2;
  }, 44000);

  setTimeout(() => {
    state.isHovered = true;
    state.option = 3;
  }, 48000);

  setTimeout(() => {
    state.isHovered = true;
    state.option = 4;
  }, 51000);

  setTimeout(() => {
    state.isHovered = true;
    state.option = 5;
  }, 57000);

  setTimeout(() => {
    state.isHovered = true;
    state.option = 6;
  }, 62000);

  setTimeout(() => {
    state.isHovered = true;
    state.option = 7;
  }, 65000);

  setTimeout(() => {
    state.isHovered = true;
    state.option = 8;
  }, 72000);

  setTimeout(() => {
    state.isHovered = true;
    state.option = 0;
  }, 75000);

  setTimeout(() => {
    state.option = 1;
    repeatTutorial();
  }, 80000);
}
