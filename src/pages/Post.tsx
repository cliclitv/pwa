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
  const u: any = useRef(null);
  const [post, setPost] = useState<Post>({});
  useEffect(() => {
    if (!id) return;
    (async () => {
      const post = await getPostDetails(id);
      setPost(post);
      u.current.innerHTML = snarkdown(post.content);
    })();
  }, [id]);
  return (
    <Flex column>
      <h1>{post.title || "少男祈祷中……"}</h1>
      <article ref={u}></article>
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
