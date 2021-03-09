function startPage() {
  return `
  <div></div>
  `
}

startPage.HandleClick = (el) => {
  var url = "./DCDmidterm/page1/index.html";
  location.replace(url);
}