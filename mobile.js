const isMobile = window.matchMedia("(max-width: 768px)").matches;
const previouslyAcknowledgedMobileAlert =
  localStorage.getItem("previouslyAcknowledgedMobileAlert") || false;

if (isMobile && !previouslyAcknowledgedMobileAlert) {
  alert(
    "Hey! It looks like you're using a mobile device. Just so you know, the solarskripts website might not look quite right on mobile devices and we're actively looking for ways to improve your experience. (Not using a mobile device? Please let us know via email solarskripts@gmail.com!)"
  );

  localStorage.setItem("previouslyAcknowledgedMobileAlert", true);
}
