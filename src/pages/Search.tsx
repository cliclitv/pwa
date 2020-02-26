import React, { useState, useEffect } from "react";
import { Post, search as getSearchList } from "services/post";
import Overview from "components/Overview";
import { useQuery } from "utils";

let postsCache: Post[] | undefined;

export default () => {
  const key = useQuery().get("key")!;
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (postsCache) {
      setPosts(postsCache);
      return;
    }
    getSearchList(key).then(res => {
      postsCache = res.posts;
      setPosts(postsCache);
    });
  }, [key]);
  return <Overview posts={posts} />;
};
