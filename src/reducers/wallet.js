// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  email: '',
  wallet: '',
};

// criei meu reducer
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_USER':
    return { ...state, email: action.payload }; // vem da action
  case 'SET_WALLET':
    return { ...state, wallet: action.payload }; // vem da action
  default:
    return state;
  }
};

export default walletReducer;
