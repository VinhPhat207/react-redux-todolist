import {combineReducers} from 'redux';
import tasks from './tasks'
import isAddNewTask from './isAddNewTask'
import taskEditing from './taskEditing'

const reducer = combineReducers({
    tasks,
    isAddNewTask,
    taskEditing
});

export default reducer;