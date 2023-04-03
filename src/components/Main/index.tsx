import { useState } from "react";
import classes from "./Main.module.scss";
import blue from "../../../resources/blue.png";
import classNames from "classnames";

type User = {
  loggedIn: boolean;
  username?: string;
};

export default () => {
  const [user, setUser] = useState<User>({
    loggedIn: false,
  });
  const login = (username: string) =>
    setUser({
      loggedIn: true,
      username,
    });
  const loginButton = (
    <div
      className={classes.button}
      data-testid={"main.button"}
      onClick={() => login("user")}
    >
      click to login
    </div>
  );
  return (
    <div>
      hello world
      <br />
      <span
        className={classNames({
          [classes.success]: user.loggedIn,
          [classes.warning]: !user.loggedIn
        })}
      >
        user: {JSON.stringify(user)}
      </span>
      <br />
      {!user.loggedIn && loginButton}
      <br />
      this is an image:
      <br />
      <img src={blue} alt="blue" />
    </div>
  );
};
