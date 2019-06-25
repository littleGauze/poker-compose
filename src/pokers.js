
const NormalCard = require('./libs/normalCard')
const SpecialCard = require('./libs/specialCard')
const { C_COUNT, N_CARD, S_CARD, C_CATE } = require('./libs/consts')

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
      for (let [cate] of Object.entries(C_CATE)) {
        this[sCards].push(...Object.keys(N_CARD).map((name) => new NormalCard(name, cate)))
      }
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
    for (let n = 0; n < this._count; n++) {
      for (let i = 0; i < len; i++) {
        const idx = getRandomIdx(len)
        const tmp = this[sCards][i]
        this[sCards][i] = this[sCards][idx]
        this[sCards][idx] = tmp
      }
    }
  }

  getCards (count = 1) {
    return this[sCards].splice(0, count)
  }

}

function getRandomIdx (len) {
  return Math.floor(Math.random() * len)
}
