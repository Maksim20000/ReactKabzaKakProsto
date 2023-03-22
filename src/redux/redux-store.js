import ProfileReducer from "./reducers/Profile-reducer";
import DialogsRedusor from "./reducers/Dialogs-redusor";
import SiteBarRedusor from "./reducers/Site-bar-redusor";
import {combineReducers, legacy_createStore as createStore} from "redux";

debugger

let redusers = combineReducers({
    ProfileReducer: ProfileReducer,
    DialogsRedusor: DialogsRedusor,
    SiteBarRedusor: SiteBarRedusor
})

let store = createStore(redusers)

export default store