import React, { useEffect, useState, useRef } from "react";
import { Flex } from "@fluentui/react";
// @ts-ignore
import snarkdown from "snarkdown";
import { details as getPostDetails, Post } from "services/post";
import "./Post.css";
import { useQuery } from "utils";
import { VideoList } from "./Video";

const cache = {
  id: "",
  post: {} as Post,
  HTML: ""
};

export default () => {
  const id = useQuery().get("id")!;
  if (!id) return <></>;
  const u: any = useRef(null);
  const [post, setPost] = useState<Post>({});
  useEffect(() => {
    (async () => {
      let post = cache.post;
      if (post.id !== id) {
        post = await getPostDetails(id);
        cache.post = post;
        cache.id = id;
        cache.HTML = snarkdown(post.content);
      }
      setPost(post);
      u.current.innerHTML = cache.HTML;
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
