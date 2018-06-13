import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import ListOfHeroes from '../ListOfHeroes/index';

class ContainerHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: 'Welcome!',
      class: 'link off',
      heroes: [],
      loading: true,
    };
    this.press = this.press.bind(this);
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then((response) => {
        this.setState({
          heroes: response.data.results,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  press() {
    const className = (this.state.class === 'link off') ? 'link on' : 'link off';
    this.setState({ class: className });
  }

  render() {
    const { color } = this.props;
    const linkStyle = { color };
    const text = (this.state.class === 'link off') ? this.state.welcome : 'Goodbye and good luck!';
    const list = (this.state.class === 'link off') ? null : (
      <main>
        {ReactDom.createPortal(
          <ListOfHeroes heroes={this.state.heroes} loading={this.state.loading} />,
          document.getElementById('portal'),
        )}
      </main>);
    return (
      <div style={{ overflow: 'hidden', height: 300 }}>
        <a href="/#" onClick={this.press} className={this.state.class} style={linkStyle}>{text}</a>
        {list}
        <p>Hidden zone</p>
      </div>
    );
  }
}

ContainerHeroes.defaultProps = { color: 'red' };

export default ContainerHeroes;
