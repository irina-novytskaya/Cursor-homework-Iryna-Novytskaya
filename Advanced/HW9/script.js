const generateBlocks = (num) => {
    for (let i = 1; i <= num; i++) {
       const div = document.createElement('div');
       const container = document.querySelector('.container')
       div.classList.add('square')
       container.prepend(div)
    }
 }
 generateBlocks(25);
 
 const getRandomColor = () => {
    let r = Math.trunc(Math.random() * 255)
    let g = Math.trunc(Math.random() * 255)
    let b = Math.trunc(Math.random() * 255)
    return randomColor = `rgb(${r}, ${g}, ${b})`
 };
 
 
 function generateBlocksInterval() {
 
    const getRandomColorsForSquares = () => {
       const squares = document.querySelectorAll('.square')
 
       for (let square of squares) {
          square.style.backgroundColor = getRandomColor()
       };
    }
 
    setInterval(() => {
       getRandomColorsForSquares()
    }, 1000)
 }
 
 
 generateBlocksInterval()