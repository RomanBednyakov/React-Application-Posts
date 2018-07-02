import React from 'react';
import { connect } from 'react-redux';
import { addFriend, removeFriends } from '../../redux/action/index';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  addFriend: id => dispatch(addFriend(id)),
  removeFriends: id => dispatch(removeFriends(id)),
});

class RenderFriends extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toogleFriend: false,
      idFollowing: '',
    };
    this.toogleFriends = this.toogleFriends.bind(this);
  }
  componentWillMount () {
    if (this.props.friends.following) {
      this.setState({ toogleFriend: true });
    }
    this.setState({ idFollowing: this.props.friends.id });
  }
  toogleFriends () {
    if (this.state.toogleFriend) {
      console.log('this.state.idFollowing', this.state.idFollowing);
      this.props.removeFriends(this.state.idFollowing);
    } else {
      this.props.addFriend(this.state.idFollowing);
    }
    this.setState({ toogleFriend: !this.state.toogleFriend });
  }
  render() {
    const { name, id } = this.props.friends;
    const button = this.state.toogleFriend ? <span className="removeFriends">Remove friends</span> : <span className="addFriends">Add to friends</span>;
    return (
      <li className="li">
        <span>{name}</span>
        <button id={id} onClick={this.toogleFriends}>{button}</button>
      </li>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RenderFriends);
