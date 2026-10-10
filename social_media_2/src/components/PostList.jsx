import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelMsg from "./WlcMsg";
import LoadSpinner from "./LoadSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning Up Effect.");
      signal.abort();
    };
  }, []);

  return (
    <div>
      {fetching && <LoadSpinner />}
      {!fetching && postList.length === 0 && <WelMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
