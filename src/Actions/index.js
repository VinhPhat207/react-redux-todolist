import * as types from '../Constants/actionTypes'

export const filterAll = () => {
    return {
        type: types.FILTER_ALL
    }
}

export const initializeData = () => {
    return {
        type: types.INITIALIZE_DATA
    }
}

export const addTask = (newTask) => {    
    return {
        type: types.ADD_TASK,
        newTask
    }
}

export const getTaskEditing = (taskEditing) => {
    return {
        type: types.GET_TASKEDITING,
        taskEditing
    }
}

export const editTask = (taskEditing) => {
    return {
        type: types.EDIT_TASK,
        taskEditing
    }
}


export const isAddNewTask = (state) => {
    return {
        type: types.IS_ADD_NEW_TASK,
        state
    }
}

export const filterLabel = (value) => {    
    return {
        type: types.FILTER_LABEL,
        value
    }
}

export const filterPriority = (value) => {    
    return {
        type: types.FILTER_PRIORITY,
        value
    }
}

export const filterProgress = (value) => {    
    return {
        type: types.FILTER_PROGRESS,
        value
    }
}

export const sort = (value) => {
    return {
        type: types.SORT,
        value
    }
}