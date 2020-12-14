﻿﻿import {combineReducers} from "redux";
import user, {State as UserState} from "./user"

export type State = {
    user: UserState
};

export const reducer = combineReducers({
    user,
});