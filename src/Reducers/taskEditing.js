import * as types from '../Constants/actionTypes'

let initializeState = {
    id: null,
    name: "",
    labelArr: [],
    priority: 1,
    memberIDArr: [],
    status: 1,
    description: ""
};

let reducer = (state = initializeState, action) => {
    switch (action.type) {
        case types.EDIT_TASK: {
            state = action.taskEditing;
            break;
        }
        case types.GET_TASKEDITING: {
            state = action.taskEditing;
            break;
        }
        default:
            break;
    }

    return state;
};

export default reducer;