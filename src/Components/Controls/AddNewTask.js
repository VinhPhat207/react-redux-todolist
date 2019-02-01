import React, { Component } from 'react';

// REDUX
import {connect} from 'react-redux'
import * as actions from '../../Actions/index'

class AddNewTask extends Component {
    onClick = () => {
        this.props.isAddNewTask(true);
    }

    render() {
        return (
            <button
                type="button"
                className="btn my-1 btn--newTask"
                data-toggle="modal"
                data-target="#modalTask"
                onClick={this.onClick}
            >
                <i className="fa fa-pencil-square-o" />
                Tạo Task mới
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAddNewTask: (type) => {
            dispatch(actions.isAddNewTask(type));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNewTask);