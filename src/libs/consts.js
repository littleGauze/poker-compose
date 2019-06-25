const N_CARD = (() => ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].reduce(
    (res, it, idx) => Object.assign(res, { [it]: idx }), {})
)()

const S_CARD = {
  ST4: 4,
  ST2: 2,
  EX: 1
}

const C_COUNT = {
  ST4: 2,
  ST2: 4,
  EX: 8,
  NC: 4,
  C_SHUFFLE: 5
}

const C_TYPE = {
  NORMAL: 'normal',
  SPECIAL: 'special'
}

const C_CATE = {
  SPADE: 4,
  HEARTS: 3,
  PLUM_BLOSSOM: 2,
  DIAMONDS: 1
}

module.exports = { N_CARD, S_CARD, C_COUNT, C_TYPE, C_CATE }
