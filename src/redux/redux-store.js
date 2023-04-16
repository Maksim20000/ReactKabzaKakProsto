import {combineReducers, legacy_createStore as createStore} from "redux"
import ProfileReducer from "./reducers/Profile-reducer";
import DialogsRedusor from "./reducers/Dialogs-redusor";
import SiteBarRedusor from "./reducers/Site-bar-redusor";
import UsersRedusor from "./reducers/Users-redusor";


let redusers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsRedusor,
    siteBar: SiteBarRedusor,
    usersPage: UsersRedusor
});

let store = createStore(redusers)
window.store = store

export default store
