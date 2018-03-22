import React, { Component } from 'react';
import './App.css';
import LaunchList from './components/LaunchList/LaunchList';
import Card from './components/Card/Card';
import { clearDetail } from "./reducers/index";
import Modal from "react-modal";
import { connect } from 'react-redux'

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    bottom: "auto"
  }
};

class App extends Component {

  render() {
    return (
      <div className="container">
      <h2>Space-X Flights</h2>
        <div className="row">
          <div className="col-md-5">
            <LaunchList></LaunchList>
            <Modal isOpen={this.props.modalIsOpen}
              onRequestClose={this.props.closeModal}
              contentLabel="Example Modal"
              style={modalStyles}>
              <Card></Card>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(clearDetail())
  }
}

const mapStateToProps = state => {
  return { modalIsOpen: !!state.detail, launch: state.detail };
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default VisibleApp;
