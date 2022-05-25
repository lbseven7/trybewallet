// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

// criei meu reducer
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_RESULT_LIST':
    return { ...state, currencies: action.payload }; // vem action fetch API
  case 'SET_TOTAL':
    return { ...state, total: action.payload };
  case 'SET_EXPENSES':
    return { ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.payload.expenses }],
      ...state.total,
      total: action.payload.total };
  default:
    return state;
  }
};

export default walletReducer;
