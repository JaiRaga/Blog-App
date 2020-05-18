import React, { Fragment, useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = async (evt) => {
    evt.preventDefault();

    await axios.post("http://localhost:9008/api/posts", { title, body });

    setTitle("");
    setBody("");
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title of the Post'
          />
          <input
            type='text'
            className='form-control my-2'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Body of the Post'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </Fragment>
  );
};

export default PostCreate;
