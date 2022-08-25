import React, {useState, useEffect} from "react";
import styled from "styled-components";
import blue from "../../resources/blue.png";

type User = {
  loggedIn: boolean,
  username?: string
};

type State = {
  user: User;
  usernameLength: number;
};

interface Props extends State { }

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
            <img src={blue} alt="blue"/>
        </div>
    );
}

const Button = styled.button`
    color: grey;
`;