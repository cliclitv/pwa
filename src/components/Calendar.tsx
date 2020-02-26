import React, { useState, useEffect } from "react";
import { Image, Flex, Menu, Grid } from "@fluentui/react";
import { getSuo } from "services/dirty";
import { list as getPostList, Post } from "services/post";
import { Link } from "react-router-dom";
import "./Calendar.css";

export default () => {
  const [posts, setPosts] = useState<Record<string, Post[]>>({});
  const [day, setDay] = useState(new Date().getDay());
  useEffect(() => {
    getPostList("新番", "", 1, 100, "nowait").then(res => {
      let ret: Record<string, Post[]> = {};
      res.posts.forEach(item => {
        let day = new Date(item.time?.split(" ")[0]!).getDay();
        ret[day.toString()] = ret[day.toString()] || [];
        ret[day.toString()].push(item);
      });
      setPosts(ret);
    });
  }, []);
  return (
    <Flex column>
      <h1>追番时间表</h1>
      <Menu
        className="date_list"
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
      <Grid
        content={posts[day]?.map(item => (
          <Flex column key={item.id} hAlign="center" vAlign="center">
            <Link to={`/post?id=${item.id}`}>
              <Image
                src={getSuo(item.content!)}
                circular
                styles={{
                  maxWidth: "128px",
                  width: "18vw",
                  height: "18vw",
                  maxHeight: "128px",
                  margin: "12px 0 8px 0"
                }}
              />
            </Link>
            <span>{item.title}</span>
          </Flex>
        ))}
      />
    </Flex>
  );
};
