const assert = require('assert')
const { S_CARD, N_CARD, C_TYPE } = require('./consts')

module.exports = class Card {
  constructor(name, type = C_TYPE.NORMAL) {
    assert.ok(name, 'name is required!')

    this._name = name
    this._type = type
    if (S_CARD[card]) {
      this._value = S_CARD[name]
    } else {
      this._value = N_CARD[name]
    }
  }

  get name () {
    return this._name
  }

  get value () {
    return this._value
  }

  get type () {
    return this._type
  }
}
