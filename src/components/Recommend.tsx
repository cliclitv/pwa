import React, { useState, useEffect } from "react";
import { list as postList, Post } from "services/post";
import Overview from "./Overview";

export default () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    postList("", "推荐", 1, 10).then(res => {
      setPosts(res.posts);
    });
  }, []);
  return (
    <>
      <h1>编辑推荐</h1>
      <Overview posts={posts} />
    </>
  );
};
