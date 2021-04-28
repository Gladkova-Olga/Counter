import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localStorageUtils";


const rootReducer = combineReducers({
    counter: counterReducer
});



export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;