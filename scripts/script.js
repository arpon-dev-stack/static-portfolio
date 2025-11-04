window.addEventListener("scroll", () => {
  const scrollDoc = document.documentElement;
  const maxScroll = scrollDoc.scrollHeight - scrollDoc.clientHeight;
  const scrollTop = Math.round(scrollDoc.scrollTop);
  const imgId = document.getElementById('intro');
  const imgIdWidth = parseFloat(window.getComputedStyle(imgId).width);
  const playAble = scrollDoc.clientWidth - imgIdWidth;
//   console.log(`scrollHeight ${scrollTop.scrollHeight}`); //element height
//   console.log(` clientWidth ${scrollDoc.clientWidth}`); //viewport width without scrollbar
//   console.log(`innerWidth ${window.innerWidth}`); //viewport width with scrollbar
//   console.log(`scrollTop ${Math.round(scrollTop.scrollTop)}`); //scroll from top
let progress = 0;
if (maxScroll > 0) {
    progress = (scrollTop / maxScroll) * 100;
}
progress = Math.min(100, Math.max(0, progress));

// console.log(progress);
let transform = 0;

if (playAble) {
    transform = playAble * (progress / 100);
// console.log(transform);
}
transform = Math.min(playAble, Math.max(0, transform));

console.log(transform);

imgId.style.translate = transform + 'px';
});
