const todos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODO': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default todos