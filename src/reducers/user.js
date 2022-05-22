// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_USER_EMAIL':
    return { ...state, email: action.payload }; // vem da action
  case 'SET_RESULT_LIST':
    return { ...state, currencies: state.payload }; // vem action fetch API
  case 'SET_USER_EXPENSES':
    return { ...state, expenses: action.payload }; // vem da action
  default:
    return state;
  }
};
export default userReducer;
