import React, { useEffect, useState, useRef } from "react";
import { Flex } from "@fluentui/react";
// @ts-ignore
import snarkdown from "snarkdown";
import { details as getPostDetails, Post } from "services/post";
import "./Post.css";
import { useQuery } from "utils";
import { VideoList } from "./Video";

export default () => {
  const id = useQuery().get("id")!;
  const t: any = useRef(null);
  const u: any = useRef(null);
  const [post, setPost] = useState<Post>({});
  useEffect(() => {
    (async () => {
      const details = await getPostDetails(id);
      setPost(details);
      const w = document.body.clientWidth;
      if (details.tag.indexOf("其它") > -1 || w < 480) {
        t.current.style.display = "none";
        u.current.style.display = "block";
        u.current.innerHTML = snarkdown(details.content);
      } else {
        t.current.innerHTML = snarkdown(details.content);
      }
    })();
  }, [id]);
  return (
    <Flex column>
      <article ref={t}></article>
      <h1>{post.title || "少男祈祷中……"}</h1>
      <article ref={u} className="other"></article>
      {post.status === "public" ? (
        <VideoList postId={id} />
      ) : post.status ? (
        <div className="copyright">版权原因，该番剧未上架，请支持正版</div>
      ) : (
        <></>
      )}
    </Flex>
  );
};
