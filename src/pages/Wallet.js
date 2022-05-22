import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import userReducer from '../reducers/wallet';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    // const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { userEmail, userWallet } = this.props;
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">{userEmail}</header>
        <p data-testid="total-field">{}</p>
        <p data-testid="header-currency-field">{}</p>

        <label htmlFor="valor">
          Valor:
          <input id="valor" type="number" data-testid="value-input" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select id="moeda" data-testid="method-input">
            <option>{userWallet}</option>
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="dropdown">
          <select id="dropdown" data-testid="tag-input">
            <option> </option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição
          <input id="description" type="select" data-testid="description-input" />
        </label>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // retorna um objeto
  userEmail: state.user.email,
  userWallet: state.wallet.currencies, // não vai
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func,
  userWallet: PropTypes.array,
}.isRequired;

// export default Wallet;
export default connect(mapStateToProps, null)(Wallet);
