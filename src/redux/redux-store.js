import {combineReducers, legacy_createStore as createStore} from "redux"
import ProfileReducer from "./reducers/Profile-reducer";
import DialogsRedusor from "./reducers/Dialogs-redusor";
import SiteBarRedusor from "./reducers/Site-bar-redusor";
import UsersRedusor from "./reducers/Users-redusor";
import AuthReducer from "./reducers/auth-reduser";


let redusers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsRedusor,
    siteBar: SiteBarRedusor,
    usersPage: UsersRedusor,
    auth: AuthReducer
});

let store = createStore(redusers)
window.store = store

export default store
