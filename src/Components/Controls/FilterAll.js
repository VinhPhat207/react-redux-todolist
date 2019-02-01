import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'

class FilterAll extends Component {
    render() {
        let { filterAll } = this.props;

        return (
            <div className="filter filter--progress mt-4">
                <ul className="list-unstyled text-left">
                    <li
                        className="py-1 display-5 lead"
                        onClick={filterAll}
                    >
                        <i className="fa fa-home mr-2" />Tất cả
                    </li>
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterAll: () => {
            dispatch(actions.filterAll());
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterAll);