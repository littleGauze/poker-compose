const { C_TYPE } = require('./consts')
const Card = require('./card')

module.exports = class SpecialCard extends Card {
  constructor(name) {
    super(name, C_TYPE.SPECIAL)
  }

  get times () {
    return this._value
  }
}
