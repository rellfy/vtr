import React from "react";
import styled from "styled-components";
import blue from "../../media/blue.png";

export interface Props { }
export interface State { }

export class Main extends React.Component<Props, State> {
    
    public render() {
        return (
            <div>
                hello world<br/>
                <Button data-testid={"main.button"}>this is a button</Button><br/>
                this is an image:<br/>
                <img src={blue}/>
            </div>
        );
    }
}

const Button = styled.button`
    color: grey;
`;