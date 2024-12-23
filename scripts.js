const img = document.querySelector("#about.content img");

img.addEventListener("click", () => {
  const newImage = document.querySelector("images/Profile.jpeg");
  img.src = newImage.src;
});


