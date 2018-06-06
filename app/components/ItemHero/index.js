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
  clickHundler() {
    const switcher = !this.state.isOpen;
    const value = (this.state.buttonText === 'Open') ? 'Close' : 'Open';
    this.setState({ buttonText: value, isOpen: switcher });
  }
  render() {
    const buttonStyle = {
      width: 60,
      height: 25,
    };
    const { hero: { name, height, mass } } = this.props;
    const renderData = (this.state.isOpen === true) ? <p>{height} {mass}</p> : null;
    return (
      <div>
        <h2>{name}</h2>
        <button onClick={this.clickHundler} style={buttonStyle}>{this.state.buttonText}</button>
        {renderData}
      </div>
    );
  }
}

export default ItemHero;
