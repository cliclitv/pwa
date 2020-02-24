import React, { useState, useEffect } from "react";
import { ranking as getRanking, Post } from "services/post";
import Overview from "./Overview";

export default () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getRanking().then(res => {
      setPosts(res.posts);
    });
  }, []);
  return (
    <>
      <h1>排行榜</h1>
      <Overview posts={posts} />
    </>
  );
};
