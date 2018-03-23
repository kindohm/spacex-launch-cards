import React, { Component } from 'react';
import LaunchList from './components/LaunchList/LaunchList';
import Card from './components/Card/Card';
import { clearDetail } from './reducers/index';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { nextIndex, previousIndex } from './reducers/index';

Modal.setAppElement('#root');

const modalStyles = {
    content: {
        bottom: 'auto',
        background: 'transparent',
        border: '0px'
    }
};

class App extends Component {

    keyFuncs;

    componentDidMount() {
        this.keyFuncs = {
            'ArrowLeft': this.props.previousIndex,
            'ArrowRight': this.props.nextIndex,
            'j': this.props.nextIndex,
            'k': this.props.previousIndex
        };
    }

    handleKeyDown(event) {
        if (this.keyFuncs[event.key]) this.keyFuncs[event.key]();
    }

    render() {
        return (
            <div tabIndex="0" onKeyDown={(e) => this.handleKeyDown(e)}>
                <div className="container" style={{ paddingTop: '20px' }}>
                    <h2 className="blue-grey-text text-darken-2" style={{ marginTop: '0' }}>Space-X Flights</h2>
                    <div className='row'>
                        <div className='col-md-5'>
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
            </div>
        );
    }
}

App.propTypes = {
    modalIsOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    nextIndex: PropTypes.func,
    previousIndex: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(clearDetail()),
        nextIndex: () => dispatch(nextIndex()),
        previousIndex: () => dispatch(previousIndex())
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
