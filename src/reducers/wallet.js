// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// criei meu reducer
const walletReducer = (state = INITIAL_STATE, action) => {
  const filterDelete = state.expenses.filter((expense) => expense.id !== action.payload);
  switch (action.type) {
  case 'SET_RESULT_LIST':
    return { ...state, currencies: action.payload }; // vem action fetch API
  case 'SET_TOTAL':
    return { ...state, total: action.payload };
  case 'SET_EXPENSES':
    return { ...state,
      expenses: [
        ...state.expenses, { ...action.walletState, exchangeRates: action.expenses }],
    };
  case 'DELETE_LINE_TABLE':
    return {
      ...state, expenses: filterDelete };
  default:
    return state;
  }
};

export default walletReducer;
