import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
// import config from '../../config/index';
import Modal from '../Modal/modal';
import MyPosts from '../MyPosts/index';
import FriendsPosts from '../FriendsPosts/index';
import SearchFriends from '../SearchFriends/index';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toogleModal = this.toogleModal.bind(this);
  }

  toogleModal() {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  }

  render() {
    if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
      return (<Redirect
        to={{ pathname: '/login' }}
      />);
    }
    return (
      <div className="app">
        {this.state.isModalOpen &&
        <Modal onClick={this.toogleModal} className="modalCon" />
        }
        <h1 className="h1">My-Application</h1>
        <SearchFriends />
        <div className="containerBlock">
          <div className="blockLeft">
            <button
              className="btn"
            >
              <Link
                className="linkButton"
                href="../MyPosts/index.js"
                to="/home/myposts"
              >
                My post
              </Link>
            </button>
            <button className="btn">
              <Link
                className="linkButton"
                href="../FriendsPosts/index.js"
                to="/home/friendsposts"
              >
                Post friends
              </Link>
            </button>
            <button
              className="btn"
              onClick={this.toogleModal}
            >
              Add new post
            </button>
          </div>
          <div className="blockRight">
            <Route path="/home/myposts" component={MyPosts} />
            <Route path="/home/friendsposts" component={FriendsPosts} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

