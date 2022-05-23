// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {

  currencies: [],
  expenses: [],

};

// criei meu reducer
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case 'SET_WALLET':
  //   return { ...state, wallet: action.payload }; // vem da action
  case 'SET_RESULT_LIST':
    return { ...state, currencies: state.payload }; // vem action fetch API
  default:
    return state;
  }
};

export default walletReducer;
