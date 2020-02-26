import React, { useState, useEffect } from "react";
import { list as getPostList, Post } from "services/post";
import Overview from "./Overview";

let postsCache: Post[] | undefined;

export default () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (postsCache) {
      setPosts(postsCache);
      return;
    }
    getPostList("原创", "", 2, 4).then(res => {
      postsCache = res.posts;
      setPosts(postsCache);
    });
  }, []);
  return (
    <>
      <h1>个人投稿</h1>
      <Overview posts={posts} />
    </>
  );
};
