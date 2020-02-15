


const users = (state = ['Sam','Jack','Johdan'], action) => {
    console.log('[App1 Reducer] - User Reducers enter.......!!!!!!!!!!!!!!!!.....',state)
    switch (action.type) {
      case 'ADD_USER':
        return [
          ...state,
          action.text
        ]
      default:
        return state
    }
  }
  
  export default users
  