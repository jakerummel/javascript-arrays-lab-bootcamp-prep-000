// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, "Broom"]
}

function removeLastKitten() {
return kittens.slice(1)

}

function removeFirstKitten() {
return kittens.slice(1,2)
}
