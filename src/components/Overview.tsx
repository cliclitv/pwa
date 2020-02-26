import { Flex, Image, Grid } from "@fluentui/react";
import React from "react";
import { Link } from "react-router-dom";
import { getSuo } from "services/dirty";
import { Post } from "services/post";

export default (props: { posts: Post[] }) => {
  const posts = props.posts;
  const coverWidth = 150,
    coverPadding = 16;
  return (
    <Grid
      columns={Math.floor(
        document.body.clientWidth / (coverWidth + coverPadding * 2)
      )}
      content={posts?.map(item => {
        return (
          <Flex
            hAlign="center"
            vAlign="center"
            styles={{
              padding: `12px ${coverPadding}px`
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
