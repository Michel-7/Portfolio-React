export function smoothScroll(section, duration) {
  let target = document.querySelector(section);
  let targetPosition = target.getBoundingClientRect().top - 50;
  let startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime == null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}
