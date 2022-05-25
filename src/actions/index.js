// Coloque aqui suas actions
export const setUserEmail = (email) => ({
  type: 'SET_USER',
  payload: email,
});

export const setResultFetch = (currencies) => ({
  type: 'SET_RESULT_LIST',
  payload: currencies, // terá um array com a lista
});

export const setTotal = (total) => ({
  type: 'SET_TOTAL',
  payload: total,
});

export const setExpenses = (expense) => ({
  type: 'SET_EXPENSES',
  payload: expense,
});

// o thunk permite que se faça esse dispatch
export const fetchCurrencies = () => async (dispatch) => { // action do fetch
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json(); // pega o resultado do fetch
    // recebe um objeto e tranforma num array para poder filtrar
    dispatch(setResultFetch(result));
  } catch (error) {
    console.log(error);
  }
};
