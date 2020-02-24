import React, { useState, useEffect } from "react";
import { Image, Flex, Menu } from "@fluentui/react";
import { getSuo } from "services/dirty";
import { list as getPostList, Post } from "services/post";
import { Link } from "react-router-dom";

export default () => {
  const [posts, setPosts] = useState<Post[][]>([]);
  const [day, setDay] = useState(new Date().getDay());
  useEffect(() => {
    getPostList("新番", "", 1, 100, "nowait").then(res => {
      let ret: any = {};
      res.posts.forEach(item => {
        let day = new Date(item.time!).getDay();
        ret[day] = ret[day] || [];
        ret[day].push(item);
      });
      setPosts(ret);
    });
  }, []);
  return (
    <Flex column>
      <h1>更新表</h1>
      <Menu
        defaultActiveIndex={day}
        primary
        items={[
          { key: 0, content: "周日" },
          { key: 1, content: "周一" },
          { key: 2, content: "周二" },
          { key: 3, content: "周三" },
          { key: 4, content: "周四" },
          { key: 5, content: "周五" },
          { key: 6, content: "周六" }
        ]}
        onItemClick={(_, item) => {
          setDay(item?.index!);
        }}
      />
      <Flex wrap space="between">
        {posts[day]?.map(item => (
          <Flex
            column
            key={item.id}
            hAlign="center"
            styles={{
              width: "64px",
              marginTop: "12px"
            }}
          >
            <Link to={`/post?id=${item.id}`}>
              <Image
                src={getSuo(item.content!)}
                circular
                styles={{
                  width: "100%",
                  height: "64px"
                }}
              />
            </Link>
            <span>{item.title}</span>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
