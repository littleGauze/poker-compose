const assert = require('assert')
const { C_TYPE, C_CATE } = require('./consts')
const Card = require('./card')

module.exports = class NormalCard extends Card {
  constructor(name, cate) {
    super(name, C_TYPE.NORMAL)
    assert.ok(cate, 'cate is required!')

    if (C_CATE[cate]) {
      this._cate = { name: cate, value: C_CATE[cate] }
    }
  }

  get cate () {
    return this._cate.name
  }

  get cateValue () {
    return this._cate.value
  }
}
