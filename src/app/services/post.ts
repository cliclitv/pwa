import { domain } from "@/config";
import { Post } from "@/types/post";

export async function list(
  type: string,
  tag: string,
  page: number,
  pageSize: number,
  status = "public",
  uid = "",
): Promise<{ posts: Post[] }> {
  return fetch(
    `${domain.api}/posts?status=${status}&sort=${type}&tag=${tag}&uid=${uid}&page=${page}&pageSize=${pageSize}`,
  ).then((resp) => resp.json());
}

export async function details(id: string) {
  return fetch(`${domain.api}/post/${id}`).then((resp) => resp.json());
}

export async function ranking(): Promise<{ posts: Post[] }> {
  return fetch(`${domain.api}/rank`).then((resp) => resp.json());
}

export async function search(key: string): Promise<{ posts: Post[] }> {
  return fetch(`${domain.api}/search/posts?key=${key}`).then((resp) =>
    resp.json()
  );
}
