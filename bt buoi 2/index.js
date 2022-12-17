const arr1 = [1,2,4,5,6]
const arr2 = [1,6,8,9,0]

function isNotInArr1(elt) {
  return arr1.includes(elt)
}

console.log(arr2.filter(isNotInArr1))
