import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../redux/action/index';
import RenderFriends from '../renderFriends/renderFriends';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  getFriends: value => dispatch(getFriends(value)),
});

class SearchFriends extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchFriends = this.handleSearchFriends.bind(this);
  }
  handleSearchFriends(e) {
    if (e.target.value.length > 0) {
      this.props.getFriends(e.target.value);
    }
  }
  renderFriends() {
    if (this.props.reducer.friends.users) {
      return this.props.reducer.friends.users.map((friends) => {
        return <RenderFriends key={friends.id} friends={friends} />;
      });
    }
    return null;
  }
  render() {
    const friends = this.renderFriends();
    return (
      <div className="search">
        <input
          name="SearchFriends"
          type="search"
          placeholder="Search friends"
          onChange={this.handleSearchFriends}
        />
        <div className="content">{friends}</div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchFriends);
