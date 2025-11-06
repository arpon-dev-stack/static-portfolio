window.addEventListener("scroll", () => {
  const htmlEle = document.documentElement;
  const scrollTop = Math.round(htmlEle.scrollTop) ;
  const viewportHeight = htmlEle.clientHeight;
  const htmlEleHeight = htmlEle.scrollHeight;
  const possibleScroll = htmlEleHeight - viewportHeight;
  const imgId = document.getElementById('portImg');
  let progress = 0;

  progress = (scrollTop / possibleScroll) * 100;
  imgId.style.transform = `rotate(${360 * (progress / 100) * 7}deg)`;
});
