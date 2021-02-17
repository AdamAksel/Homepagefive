const adminReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADMIN':
      return (state = action.payload)
    default:
      return state
  }
}

export default adminReducer
