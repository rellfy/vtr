import React, {useState, useEffect} from "react";
import styled from "styled-components";
import blue from "../../resources/blue.png";
import {Route, Switch, Link} from "react-router-dom";
import {State as User} from "../store/user";
import {CreateAction as CreateLoginAction} from "../store/user/login";

export interface Dispatch {
    login: CreateLoginAction,
}

export interface State {
    user: User,
    usernameLength: number,
}

interface Props extends State, Dispatch { }

export default function Main(props: Props) {
    const loginButton = (
        <Button data-testid={"main.button"} onClick={() => {
            props.login("user")
        }}>
            click to login
        </Button>
    );
    
    return (
        <div>
            hello world<br/>
            user: {JSON.stringify(props.user)}<br/>
            { !props.user.loggedIn && loginButton }
            { props.user.loggedIn && `username length: ${props.usernameLength}`}
            <br/>
            this is an image:<br/>
            <img src={blue}/>
        </div>
    );
}

const Button = styled.button`
    color: grey;
`;