﻿﻿import {Reducer, Action} from "redux";

interface Reducers {
    [index: string]: Reducer
}

export interface ReducerModule {
    Reducer: Reducer<any, any>,
    ActionType: string,
}

export default (initialState: any, reducerModules: ReducerModule[]): Reducer => {
    // Initialise dictionary from module array.
    const reducers: Reducers = {};
    reducerModules.forEach(module => {
       reducers[module.ActionType] = module.Reducer;
    });
    
    return (state = initialState, action: Action) => {
        const reducer = reducers[action.type];
        if (reducer == null)
            return state;
        return reducer(state, action);
    };
}