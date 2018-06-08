import React from 'react';

class ItemHero extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Open',
      isOpen: false,
    };
    this.clickHundler = this.clickHundler.bind(this);
  }
  componentWillMount() {
    // this.props.changeStateList(this.props.hero.name, false);
  }
  clickHundler() {
    // const { changeOpen } = this.props;
    const { hero: { name }, changeOpen } = this.props;
    const stateIsOpen = !this.state.isOpen;
    const value = (this.state.buttonText === 'Open') ? 'Close' : 'Open';
    this.setState({ buttonText: value, isOpen: stateIsOpen });
    changeOpen(stateIsOpen, name);
    // this.props.changeStateList(this.props.hero.name, this.state.isOpen);
    // this.props.hero.flag = this.state.isOpen;
  }
  render() {
    const buttonStyle = {
      width: 60,
      height: 25,
    };
    const { hero: { name, height, mass } } = this.props;
    // this.props.hero.flag = this.state.isOpen;
    const renderData = (this.state.isOpen === true) ? <p>{height} {mass}</p> : null;
    return (
      <li>
        <h2>{name}</h2>
        <button onClick={this.clickHundler} style={buttonStyle}>{this.state.buttonText}</button>
        {renderData}
      </li>
    );
  }
}

export default ItemHero;
