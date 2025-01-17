// HINT: You can delete this console.log after you no longer need it!
function updateGingerbread(displayGingerbread) {
    let gb = document.getElementById('qty-gb')
    gb.innerHTML = displayGingerbread
}
function updateChocolateChip(displayChocolateChip) {
    let cc = document.getElementById('qty-cc')
    cc.innerHTML = displayChocolateChip
}
function updateSugarSprinkle(displaySugarSprinkle) {
    let sugar = document.getElementById('qty-sugar')
    sugar.innerHTML = displaySugarSprinkle
}
function updateTotal(displayTotal) {
    let total = document.getElementById('qty-total')
    total.innerHTML = displayTotal
}

// First, tell us your name
let yourName = "Andres Diaz" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
// Buttons


// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function(){
    gb++
    updateGingerbread(`${gb}`)
})
document.getElementById('minus-gb').addEventListener('click', function(){
if (gb > 0) {
    gb--
}
updateGingerbread(`${gb}`)
})
// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('minus-cc').addEventListener('click', function(){
    if (cc > 0) {
        cc--
    }
    updateChocolateChip(`${cc}`)
})

document.getElementById('add-cc').addEventListener('click', function(){
    cc++
    updateChocolateChip(`${cc}`)
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    if (sugar > 0) {
        sugar--
    }
    updateSugarSprinkle(`${sugar}`)
})

document.getElementById('add-sugar').addEventListener('click', function(){
    sugar++
    updateSugarSprinkle(`${sugar}`)
})

// total attempt

document.getElementById('add-sugar').addEventListener('click', function(){
    total++
    updateTotal(`${total}`)
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    if (total > 0) {
        total--
    }
    updateTotal(`${total}`)
})

document.getElementById('minus-cc').addEventListener('click', function(){
    if (total > 0) {
        total--
    }
    updateTotal(`${total}`)
})

document.getElementById('add-cc').addEventListener('click', function(){
    total++
    updateTotal(`${total}`)
})

document.getElementById('add-gb').addEventListener('click', function(){
    total++
    updateTotal(`${total}`)
})

document.getElementById('minus-gb').addEventListener('click', function(){
    if (total > 0) {
        total--
    }
    updateTotal(`${total}`)
    })