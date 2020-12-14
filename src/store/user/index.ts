﻿﻿import ReducerHandler, {ReducerModule} from "../handler";
import login from "./login";

export type State = {
    loggedIn: boolean,
    username?: string
};

const initialState: State = {
    loggedIn: false
};

export default (() =>
    ReducerHandler(
        initialState,
        [
            login
        ]
    )
)();