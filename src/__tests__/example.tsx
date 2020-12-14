import React from "react";
import {createStore} from "redux";
import {reducer} from "../store";
import { render } from "@testing-library/react";
import Main from "../components/Main";
import {Provider} from "react-redux";
import {ActionType} from "../store/user/login";

const props = {
    user: {
        loggedIn: false,
        username: "test",
    },
    usernameLength: 4,
    login: (username: string) => {}
};

test("Main says 'hello world'", () => {
    const { container } = render(
        <Main
            user={props.user}
            usernameLength={props.usernameLength}
            login={props.login}
        />
    );
    expect(container).toHaveTextContent("hello world");
});

test("Main has a button", () => {
    const { getByTestId } = render(
        <Main
            user={props.user}
            usernameLength={props.usernameLength}
            login={props.login}
        />
    );
    const button = getByTestId("main.button");
    expect(button).not.toBeNull();
});