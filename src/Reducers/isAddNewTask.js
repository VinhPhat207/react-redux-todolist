import * as types from '../Constants/actionTypes'

let initializeState = true;

let reducer = (state = initializeState, action) => {
    switch (action.type) {
        case types.IS_ADD_NEW_TASK: {
            state = action.state;
            break;
        }
        default:
            break;
    }

    return state;
}

export default reducer;