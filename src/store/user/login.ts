﻿﻿﻿import * as Redux from "redux";
import {State} from "./index";

export const ActionType = "LOGIN";

export interface Action extends Redux.Action {
    username: string,
}

const Reducer = (state: State, action: Action) => {
    return {
        ...state,
        loggedIn: true,
        username: action.username
    };
};

export default { Reducer, ActionType };

export type CreateAction = (username: string) => void;
export const createAction: CreateAction = (username) => ({
    type: ActionType,
    username
});
