import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Chess } from './Chess'

beforeEach(() => {
  jest.spyOn(global.Math, 'random')
  .mockReturnValueOnce(0.5)
  .mockReturnValueOnce(0.4)
})

test('should see the chessboard', () => {
  render(<Chess />)

  const chessboard = screen.getByLabelText('Chessboard')

  expect(chessboard).toBeInTheDocument()
})

test('should see the boxes', () => {
  render(<Chess />)

  const boxes = screen.getAllByRole('button')

  expect(boxes).toHaveLength(64)
})

test('should have the boxes identifiers', () => {
  render(<Chess />)

  const chessboard = screen.getByLabelText('Chessboard')
  screen.getByLabelText('a4')

  expect(chessboard).toHaveTextContent('87654321abcdefgh')
})

test('should see the box to search', () => {
  render(<Chess />)

  const searchBox = screen.getByText('To search: a4')

  expect(searchBox).toBeInTheDocument()
  expect(screen.queryByText('Win!!!')).not.toBeInTheDocument()
})

test('should press the correct box and see the win message', () => {
  render(<Chess />)

  const searchBox = screen.getByText('To search: a4')
  const correctBox = screen.getByLabelText('a4')
  userEvent.click(correctBox)

  expect(searchBox).toBeInTheDocument()
  expect(screen.getByText('Win!!!')).toBeInTheDocument()
})

test('should press the fail box and see the fail message', () => {
  render(<Chess />)

  const searchBox = screen.getByText('To search: a4')
  const failBox = screen.getByLabelText('c1')
  userEvent.click(failBox)

  expect(searchBox).toBeInTheDocument()
  expect(screen.getByText('Fail!!!')).toBeInTheDocument()
})

test('should reset the game when fail', () => {
  render(<Chess />)

  const failBox = screen.getByLabelText('c1')
  userEvent.click(failBox)
  const differentSearchBox = screen.getByText('To search: b5')

  expect(differentSearchBox).toBeInTheDocument()
})

test('should reset the game when win', () => {
  render(<Chess />)

  const correctBox = screen.getByLabelText('a4')
  userEvent.click(correctBox)
  const differentSearchBox = screen.getByText('To search: b5')

  expect(differentSearchBox).toBeInTheDocument()
})

test('should see the score initialized', () => {
  render(<Chess />)

  const score = screen.getByText('The score: 0')

  expect(score).toBeInTheDocument()
})

test('should increment the score when win', () => {
  render(<Chess />)

  const correctBox = screen.getByLabelText('a4')
  userEvent.click(correctBox)

  expect(screen.getByText('The score: 1')).toBeInTheDocument()
})

test('should decrement the score when fail', () => {
  render(<Chess />)

  userEvent.click(screen.getByLabelText('a4'))
  userEvent.click(screen.getByLabelText('b5'))
  userEvent.click(screen.getByLabelText('c1'))

  expect(screen.getByText('The score: 1')).toBeInTheDocument()
})
