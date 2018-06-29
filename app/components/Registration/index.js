import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { registration, redirectRegistration } from '../../redux/action/index';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  registration: (login, password, email, avatar) =>
    dispatch(registration(login, password, email, avatar)),
  redirectRegistration: () => dispatch(redirectRegistration(false)),
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      email: '',
      avatar: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAvatar = this.handleAvatar.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      login, password, email, avatar,
    } = this.state;
    this.props.registration(login, password, email, avatar);
    this.setState({
      login: '',
      password: '',
      email: '',
      avatar: '',
    });
  }
  handleLogin(event) {
    this.setState({ ...this.state, login: event.target.value });
  }
  handlePassword(event) {
    this.setState({ ...this.state, password: event.target.value });
  }
  handleEmail(event) {
    this.setState({ ...this.state, email: event.target.value });
  }
  handleAvatar(event) {
    this.setState({ ...this.state, avatar: event.target.value });
  }
  render() {
    if (this.props.reducer.redirectLogin) {
      this.props.redirectRegistration();
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h1>Registration</h1>
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
          <input
            name="pass"
            type="text"
            placeholder="email"
            onChange={this.handleEmail}
          />
          <input
            name="pass"
            type="text"
            placeholder="avatar"
            onChange={this.handleAvatar}
          />
          <button onClick={this.handleSubmit}>registration</button>
        </form>
        <h3><Link href="../Login/index.js" to="/login">Go to login</Link></h3>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

