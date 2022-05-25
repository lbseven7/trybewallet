import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, fetchExpenses } from '../actions';
// import userReducer from '../reducers/user';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    };
  }

  componentDidMount() {
    const { coinAPI } = this.props;
    coinAPI();
  }

  // Requisito 06
  addDespesa = () => {
    const { expenseUser } = this.props;
    expenseUser(this.state);

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
    }));
  }

  calculateTotal = (expenses) => {
    let total = 0;
    expenses.forEach((despesa) => {
      total += (despesa.value * despesa.exchangeRates[despesa.currency].ask);
    });
    return total;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { userEmail, currencies, walletExpense } = this.props;
    const { value, description, method, tag, currency } = this.state;
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">
          {userEmail}
          <p data-testid="header-currency-field">BRL</p>
          <p data-testid="total-field">
            {this.calculateTotal(walletExpense)
              .toFixed(2) || 0}
          </p>
        </header>

        <form>
          <label htmlFor="valor">
            Valor:
            <input
              id="valor"
              type="number"
              value={ value }
              name="value"
              data-testid="value-input"
              onChange={ this.handleChange } /* */
            />
          </label>

          <label htmlFor="moeda">
            Moeda:
            <select
              id="moeda"
              type="select"
              value={ currency }
              name="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {currencies.map((coin, index) => (
                <option
                  value={ coin }
                  key={ index }
                >
                  {coin}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="pagamento">
            Método de pagamento:
            <select
              value={ method }
              id="pagamento"
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="dropdown">
            <select
              id="dropdown"
              value={ tag }
              type="select"
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <label htmlFor="labelFor">
            Descrição:
            <input
              id="labelFor"
              type="text"
              value={ description }
              name="description"
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            onClick={ this.addDespesa }
          >
            Adicionar despesa
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currency}</td>
              <td>qual valor?</td>
              <td>{currencies.name}</td>
              <td>Real</td>
            </tr>
          </tbody> */}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // retorna um objeto
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  userTotal: state.wallet.total,
  walletExpense: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  coinAPI: () => dispatch(fetchCurrencies()),
  expenseUser: (expense) => dispatch(fetchExpenses(expense)),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func,
  userWallet: PropTypes.array,
  userReducer: PropTypes.object,
}.isRequired;

// export default Wallet;
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
