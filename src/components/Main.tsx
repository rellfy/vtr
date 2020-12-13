import React from "react";
import styled from "styled-components";
import blue from "../../resources/blue.png";

export interface Props { }

export default function Main(props: Props) {
    return <div>
        hello world<br/>
        <Button data-testid={"main.button"}>this is a button</Button><br/>
        this is an image:<br/>
        <img src={blue}/>
    </div>;
}

const Button = styled.button`
    color: grey;
`;