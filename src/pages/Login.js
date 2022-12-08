import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserEmail } from '../actions';
import '../css/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      disable: true,
    };
  }

  handleSubmit = (event) => {
    const { history, userEmail } = this.props; // setUserName é a prop criada na linha 46
    const { email } = this.state;
    event.preventDefault();
    userEmail(email); // salva o name na store ... x
    history.push('/carteira'); // após a atualização é jogado para outra rota/página
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validateEmailPassword);
  }

  // ajuda do Arlisson e Ewerson
  validateEmailPassword = () => {
    const { email, senha } = this.state;
    const validateEmail = (/^.*@.*\.com$/).test(email);
    const MIN_NUMBER = 6;
    const validatePassword = senha.length >= MIN_NUMBER;
    // email e senha
    const bool = validateEmail && validatePassword;
    this.setState({
      disable: !bool,
    });
  }

  render() {
    const { disable, email, senha } = this.state;
    return (
      <form className="form">
        <div className="div-form-login">
          <span>Login</span>
          <input
            data-testid="email-input"
            type="text"
            name="email"
            value={ email }
            placeholder="Digite seu email"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            name="senha"
            value={ senha }
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
          />

          <button
            type="submit"
            disabled={ disable }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ // retorna um objeto
  userEmail: (email) => dispatch(setUserEmail(email)),
  // setUserPassword: (senha) => dispatch(setUserPassword(senha)),
});

Login.propTypes = {
  history: PropTypes.object,
  userEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
