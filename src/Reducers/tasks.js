import * as types from '../Constants/actionTypes'
import listOfTasks from '../Models/TaskModel/TaskModel';
import $ from 'jquery'

let JSONtasks = JSON.parse(localStorage.getItem("tasks"));
let initializeState = JSONtasks ? JSONtasks : [];

// Quick sort
let compare = (a, b, isAsc) => {
    if (isAsc === true) {
        return a.name < b.name;
    }

    return a.name > b.name;
}

let partition = (arr, low, high, isAsc) => {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j < high; j++) {
        if (compare(arr[j], pivot, isAsc)) {
            i++;

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

let quickSort = (arr, low, high, isAsc) => {
    if (low < high) {
        let pi = partition(arr, low, high, isAsc);

        quickSort(arr, low, pi - 1, isAsc);
        quickSort(arr, pi + 1, high, isAsc);
    }
}

// =====================================
let reducer = (state, action) => {
    if (state === 'undefined') {
        return initializeState;
    }

    JSONtasks = JSON.parse(localStorage.getItem("tasks"));
    state =  JSONtasks ? JSONtasks : [];

    if (action.type !== types.FILTER_PRIORITY) {
        $("#selectPriorityBox").val(0);
    }

    if (action.type !== types.SORT) {
        $("#selectSortBox").val(0);
    }

    switch (action.type) {
        case types.FILTER_ALL: {
            state = JSONtasks;
            break;
        }
        case types.INITIALIZE_DATA: {
            localStorage.setItem("tasks", JSON.stringify(listOfTasks.list));
            state = JSON.parse(localStorage.getItem("tasks"));

            break;
        }
        case types.ADD_TASK: {
            JSONtasks = [...JSONtasks, action.newTask];

            state = JSONtasks;
            localStorage.setItem("tasks", JSON.stringify(state));

            break;
        }
        case types.EDIT_TASK: {
            for (let index in JSONtasks) {
                if (JSONtasks[index].id === action.taskEditing.id) {
                    JSONtasks[index] = action.taskEditing;
                    break;
                }
            }

            state = JSONtasks;
            localStorage.setItem("tasks", JSON.stringify(state));

            break;
        }
        case types.FILTER_LABEL: {
            state = [];
            for (let item of JSONtasks) {
                for (let elm of item.labelArr) {
                    if (elm === action.value) {
                        state = [...state, item];
                        break;
                    }
                }
            }

            break;
        }
        case types.FILTER_PRIORITY: {
            state = [];
            let value = parseInt(action.value, 10);

            if (value === 0) {
                state = JSONtasks;
            }
            else {
                for (let item of JSONtasks) {
                    if (parseInt(item.priority, 10) === value) {
                        state = [...state, item];
                    }
                }
            }

            break;
        }
        case types.FILTER_PROGRESS: {
            state = [];
            let value = parseInt(action.value, 10);

            for (let item of JSONtasks) {
                if (parseInt(item.status, 10) === value) {
                    state = [...state, item];
                }
            }

            break;
        }
        case types.SORT: {
            let value = parseInt(action.value, 10);

            if (value === 0) {
                state = JSONtasks;
            }
            else if (value === 1) {
                quickSort(JSONtasks, 0, JSONtasks.length - 1, true);
            }
            else if (value === 2) {
                quickSort(JSONtasks, 0, JSONtasks.length - 1, false);
            }
            
            state = JSONtasks;
            break;
        }
        default:
            break;
    }
    
    return state;
}

export default reducer;