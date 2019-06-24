
const Card = require('./libs/card')
const SpecialCard = require('./libs/specialCard')
const { C_COUNT, N_CARD, S_CARD } = require('./libs/consts')

const sCards = Symbol('#cards')

module.exports = class Pokers {
  constructor(count = C_COUNT.C_SHUFFLE) {
    this[sCards] = []
    this._count = count
  
    this.init()
  }

  get left () {
    return this[sCards].length
  }

  init () {
    // create 4 times normal cards
    for (let i = 0; i < C_COUNT.NC; i++) {
      this._cards.push(...Object.keys(N_CARD).map((name) => new Card(name)))
    }

    // create special cards
    Object.keys(S_CARD).forEach(name => {
      for (let i = 0; i < C_COUNT[name]; i++) {
        this[sCards].push(new SpecialCard(name))
      }
    })
  }

  // shuffle cards with ${this._count} times
  shuffle () {
    const len = this[sCards].length
    const idx = getRandomIdx(len)
    for (let i = 0; i < this._count; i++) {
      const tmp = this[sCards][i]
      this[sCards][i] = this[sCards][idx]
      this[sCards][idx] = tmp
    }
  }

  getCards (count = 1) {
    return this[sCards].splice(0, count)
  }

}

function getRandomIdx (len) {
  return Math.floor(Math.random() * len)
}
