export function If (condition) {
 if (condition) {

 }
}

export function For (start, end, operator) {
  let i;
  if (operator === 'less') {
    for (i = start; i < end; i++) {

    }
  }
  else if (operator === 'greater') {
    for (i = start; i > end; i--) {

    }
  }
}

//Does it make more sense to use callbacks as paremters to these functions that do most of the work?
//Perhaps these functions are objects with callback properties set to a series of other commands with callback properties?
export default function While (condition) {
  while (condition) {

  }
}
