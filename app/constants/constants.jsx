export const canvasHeight = 800;
export const canvasWidth = 800;
export const spriteWidth = 100;
export const spriteHeight = 100;

const range = (len) => {
  const arr = []
  for (var i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}


const GRID_SIZE = canvasHeight / 8;
export const VERTICALGRID = range(7).map(i => {
  return [GRID_SIZE * (i + 1), i, GRID_SIZE * (i + 1), canvasHeight]
})

export const HORIZONTALGRID = range(7).map(i => {
  return [0, GRID_SIZE * (i + 1), canvasWidth, GRID_SIZE * (i + 1)]
})
//
// export const VERTICALGRID =  [[225, 0, 225, canvasHeight], [450, 0, 450, canvasHeight], [675, 0, 675, canvasHeight], [900, 0, 900, canvasHeight], [1125, 0, 1125, canvasHeight], [1350, 0, 1350, canvasHeight], [1575, 0, 1575, canvasHeight]];
//  export const HORIZONTALGRID = [[0, 225, canvasWidth, 225], [0, 450, canvasWidth, 450], [0, 675, canvasWidth, 675], [0, 900, canvasWidth, 900], [0, 1125, canvasWidth, 1125], [0, 1350, canvasWidth, 1350], [0, 1575, canvasWidth, 1575]];
