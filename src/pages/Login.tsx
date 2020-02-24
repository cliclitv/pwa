import React from "react";
import {
  Button,
  Form,
  ICSSInJSStyle,
  FormFieldProps,
  ShorthandCollection,
  Input
} from "@fluentui/react";
import { login } from "services/user";
import { useHistory } from "react-router-dom";

const fields: ShorthandCollection<FormFieldProps> = [
  {
    label: "用户名",
    key: "username",
    styles: {
      marginBottom: "16px"
    },
    id: "login_username",
    required: true
  },
  {
    label: "密码",
    key: "password",
    styles: {
      marginBottom: "16px"
    },
    id: "login_password",
    required: true,
    control: {
      as: Input,
      type: "password"
    }
  },
  {
    control: {
      as: Button,
      content: "登录"
    },
    key: "login"
  }
];

const styles: ICSSInJSStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "33%"
};

export default () => {
  const history = useHistory();
  return (
    <Form
      onSubmit={async () => {
        const name = (document.getElementById(
          "login_username"
        ) as HTMLInputElement).value;
        const pwd = (document.getElementById(
          "login_password"
        ) as HTMLInputElement).value;

        if (await login({ name, pwd })) {
          history.goBack();
        } else {
          alert("用户名或密码错误");
        }
      }}
      fields={fields}
      styles={styles}
    />
  );
};
