import React from 'react';
import ReactDom from 'react-dom';
import dateFormat from 'dateformat';
import apiRequest from '../../helpers/apiRequest';
import help from '../../helpers/helperAuth';
import config from '../../config/index';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postAdded: '',
    };
    this.title = React.createRef();
    this.content = React.createRef();
    this.addPost = this.addPost.bind(this);
  }
  componentWillMount() {
    this.roots = document.createElement('div');
    document.body.appendChild(this.roots);
  }

  componentWillUnmount() {
    document.body.removeChild(this.roots);
  }
  queryStateChanges (message) {
    this.setState({ postAdded: message });
    setTimeout(() => {
      this.setState({ postAdded: '' });
    }, 1000);
  }

  addPost () {
    const data = {
      title: this.title.current.value,
      content: this.content.current.value,
      date: dateFormat(new Date(), 'dd-mm-yyyy'),
    };
    this.content.current.value = '';
    this.title.current.value = '';
    apiRequest.post(`${config.hrefUrl}/posts/addPost`, data)
      .then(help.checkStatus)
      .then(this.queryStateChanges('Post added'))
      .catch((error) => {
        this.queryStateChanges('Try again later, server error');
        console.log('error', error);
      });
  }

  render() {
    return ReactDom.createPortal(
      <div className="modal">
        <h2>Add Post</h2>
        <div className="content">
          <input type="text" ref={this.title} placeholder="Title" />
          <input type="text" ref={this.content} placeholder="Content" />
          <button onClick={this.addPost}>Add Post</button>
          <button className="modal__close-button" onClick={this.props.onClick}>Close modal</button>
          <div className="addPost">{this.state.postAdded}</div>
        </div>
      </div>,
      this.roots,
    );
  }
}
export default Modal;
