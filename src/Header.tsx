import React from "react";
import { Link } from "react-router-dom";
import { useMeQuery } from "./generated/graphql";

interface Props {}

export const Header: React.FC<Props> = () => {
  const { data } = useMeQuery({ fetchPolicy: "network-only" });

  return (
    <header>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/register">register</Link>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/bye">bye</Link>
      </div>
      {data && data.me ? <div>you are logged in as:{data.me.email}</div> : <div>not logged in</div>}
    </header>
  );
};
