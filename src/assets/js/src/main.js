import navigationMouseLeave from './modules/nav-links-mouseleave';
import headerTilt from './modules/headerTilt';
import withParallax from './modules/withParallax';
import pins from './modules/pins';
import fixedNavScrollTo from './modules/fixedNavScrollTo';

window.addEventListener("DOMContentLoaded", function () {
  navigationMouseLeave();
  headerTilt();
  withParallax();
  pins();
  fixedNavScrollTo();
});
