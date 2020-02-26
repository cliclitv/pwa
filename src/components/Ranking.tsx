import React, { useState, useEffect } from "react";
import { ranking as getRanking, Post } from "services/post";
import Overview from "./Overview";

let postsCache: Post[] | undefined;

export default () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (postsCache) {
      setPosts(postsCache);
      return;
    }
    getRanking().then(res => {
      postsCache = res.posts;
      setPosts(postsCache);
    });
  }, []);
  return (
    <>
      <h1>排行榜</h1>
      <Overview posts={posts} />
    </>
  );
};
