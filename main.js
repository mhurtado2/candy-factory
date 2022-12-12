

const createChocolateBar = () => {
    // Create a new object. No properties yet.
    const newChocolateBar = {
        isYummy : true
    }

    return newChocolateBar
}

let chocolateBar = createChocolateBar()

//Buy some milk chocolate
const buyChocolate = () => {
    // add type of milk chocolate
    chocolateBar.type = 'milk Chocolate'
    // return bar
    return chocolateBar
}

//Add some mint flavoring

const addFlavoring = (chocolateBar) => {
    // add type of milk chocolate
    chocolateBar.flavor = 'mint'
    // return bar
    return chocolateBar
}

//Combine the chocolate and mint
const makeBarkMixture = (chocolateBar) => {
    // add an if statement to see if flavor is mint or not
    if (chocolateBar.flavor === 'mint') {
        chocolateBar.newMixed = true
    }
    else {
        chocolateBar.newMixed = false
    }
    // return bar
    return chocolateBar
}

//Bake the mixture
const bakeCandy = (chocolateBar) => {
    // add an if statement to see if newMixed is true or false
   // for (const mix of newMixed) {
        if (chocolateBar.newMixed === true) {
            chocolateBar.baked = true
        }
        else {
            chocolateBar.baked = false
        }
    
    // return bar
    return chocolateBar
}


// make an array that has milk cho bark 6 times
const mintChocolateBark = ["Milk Chocolate Bark Piece", "Milk Chocolate Bark Piece", "Milk Chocolate Bark Piece", "Milk Chocolate Bark Piece", "Milk Chocolate Bark Piece", "Milk Chocolate Bark Piece"]

//Break the hardened sheet into 6 pieces

const breakBark = (chocolateBar) => {
    // if baked property is true,
    // function should return new array with 6 strings
    // each string should be "Mint Chocolate Bark Piece"
    // if baked is false should return nothing 
   // for (const bake of baked) {
        if (chocolateBar.baked === true) {
        console.log(mintChocolateBark)
        }
        else {
            return []
        }
    
    // return bar
    return chocolateBar
}

const enjoyChocolate = (chocolateBar) => {
    if (chocolateBar.baked === true) {
        console.log('Yummmmmmm')
        }
    return chocolateBar
}


// 🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!

console.log(chocolateBar)


let buyChocolateBar = buyChocolate(chocolateBar)
console.log(buyChocolateBar)

let flavoring = addFlavoring(chocolateBar)
console.log(flavoring)

let barkMixture = makeBarkMixture(chocolateBar)
console.log(barkMixture)

let bakeCandyYo = bakeCandy(chocolateBar)
console.log(bakeCandyYo)

let breakThatBark = breakBark(chocolateBar)
console.log(bakeCandyYo)

let yummmmm = enjoyChocolate(chocolateBar)