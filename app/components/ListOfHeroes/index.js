import React from 'react';
import PropTypes from 'prop-types';
import ItemHero from '../ItemHero/index';
import Loader from '../Loader/index';

class ListOfHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrHeroes: [],
      renderState: '',
    };
    this.changeStateOpen = this.changeStateOpen.bind(this);
    this.stateHeroes = this.stateHeroes.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    const { heroes } = nextProps;
    for (let i = 0; i < heroes.length; i += 1) {
      heroes[i].isOpen = false;
    }
    this.setState({ arrHeroes: heroes });
  }

  changeStateOpen(flag, name) {
    for (let i = 0; i < this.state.arrHeroes.length; i += 1) {
      if (this.state.arrHeroes[i].name === name) {
        this.state.arrHeroes[i].isOpen = flag;
      }
    }
  }

  stateHeroes() {
    const array = this.state.arrHeroes.map((item) => {
      return (
        <div key={item.name}>
          {item.name}
          <span style={{ marginLeft: 40 }}>
            {`${item.isOpen}`}
          </span>
        </div>);
    });
    this.setState({ renderState: array });
  }

  renderHeroes() {
    const { heroes } = this.props;
    return heroes.map((hero) => {
      return (
        <ItemHero
          changeOpen={this.changeStateOpen}
          key={hero.name}
          hero={hero}
        />
      );
    });
  }

  render() {
    const heroes = this.renderHeroes();
    const { loading } = this.props;
    const render = (loading === false) ? heroes : <Loader text="Loading data..." />;
    return (
      <div>
        <button onClick={this.stateHeroes}>Show state</button>
        <div>{this.state.renderState}{render}</div>
      </div>
    );
  }
}

ListOfHeroes.defaultProps = {
  loading: false,
  heroes: [],
};

ListOfHeroes.propTypes = {
  loading: PropTypes.bool,
  heroes: PropTypes.arrayOf(PropTypes.object),
};

export default ListOfHeroes;
