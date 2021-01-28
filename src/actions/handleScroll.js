import state from '../store';

export default async function handleScroll() {
  if (window.innerHeight + 50 + window.scrollY >= document.body.offsetHeight) {
    state.isScrolled = true;
    console.log(1);
  } else {
    state.isScrolled = false;
    console.log(2);
  }
}
