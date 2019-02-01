import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'

class FilterProgress extends Component {
    render() {
        let { filterProgress } = this.props;
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">
                    <strong>Lọc</strong>
                    <li
                        className="py-1 display-5 lead"
                        onClick={filterProgress.bind(this, 1)}
                    >
                        <i className="fa fa-spinner mr-2" />Đang tiến hành
                    </li>
                    <li
                        className="py-1 display-5 lead"
                        onClick={filterProgress.bind(this, 2)}
                    >
                        <i className="fa fa-anchor mr-2" />Chưa bắt đầu
                    </li>
                    <li
                        className="py-1 display-5 lead"
                        onClick={filterProgress.bind(this, 3)}
                    >
                        <i className="fa fa-check-square-o mr-2" />Hoàn thành
                    </li>

                    <li
                        className="py-1 display-5 lead"
                        onClick={filterProgress.bind(this, 4)}
                    >
                        <i className="fa fa-trash-o mr-2" />Hủy bỏ
                    </li>

                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterProgress: (value) => {
            dispatch(actions.filterProgress(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterProgress);