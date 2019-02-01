import React, { Component } from 'react';

// IMPORT COMPONENTS
import THead from './TaskList/THead'
import FilterString from './TaskList/FilterString'
import TaskItem from './TaskList/TaskItem'

// REDUX
import {connect} from 'react-redux'

class TaskList extends Component {
    render() {
        let { tasks } = this.props;

        let elmTaskItem = tasks.map((item, index) => {
            return (
                <TaskItem
                    key={index}
                    STT={index + 1}
                    item={item}
                />
            )
        })

        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">
                                    Danh sách công việc
                                </h3>
                            </div>
                        </div>

                        {/* Filter String */}
                        <FilterString />
                    </div>
                </div>
                <div className="px-3">
                    <table className="table table-hover">
                        {/* THead */}
                        <THead />

                        <tbody>
                            {/* TaskItem */}
                            {
                                elmTaskItem
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, null)(TaskList);