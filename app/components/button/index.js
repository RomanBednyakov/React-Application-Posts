import React from 'react';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          style={{ display: 'block', margin: 5 }}
          value={this.state.search}
          placeholder="Max 10 symbols"
          onChange={this.update}
        />
        <div>{this.state.search}</div>
      </div>);
  }
}

export default MyInput;
