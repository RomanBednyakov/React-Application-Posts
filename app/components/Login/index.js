import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { logining } from '../../redux/action/index';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  logining: (login, password) => dispatch(logining(login, password)),
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleLogin(event) {
    this.setState({ ...this.state, login: event.target.value });
  }
  handlePassword(event) {
    this.setState({ ...this.state, password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.logining(this.state.login, this.state.password);
    this.setState({ login: '', password: '' });
  }
  render() {
    if (this.props.reducer.redirectHome) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <h1>login</h1>
        <form className="signIn-form">
          <input
            name="login"
            type="text"
            placeholder="login"
            onChange={this.handleLogin}
          />
          <input
            name="pass"
            type="text"
            placeholder="password"
            onChange={this.handlePassword}
          />
          <button onClick={this.handleSubmit}>login</button>
        </form>
        {this.props.reducer.errorLogin ? <div>Wrong login or password</div> : ''}
        <h3><Link href="../Registration/index.js" to="/registration">Go to registration</Link></h3>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

