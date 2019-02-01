import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux'
import * as actions from '../../Actions/index';
class InitializeData extends Component {
    render() {
        let { initializeData } = this.props;

        return (
            <button
                type="button"
                className="btn btn-info btn--localStorage"
                onClick={initializeData}
            >
                <i className="fa fa-pencil-square-o" />
                Tạo Data LocalStorage
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initializeData: () => {
            dispatch(actions.initializeData());
        }
    }
}

export default connect(null, mapDispatchToProps)(InitializeData);