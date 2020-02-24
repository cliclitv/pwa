import React, { useState, useEffect } from "react";
import { Post, search as getSearchList } from "services/post";
import Overview from "components/Overview";
import { useQuery } from "utils";

export default () => {
  const key = useQuery().get("key")!;
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getSearchList(key).then(res => {
      setPosts(res.posts);
    });
  }, [key]);
  return <Overview posts={posts} />;
};
