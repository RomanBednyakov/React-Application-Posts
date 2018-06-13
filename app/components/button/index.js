import React from 'react';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      list: [],
    };
    this.update = this.update.bind(this);
    this.addTask = this.addTask.bind(this);
    this.renderTasks = this.renderTasks.bind(this);
    this.clear = this.clear.bind(this);
  }

  update(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }
  addTask() {
    if (this.state.search !== '') {
      const list = [...this.state.list, this.state.search];
      this.setState({ list });
    }
  }
  clear(event) {
    let clear = event.target.value;
    clear = '';
    this.setState({ search: clear });
  }
  renderTasks() {
    return this.state.list.map((element) => {
      return (
        <div key={element}>
          {element}
        </div>
      );
    });
  }

  render() {
    const render = this.renderTasks();
    return (
      <div>
        <input
          type="text"
          style={{ display: 'inline-block', margin: 5 }}
          value={this.state.search}
          placeholder="Max 10 symbols"
          onBlur={this.clear}
          onChange={this.update}
        />
        <button onMouseDown={this.addTask}>push</button>
        <div>{render}</div>
      </div>);
  }
}

export default MyInput;
