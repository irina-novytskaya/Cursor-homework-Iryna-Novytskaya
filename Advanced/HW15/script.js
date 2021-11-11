// base
function* generatorIndex () {
    for (let i = 1; i < Infinity; i++) {
      yield i
    }
  }
  
  let generator = generatorIndex();
  let element = document.getElementById("result1");
  document.getElementById("generate").addEventListener("click", () => {
      element.innerHTML = generator.next().value;
  })
  // advanced
function* fontGenerator(size) {
    let direction = yield size;
    while (true) {
      if (direction === "up") {
        direction = yield (size += 2);
      } else if (direction === "down") {
        direction = yield (size -= 2);
      } else {
        direction = yield size;
      }}}
  const sizeGenerator = fontGenerator(14);
  const upButton = document.getElementById("upSize");
  const result = document.getElementById("result2");
  upButton.addEventListener("click", () => {
    let fontValue = sizeGenerator.next().value;
      fontValue = sizeGenerator.next("up").value;
      result.setAttribute("style", `font-size: ${fontValue}px`);
  });
  const downButton = document.getElementById("downSize");
  downButton.addEventListener("click", () => {
    let fontValue = sizeGenerator.next().value;
      fontValue = sizeGenerator.next("down").value;
      result.setAttribute("style", `font-size: ${fontValue}px`);
  });
