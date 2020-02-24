import { Flex, Image } from "@fluentui/react";
import React from "react";
import { Link } from "react-router-dom";
import { getSuo } from "services/dirty";
import { Post } from "services/post";

export default (props: { posts: Post[] }) => {
  const posts = props.posts;
  return (
    <Flex
      space="around"
      styles={{
        flexWrap: "wrap",
        marginTop: "36px"
      }}
    >
      {posts.length > 0 &&
        posts.map(item => {
          return (
            <Flex
              hAlign="center"
              vAlign="center"
              styles={{
                maxWidth: "150px",
                marginBottom: "24px"
              }}
              column
              key={item.id}
            >
              <Link to={`/post?id=${item.id}`}>
                <Image
                  src={getSuo(item.content!)}
                  styles={{
                    width: "100%",
                    height: "auto"
                  }}
                />
              </Link>
              <span>{item.title}</span>
            </Flex>
          );
        })}
    </Flex>
  );
};
