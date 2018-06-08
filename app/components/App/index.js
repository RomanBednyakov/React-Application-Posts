import React from 'react';
import img from '../../assets/images/react_logo_512x512.png';
import MyInput from '../button/index';
import ContainerHeroes from '../ContainerHeroes/index';
import Modal from '../modal/modal';

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
    return (
      <div>
        <h2 id="heading">Hello ReactJS</h2>
        <img
          className="image"
          style={{ margin: '0.5em' }}
          height="40"
          width="40"
          src={img}
          alt="React Logo"
        />
        <MyInput />
        <button onClick={this.toogleModal}>Open modal</button>
        {this.state.isModalOpen &&
        <Modal onClick={this.toogleModal} className="modalCon">
          <h1>Modal</h1>
        </Modal>
        }
        <ContainerHeroes color="green" />
      </div>
    );
  }
}

export default App;
