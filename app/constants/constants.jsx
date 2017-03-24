export const canvasHeight = 800;
export const canvasWidth = 800;
export const spriteWidth = canvasWidth / 8;
export const spriteHeight = canvasHeight / 8;

const range = (len) => {
 const arr = []
 for (var i = 0; i < len; i++) {
   arr.push(i)
 }
 return arr
}

const GRID_SIZE = canvasHeight / 8;
export const VERTICALGRID = range(7).map(i => {
 return [GRID_SIZE * (i + 1), 0, GRID_SIZE * (i + 1), canvasHeight]
})

export const HORIZONTALGRID = range(7).map(i => {
 return [0, GRID_SIZE * (i + 1), canvasWidth, GRID_SIZE * (i + 1)]
})
