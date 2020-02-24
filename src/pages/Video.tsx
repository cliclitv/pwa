import React, { useState, useEffect } from "react";
import { Video, Flex } from "@fluentui/react";
import { useQuery } from "utils";
import { Link } from "react-router-dom";
import { avatar } from "services/user";
import { list as getVideoList, Video as IVideo } from "services/video";
import "./VideoList.css";

export function VideoList(props: { postId: string }) {
  const [videos, setVideoList] = useState<IVideo[]>([]);
  useEffect(() => {
    (async () => {
      const videoList = await getVideoList(props.postId);
      setVideoList(videoList);
    })();
  }, [props.postId]);

  return (
    <div className="video-list">
      {videos?.map(item => {
        return (
          <Link
            to={`/video?url=${item.content}`}
            className="item"
            key={item.id}
          >
            <img src={avatar(item.uqq)} alt={item.uqq}></img>
            <span>P {item.oid}</span>
            <span>{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default () => {
  const query = useQuery();
  return (
    <Flex
      styles={{
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Video
        src={query.get("url")!}
        autoPlay
        styles={{
          width: "100%",
          height: "auto"
        }}
      />
    </Flex>
  );
};
