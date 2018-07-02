import React from 'react';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { getFriends, clearFriends } from '../../redux/action/index';
import RenderFriends from '../renderFriends/renderFriends';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  getFriends: value => dispatch(getFriends(value)),
  clearFriends: () => dispatch(clearFriends()),
});

class SearchFriends extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchFriends = this.handleSearchFriends.bind(this);
    this.clearState = this.clearState.bind(this);
    this.renderFriends = this.renderFriends.bind(this);
  }
  handleSearchFriends(e) {
    if (e.target.value.length > 0) {
      this.props.getFriends(e.target.value);
    } else {
      this.clearState();
    }
  }
  clearState (e) {
    if (e) {
      e.target.value = '';
    }
    this.props.clearFriends();
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
        <DebounceInput
          debounceTimeout={300}
          name="SearchFriends"
          placeholder="Search friends"
          onChange={this.handleSearchFriends}
          // onBlur={this.clearState}
        />
        <div className="content">{friends}</div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchFriends);
