import React from 'react';
import { connect } from 'react-redux';
import { getMyPost } from '../../redux/action/index';
import Post from '../Post/index';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  getMyPost: () => dispatch(getMyPost()),
});

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }
  componentDidMount() {
    this.props.getMyPost();
  }
  renderPost() {
    if (this.props.reducer.myPosts.length > 0) {
      return this.props.reducer.myPosts.map((post) => {
        return <Post key={post.content} post={post} />;
      });
    }
    return null;
  }
  render() {
    const posts = this.renderPost();
    return <ul className="post">{posts}</ul>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
