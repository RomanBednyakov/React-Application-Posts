import React from 'react';
import PropTypes from 'prop-types';
import ItemHero from '../ItemHero/index';
import Loader from '../Loader/index';

class ListOfHeroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrHeroes: [],
      renderHeroes: {},
    };
    this.changeStateOpen = this.changeStateOpen.bind(this);
    this.stateHeroes = this.stateHeroes.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.heroes !== this.state.arrHeroes) {
      const { heroes } = nextProps;
      const renderHeroes = {};
      heroes.forEach((i) => {
        renderHeroes[i.name] = false;
      });
      this.setState({ renderHeroes, arrHeroes: heroes });
    }
  }

  changeStateOpen(flag, name) {
    const newFlagHeroes = Object.assign({}, this.state.renderHeroes);
    newFlagHeroes[name] = flag;
    this.setState({ renderHeroes: newFlagHeroes });
  }

  stateHeroes() {
    console.log('stateHeroes', this.state.renderHeroes);
  }

  renderHeroes() {
    const { arrHeroes } = this.state;
    return arrHeroes.map((hero) => {
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
        <div>{render}</div>
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
