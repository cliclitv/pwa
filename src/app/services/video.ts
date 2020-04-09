import { domain } from "@/config";
import { Video } from "@/types/video";

export async function pv(id: string): Promise<number> {
  return fetch(`${domain.api}/pv/${id}`)
    .then((resp) => resp.json())
    .then((data) => data.pv);
}

export async function list(id: string) {
  return fetch(`${domain.api}/videos?pid=${id}&page=1&pageSize=150`)
    .then((resp) => resp.json())
    .then((data) => data.videos);
}

export async function play(url: string): Promise<{ url: string }> {
  return fetch(`${domain.jx}/jx?url=${url}`).then((resp) => resp.json());
}
