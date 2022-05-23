import { combineReducers } from 'redux';
import user from './user'; // qualquer nome será seu reducer aqui
import wallet from './wallet';
// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.

const rootReducer = combineReducers({ user, wallet }); // qualquer nome será seu reducer aqui

export default rootReducer;
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
