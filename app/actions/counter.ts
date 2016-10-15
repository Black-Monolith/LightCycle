export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = () => ({
  type: 'DECREMENT'
})

export const incrementAsync = () => dispatch => {
  setTimeout(() =>
    dispatch(increment()), 1000)
}
