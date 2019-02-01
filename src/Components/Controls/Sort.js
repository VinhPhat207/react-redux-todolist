import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux'
import * as actions from '../../Actions/index'

class Sort extends Component {
    onChange = () => {
        let selectBox = document.getElementById("selectSortBox");
        let selectedValue = selectBox.options[selectBox.selectedIndex].value;

        this.props.sort(selectedValue);
    }

    render() {
        return (
            <div className="form-group text-left">
                <label htmlFor="sel1">
                    <strong>Sắp xếp theo công việc</strong>
                </label>
                <select
                    id="selectSortBox"
                    className="form-control"
                    onChange={this.onChange}
                >
                    <option
                        value={0}
                    >
                        Mặc định
                     </option>
                    <option
                        value={1}
                    >
                        Từ A đến Z
                     </option>
                    <option
                        value={2}
                    >
                        Từ Z đến A
                    </option>
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (value) => {
            dispatch(actions.sort(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(Sort);