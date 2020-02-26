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
    getPostList("", "推荐", 1, 10).then(res => {
      postsCache = res.posts;
      setPosts(postsCache);
    });
  }, []);
  return (
    <>
      <h1>编辑推荐</h1>
      <Overview posts={posts} />
    </>
  );
};
