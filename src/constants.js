const FIRST_ROW = [
  {
    key: 'a8',
    color: 'white',
    text: '8',
  },
  {
    key: 'b8',
    color: 'black',
    text: '',
  },
  {
    key: 'c8',
    color: 'white',
    text: '',
  },
  {
    key: 'd8',
    color: 'black',
    text: '',
  },
  {
    key: 'e8',
    color: 'white',
    text: '',
  },
  {
    key: 'f8',
    color: 'black',
    text: '',
  },
  {
    key: 'g8',
    color: 'white',
    text: '',
  },
  {
    key: 'h8',
    color: 'black',
    text: '',
  },
]

const SECOND_ROW = [
  {
    key: 'a7',
    color: 'black',
    text: '7',
  },
  {
    key: 'a7',
    color: 'white',
    text: '',
  },
  {
    key: 'a7',
    color: 'black',
    text: '',
  },
  {
    key: 'a7',
    color: 'white',
    text: '',
  },
  {
    key: 'a7',
    color: 'black',
    text: '',
  },
  {
    key: 'a7',
    color: 'white',
    text: '',
  },
  {
    key: 'a7',
    color: 'black',
    text: '',
  },
  {
    key: 'a7',
    color: 'white',
    text: '',
  },
]

const THIRD_ROW = [
  {
    key: 'a6',
    color: 'white',
    text: '6',
  },
  {
    key: 'b6',
    color: 'black',
    text: '',
  },
  {
    key: 'c6',
    color: 'white',
    text: '',
  },
  {
    key: 'd6',
    color: 'black',
    text: '',
  },
  {
    key: 'e6',
    color: 'white',
    text: '',
  },
  {
    key: 'f6',
    color: 'black',
    text: '',
  },
  {
    key: 'g6',
    color: 'white',
    text: '',
  },
  {
    key: 'h6',
    color: 'black',
    text: '',
  },
]

const FOURTH_ROW = [
  {
    key: 'a5',
    color: 'black',
    text: '5',
  },
  {
    key: 'b5',
    color: 'white',
    text: '',
  },
  {
    key: 'c5',
    color: 'black',
    text: '',
  },
  {
    key: 'd5',
    color: 'white',
    text: '',
  },
  {
    key: 'e5',
    color: 'black',
    text: '',
  },
  {
    key: 'f5',
    color: 'white',
    text: '',
  },
  {
    key: 'g5',
    color: 'black',
    text: '',
  },
  {
    key: 'h5',
    color: 'white',
    text: '',
  },
]

const FIFTH_ROW = [
  {
    key: 'a4',
    color: 'white',
    text: '4',
  },
  {
    key: 'b4',
    color: 'black',
    text: '',
  },
  {
    key: 'c4',
    color: 'white',
    text: '',
  },
  {
    key: 'd4',
    color: 'black',
    text: '',
  },
  {
    key: 'e4',
    color: 'white',
    text: '',
  },
  {
    key: 'f4',
    color: 'black',
    text: '',
  },
  {
    key: 'g4',
    color: 'white',
    text: '',
  },
  {
    key: 'h4',
    color: 'black',
    text: '',
  },
]

const SIXTH_ROW = [
  {
    key: 'a3',
    color: 'black',
    text: '3',
  },
  {
    key: 'b3',
    color: 'white',
    text: '',
  },
  {
    key: 'c3',
    color: 'black',
    text: '',
  },
  {
    key: 'd3',
    color: 'white',
    text: '',
  },
  {
    key: 'e3',
    color: 'black',
    text: '',
  },
  {
    key: 'f3',
    color: 'white',
    text: '',
  },
  {
    key: 'g3',
    color: 'black',
    text: '',
  },
  {
    key: 'h3',
    color: 'white',
    text: '',
  },
]

const SEVENTH_ROW = [
  {
    key: 'a2',
    color: 'white',
    text: '2',
  },
  {
    key: 'b2',
    color: 'black',
    text: '',
  },
  {
    key: 'c2',
    color: 'white',
    text: '',
  },
  {
    key: 'd2',
    color: 'black',
    text: '',
  },
  {
    key: 'e2',
    color: 'white',
    text: '',
  },
  {
    key: 'f2',
    color: 'black',
    text: '',
  },
  {
    key: 'g2',
    color: 'white',
    text: '',
  },
  {
    key: 'h2',
    color: 'black',
    text: '',
  },
]

const EIGHTH_ROW = [
  {
    key: 'a1',
    color: 'black',
    text: '1a',
  },
  {
    key: 'b1',
    color: 'white',
    text: 'b',
  },
  {
    key: 'c1',
    color: 'black',
    text: 'c',
  },
  {
    key: 'd1',
    color: 'white',
    text: 'd',
  },
  {
    key: 'e1',
    color: 'black',
    text: 'e',
  },
  {
    key: 'f1',
    color: 'white',
    text: 'f',
  },
  {
    key: 'g1',
    color: 'black',
    text: 'g',
  },
  {
    key: 'h1',
    color: 'white',
    text: 'h',
  },
]

const CHESSBOARD = [
  ...FIRST_ROW,
  ...SECOND_ROW,
  ...THIRD_ROW,
  ...FOURTH_ROW,
  ...FIFTH_ROW,
  ...SIXTH_ROW,
  ...SEVENTH_ROW,
  ...EIGHTH_ROW,
]

const STATUS = {
  WIN: 'WIN',
  FAIL: 'FAIL',
}

const BOXES = [
  'a8','b8','c8','d8','e8','f8','g8','h8',
  'a7','b7','c7','d7','e7','f7','g7','h7',
  'a6','b6','c6','d6','e6','f6','g6','h6',
  'a5','b5','c5','d5','e5','f5','g5','h5',
  'a4','b4','c4','d4','e4','f4','g4','h4',
  'a3','b3','c3','d3','e3','f3','g3','h3',
  'a2','b2','c2','d2','e2','f2','g2','h2',
  'a1','b1','c1','d1','e1','f1','g1','h1',
]

const ONE_POINT = 1

export { CHESSBOARD, STATUS, BOXES, ONE_POINT }
