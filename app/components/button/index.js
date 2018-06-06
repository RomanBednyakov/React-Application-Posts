import React from 'react';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }
  handleMouseUp () {
    this.setState({ isHover: true });
  }
  handleMouseLeave () {
    this.setState({ isHover: false });
  }
  render() {
    const { children, color } = this.props;
    const background = this.state.isHover ? 'yellow' : 'black';
    const text = this.state.isHover ? children : 'empty button';
    return (
      <button
        onMouseOver={this.handleMouseUp}
        onFocus={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        style={{ color, background, width: 200 }}
      >{text}
      </button>);
  }
}

export default MyButton;
