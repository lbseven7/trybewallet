import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
// import userReducer from '../reducers/user';

class Wallet extends React.Component {
  componentDidMount() {
    // const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  // Requisito 06
  addDespesa = () => {
    console.log('clicou');
  }

  render() {
    const { userEmail } = this.props;
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">
          {userEmail}
          <p data-testid="total-field">0</p>
        </header>
        <p data-testid="header-currency-field">BRL</p>

        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="number"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select id="moeda" data-testid="method-input">
            <option>{}</option>
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
          <input
            id="description"
            type="select"
            data-testid="description-input"
          />
        </label>

        <button
          data-testid="delete-btn"
          type="button"
          onClick={ this.deleteDespesa }
        >
          Adicionar despesa
        </button>

        {/* <button
          data-testid="edit-btn"
          type="button"
          onClick={ this.addDespesa }
        >
          Editar despesa
        </button>

        <button
          type="button"
          onClick={ this.addDespesa }
        >
          Adicionar despesa
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // retorna um objeto
  userEmail: state.user.email,
  userWallet: state.wallet.currencies, //
  userTotal: state.user.total,
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func,
  userWallet: PropTypes.array,
  userReducer: PropTypes.object,
}.isRequired;

// export default Wallet;
export default connect(mapStateToProps, null)(Wallet);
