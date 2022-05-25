import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, setExpenses } from '../actions';
// import userReducer from '../reducers/user';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      exchangeRates: {},
    };
  }

  async componentDidMount() {
    const { coinAPI } = this.props;
    coinAPI();
    await this.fetchCoin();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // Requisito 06
  addDespesa = async () => {
    const { total, currency, exchangeRates, value } = this.state;
    const { addExpenses } = this.props;
    const sun = total + (exchangeRates[currency].ask * value);

    this.setState({
      total: Number(sun.toFixed(2)),
    }, () => addExpenses(this.state));

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    });
  }

  fetchCoin = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    this.setState({
      exchangeRates: result,
    });
  }

  render() {
    const { userEmail, currencies } = this.props;
    const { tag, method, currency, value, description } = this.state;
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">
          {userEmail}
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>

        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="number"
            value={ value }
            name="value"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >
            {currencies && currencies.map((coin, index) => (
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
          Método de pagamento
          <select
            id="pagamento"
            value={ method }
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
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="select"
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // retorna um objeto
  userEmail: state.user.email,
  currencies: state.wallet.currencies, //
  userTotal: state.user.total,
});

const mapDispatchToProps = (dispatch) => ({
  coinAPI: () => dispatch(fetchCurrencies()),
  addExpenses: (expense) => dispatch(setExpenses(expense)),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func,
  userWallet: PropTypes.array,
  userReducer: PropTypes.object,
}.isRequired;

// export default Wallet;
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
