// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_USER':
    return { ...state, email: action.payload }; // vem da action
  default:
    return state;
  }
};

export default userReducer;
