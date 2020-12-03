export const setVh = () => {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // todo make --vh = 1vh on 960+
};

export const elements = {
  section1Video: document.querySelector('.section-1__bg-video'),
  section2Video: document.querySelector('.section-2__bg-video'),
  preloader: document.querySelector('.preloader'),
};

// Fade the page out when click on a link
export const pageFadeOut = () => {
  document.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      event.preventDefault();
      elements.preloader.classList.remove('preloader--hidden');
      // need to wait for animation to finish
      window.location = event.target.href;

      // console.log(event.target);
    }
  });
};

export const hidePreloader = () => {
  elements.preloader.classList.add('preloader--hidden');
};
