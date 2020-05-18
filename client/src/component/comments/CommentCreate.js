import React, { Fragment, useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [body, setBody] = useState("");

  const onSubmit = async (evt) => {
    evt.preventDefault();

    await axios.post(`http://localhost:9007/api/posts/${postId}/comments`, {
      body
    });

    setBody("");
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Comment</label>
          <input
            type='text'
            className='form-control'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </Fragment>
  );
};

export default CommentCreate;
