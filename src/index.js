const Pokers = require('./pokers')

const poker = new Pokers()

poker.shuffle()

console.log(poker.getCards(8))
