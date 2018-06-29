import React from 'react';

export default class RenderFriends extends React.PureComponent {
  render() {
    const { name, id, following } = this.props.friends;
    const button = following ? 'Remove friends' : 'Add to friends';
    return (
      <li className="li">
        <span>{name}</span>
        <button id={id}>{button}</button>
      </li>
    );
  }
}
