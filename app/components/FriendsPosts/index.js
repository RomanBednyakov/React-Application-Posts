import React from 'react';
import { connect } from 'react-redux';
import { getFriendsPost } from '../../redux/action/index';
import Post from '../Post/index';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  getFriendsPost: () => dispatch(getFriendsPost()),
});

class FriendsPosts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }
  componentDidMount() {
    this.props.getFriendsPost();
  }
  renderPost() {
    if (this.props.reducer.friendsPosts.message === 'There is no post') {
      return this.props.reducer.friendsPosts.message;
    }
    return this.props.reducer.friendsPosts.map((post) => {
      return <Post key={post.content} post={post} />;
    });
  }
  render() {
    const posts = this.renderPost();
    return <div className="post">{posts}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPosts);
