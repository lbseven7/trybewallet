// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// criei meu reducer
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_RESULT_LIST':
    return { ...state, currencies: action.payload }; // vem action fetch API
  default:
    return state;
  }
};

export default walletReducer;
