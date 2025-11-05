window.addEventListener("scroll", () => {
  const htmlEle = document.documentElement;
  const scrollTop = Math.round(htmlEle.scrollTop) ;
  const viewportHeight = htmlEle.clientHeight;
  const htmlEleHeight = htmlEle.scrollHeight;
  const possibleScroll = htmlEleHeight - viewportHeight;
  let progress = 0;

  progress = (scrollTop / possibleScroll) * 100;
  console.log(progress);
});
