const imgId = document.getElementById("portImg");
const imgContainer = document.getElementById("intro");
const img_name = document.getElementById("intro_name");

// portfolio image hover effect


imgContainer.addEventListener("mouseenter", () => {
  img_name.style.display = 'block';
});
imgContainer.addEventListener("mouseleave", () => {
  console.log("hover over");
  img_name.style.display = 'none';
});

window.addEventListener("scroll", () => {
  const htmlEle = document.documentElement;
  const scrollTop = Math.round(htmlEle.scrollTop);
  const viewportHeight = htmlEle.clientHeight;
  const htmlEleHeight = htmlEle.scrollHeight;
  const possibleScroll = htmlEleHeight - viewportHeight;
  let progress = 0;

  progress = (scrollTop / possibleScroll) * 100;

  imgId.style.transform = `rotate(${((360 * (progress / 100)) * 7)}deg)`;
});

