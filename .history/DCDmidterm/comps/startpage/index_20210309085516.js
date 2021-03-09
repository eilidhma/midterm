function startPage() {
  return `
  <div id="">Let's start</div>
  `
}

startPage.HandleClick = (el) => {
  var url = "./DCDmidterm/page1/index.html";
  location.replace(url);
}