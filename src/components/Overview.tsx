import { Flex, Image, Grid } from "@fluentui/react";
import React from "react";
import { Link } from "react-router-dom";
import { getSuo } from "services/dirty";
import { Post } from "services/post";

export default (props: { posts: Post[] }) => {
  const posts = props.posts;
  return (
    <Grid
      content={posts?.map(item => {
        return (
          <Flex
            hAlign="center"
            vAlign="center"
            styles={{
              width: "182px",
              padding: "16px"
            }}
            column
            key={item.id}
          >
            <Link to={`/post?id=${item.id}`}>
              <Image
                src={getSuo(item.content!)}
                styles={{
                  width: "100%",
                  height: "210px",
                  marginBottom: "8px"
                }}
              />
            </Link>
            <span>{item.title}</span>
          </Flex>
        );
      })}
    />
  );
};
