import React, { useState, useEffect } from "react";
import { list as getPostList, Post } from "services/post";
import Overview from "./Overview";

export default () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPostList("bgm", "", 1, 30).then(res => {
      setPosts(res.posts);
    });
  }, []);
  return (
    <>
      <h1>最近更新</h1>
      <Overview posts={posts} />
    </>
  );
};
