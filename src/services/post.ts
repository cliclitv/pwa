import { domain } from "config";

export interface Post {
  id?: string;
  content?: string;
  uqq?: string;
  uname?: string;
  uid?: number;
  title?: string;
  tag?: string;
  time?: string;
  status?: string;
}

export async function list(
  type: string,
  tag: string,
  page: number,
  pageSize: number,
  status = "public",
  uid = ""
): Promise<{ posts: Post[] }> {
  const resp = await fetch(
    `${domain.api}/posts?status=${status}&sort=${type}&tag=${tag}&uid=${uid}&page=${page}&pageSize=${pageSize}`
  );

  return resp.json();
}

export async function details(id: string) {
  const resp = await fetch(`${domain.api}/post/${id}`);
  const body = await resp.json();
  return body.result;
}

export async function ranking(): Promise<{ posts: Post[] }> {
  const resp = await fetch(`${domain.api}/rank`);
  return resp.json();
}

export async function search(key: string): Promise<{ posts: Post[] }> {
  const resp = await fetch(`${domain.api}/search/posts?key=${key}`);
  return resp.json();
}
