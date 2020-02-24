import md5 from "blueimp-md5";
import { domain } from "config";
import cookie from "js-cookie";

export interface User {
  id?: number;
  name?: string;
  qq?: string;
  desc?: string;
  level?: number;
  pwd?: string;
}

export interface UserLoginDTO extends User {
  name: string;
  pwd: string;
}

export let user: User | undefined = cookie.getJSON("user");
export let token = cookie.get("token");

function clearCache() {
  user = undefined;
  token = undefined;
  cookie.remove("user");
  cookie.remove("token");
}

export function avatar(qq?: string) {
  if (!qq) {
    return "./default_avatar.jpg";
  }
  if (/^[0-9]+$/.test(qq)) {
    return `http://q1.qlogo.cn/g?b=qq&nk=${qq}&s=5`;
  } else {
    let hash = md5(qq);
    return `https://cdn.v2ex.com/gravatar/${hash}`;
  }
}

export async function login(u: UserLoginDTO) {
  const resp = await fetch(`${domain.admin}/user/login`, {
    method: "POST",
    body: JSON.stringify(u)
  });

  const body: { code: number; token: string; user: User } = await resp.json();
  if (body.code === 200) {
    user = body.user;
    token = body.token;
    cookie.set("user", user);
    cookie.set("token", token);

    return true;
  }
  clearCache();
}

export async function isLogin() {
  if (!token) return false;

  const resp = await fetch(`${domain.admin}/auth`, { credentials: "include" });
  const body: { code: number; msg: string; user: User } = await resp.json();
  if (body.code === 200) return true;
  clearCache();
  return false;
}
