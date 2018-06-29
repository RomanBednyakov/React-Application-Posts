import React from 'react';

export default class Post extends React.PureComponent {
  render() {
    const {
      content, date, title, name,
    } = this.props.post;
    return (
      <li className="li">
        <h3 className="h3">{name}</h3>
        <div className="header">
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </div>
        <div>{content}</div>
      </li>
    );
  }
}
