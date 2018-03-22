import React, { Component } from 'react';
import LaunchList from './components/LaunchList/LaunchList';
import Card from './components/Card/Card';
import { clearDetail } from './reducers/index';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const modalStyles = {
    content: {
        bottom: 'auto',
        background: 'transparent',
        border: '0px'
    }
};

class App extends Component {

    render() {
        return (
            <div>
                <div className='container' style={{paddingTop: '20px'}}>
                    <h2 className="orange-text text-darken-2" style={{ marginTop: '0' }}>Space-X Flights</h2>
                    <div className='row'>
                        <div className='col-md-5'>
                            <LaunchList></LaunchList>
                            <Modal isOpen={this.props.modalIsOpen}
                                onRequestClose={this.props.closeModal}
                                contentLabel='Example Modal'
                                style={modalStyles}>
                                <Card></Card>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeModal: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(clearDetail())
    };
};

const mapStateToProps = state => {
    return { modalIsOpen: !!state.detail, launch: state.detail };
};

const VisibleApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default VisibleApp;
