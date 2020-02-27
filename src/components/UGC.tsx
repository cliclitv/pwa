import React, { useState, useEffect } from "react";
import { list as getPostList, Post } from "services/post";
import Overview from "./Overview";

export default () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPostList("原创", "", 2, 4).then(res => {
      setPosts(res.posts);
    });
  }, []);
  return (
    <>
      <h1>个人投稿</h1>
      <Overview posts={posts} />
    </>
  );
};
