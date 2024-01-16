function revealPassword() {
  const eyes = document.querySelectorAll(".visibility");

  eyes.forEach((eye) => {
    const target = document.querySelector(`#${eye.dataset.target}`);

    eye.addEventListener("mouseover", () => {
      target.type = "text";
    });

    eye.addEventListener("mouseleave", () => {
      target.type = "password";
    });
  });
}

export default revealPassword;
