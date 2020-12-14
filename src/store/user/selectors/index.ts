﻿﻿import {createSelector} from "reselect";
import {State} from "../../index";

const usernameSelector = (state: State) => state.user.username;

export const getUsernameLength = createSelector(
    [usernameSelector],
    (username) => username?.length ?? 0
);