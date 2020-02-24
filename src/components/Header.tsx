import React, { useEffect, useState } from "react";
import { Input, Avatar, ICSSInJSStyle, Flex } from "@fluentui/react";
import { Link, useHistory } from "react-router-dom";
import { avatar, isLogin, user } from "services/user";

export default () => {
  const history = useHistory();
  const [data, setData] = useState({ isLogin: true });

  useEffect(() => {
    (async () => {
      setData({
        isLogin: await isLogin()
      });
    })();
  }, []);
  return (
    <Flex styles={headerStyle}>
      <Link to={data.isLogin ? "/" : "/login"}>
        <Avatar size="larger" image={avatar(user?.qq)} />
      </Link>
      <Flex styles={searchStyle}>
        <Input
          fluid
          icon="search"
          onKeyPress={evt => {
            if (evt.key === "Enter") {
              history.push(`/search?key=${evt.currentTarget.value}`);
            }
          }}
        />
      </Flex>
    </Flex>
  );
};

const headerStyle: ICSSInJSStyle = {
  padding: "4px 8px",
  alignItems: "center"
};

const searchStyle: ICSSInJSStyle = {
  flexGrow: 1,
  margin: "0 8px 0 12px"
};
