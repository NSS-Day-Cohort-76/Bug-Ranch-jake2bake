const { database } = require("./database.js")

const roundup = (herdSize) => {
    let cattle = []
    let types = database.cattleTypes

    for (let counter = 0; counter < herdSize; counter++) {
        let randomType = Math.floor(Math.random() * types.length)
        let animal = types[randomType]
        cattle.push(animal)
    }
    
    return cattle
}

module.exports = { roundup }