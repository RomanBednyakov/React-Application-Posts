import React from 'react';
import ReactDom from 'react-dom';

export default class Modal extends React.Component {
  componentWillMount() {
    this.roots = document.createElement('div');
    document.body.appendChild(this.roots);
  }

  componentWillUnmount() {
    document.body.removeChild(this.roots);
  }

  render() {
    return ReactDom.createPortal(
      <div className="modal">
        <button className="modal__close-button" onClick={this.props.onClick}>Close</button>
        {this.props.children}
      </div>,
      this.roots,
    );
  }
}
