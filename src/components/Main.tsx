import {useState} from "react";
import styled from "styled-components";
import blue from "../../resources/blue.png";

type User = {
  loggedIn: boolean,
  username?: string
};

export default () => {
    const [user, setUser] = useState<User>({
      loggedIn: false
    });
    const login = (username: string) => setUser({
      loggedIn: true,
      username
    });
    const loginButton = (
        <Button
          data-testid={"main.button"}
          onClick={() => login("user")}
        >
            click to login
        </Button>
    );
    return (
        <div>
            hello world<br/>
            user: {JSON.stringify(user)}<br/>
            { !user.loggedIn && loginButton }
            <br/>
            this is an image:<br/>
            <img src={blue} alt="blue"/>
        </div>
    );
}

const Button = styled.button`
    color: grey;
`;