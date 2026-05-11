export default function loadBackgroudImages() {
  let backgroundImages = document.querySelectorAll("[data-background]");

  if (backgroundImages.length > 0) {
    backgroundImages.forEach((element) => {
      let image = element.dataset.background;
      element.style.backgroundImage = `url('${image}')`;
    });
  }
}
