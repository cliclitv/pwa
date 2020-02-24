import { domain } from "config";

export interface Video {
  id?: number;
  content?: string;
  uqq?: string;
  oid?: number;
  title?: string;
}

export async function pv(id: string) {
  const resp = await fetch(`${domain.jx}/get/pv?pid=${id}`);
  const body = await resp.json();
  return body.pv;
}

export async function list(id: string) {
  const resp = await fetch(
    `${domain.api}/videos?pid=${id}&page=1&pageSize=150`
  );
  const body = await resp.json();
  return body.videos;
}

export async function play(url: string) {
  const resp = await fetch(`${domain.jx}/jx?url=${url}`);
  const body = await resp.json();
  return body;
}
