export const setVh = () => {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // todo make --vh = 1vh on 960+
};

export const elements = {
  section1Video: document.querySelector('.section-1__bg-video'),
  section2Video: document.querySelector('.section-2__bg-video'),
};
