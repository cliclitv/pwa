import React, { useState, useEffect } from "react";
import { Post, search as getSearchList } from "services/post";
import Overview from "components/Overview";
import { useQuery } from "utils";

const cache = {
  key: "",
  posts: [] as Post[]
};

export default () => {
  const key = useQuery().get("key")!;
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (cache.key === key) {
      setPosts(cache.posts);
      return;
    }
    getSearchList(key).then(res => {
      cache.posts = res.posts;
      cache.key = key;
      setPosts(cache.posts);
    });
  }, [key]);
  return <Overview posts={posts} />;
};
