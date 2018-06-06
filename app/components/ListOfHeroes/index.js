import React from 'react';
import PropTypes from 'prop-types';
import ItemHero from '../ItemHero/index';
import Loader from '../Loader/index';

class ListOfHeroes extends React.Component {
  renderHeroes() {
    const { heroes } = this.props;
    return heroes.map((hero) => {
      return <ItemHero key={hero.name} hero={hero} />;
    });
  }

  render() {
    const heroes = this.renderHeroes();
    const { loading } = this.props;
    const render = (loading === false) ? heroes : <Loader text="Loading data..." />;
    return (
      <div>{render}</div>
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
