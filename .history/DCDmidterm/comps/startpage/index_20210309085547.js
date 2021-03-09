function startPage() {
  return `
  <div onclick='startPage.HandleClick(this)' id="button">Let's start</div>
  `
}

startPage.HandleClick = (el) => {
  var url = "./DCDmidterm/page1/index.html";
  location.replace(url);
}