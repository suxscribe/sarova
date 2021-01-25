import { gsap } from 'gsap/all';

export let redParallax = () => {
  if (document.querySelector('.red-parallax')) {
    // red parallax on mouse hover
    document
      .querySelector('.red-parallax')
      .addEventListener('mousemove', (e) => {
        // parallaxIt(e, '.section-red__bottle-bg', 100);
        parallaxIt(e, '.red-parallax', '.red-parallax--1', 90);
        parallaxIt(e, '.red-parallax', '.red-parallax--2', 50);
        parallaxIt(e, '.red-parallax', '.red-parallax--3', 30);
        parallaxIt(e, '.red-parallax', '.section-red__bottle-bottle', 10);
      });
  }

  document.querySelectorAll('.red__block-bg').forEach((item) => {
    item.addEventListener('mousemove', (e) => {
      parallaxIt(e, item, '.red__block-bg-ellipse', 35);
      parallaxIt(e, item, '.red__block-bg-inner', 20);
      parallaxIt(e, item, '.red__block-bg-outer', 50);
    });
  });
  // var rect = document
  //   .querySelector('.section-red__content')
  //   .getBoundingClientRect();

  function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
  }

  function parallaxIt(e, container, target, movement) {
    var $this;
    if (!isElement(container)) {
      $this = document.querySelector(container);
    } else {
      $this = container;
    }

    var rect = $this.getBoundingClientRect();

    var relX = e.clientX - rect.left; // get mouse position relative to screen view.
    var relY = e.clientY - rect.top; //- (rect.top + window.scrollY)

    // console.log(`x: ${e.pageX}, y: ${e.pageY}`);
    // console.log(      `$this.offsetWidth: ${$this.offsetWidth}, $this.offsetHeight: ${$this.offsetHeight}`    );
    // console.log(`relX: ${relX}, relY: ${relY}`);
    // console.log(`window.scrollY: ${window.scrollY}`);

    // 873, 576
    // 873, -3000

    gsap.to(target, 1, {
      x: ((relX - $this.offsetWidth / 2) / $this.offsetWidth) * movement,
      y: ((relY - $this.offsetHeight / 2) / $this.offsetHeight) * movement,
    });
  }
};
