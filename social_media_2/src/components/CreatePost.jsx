import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="htmlForm-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="User id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="htmlForm-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          ref={postTitleElement}
          id="title"
          placeholder="How are you feeling today  :)"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="htmlForm-label">
          Content
        </label>
        <textarea
          type="text"
          className="form-control"
          ref={postBodyElement}
          id="body"
          placeholder="tell us more about it..."
          rows={3}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="htmlForm-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          ref={reactionsElement}
          id="reactions"
          placeholder="How many people react on this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="htmlForm-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          className="form-control"
          ref={tagsElement}
          id="tags"
          placeholder="Enter your tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
