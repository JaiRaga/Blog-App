import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComment] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:9007/api/posts/${postId}/comments`
    );

    setComment([res.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let rendererComment = [];

  if (comments.length !== 0) {
    rendererComment = comments.map((comment) => {
      return <li key={comment._id}>{comment.body}</li>;
    });
  }

  console.log(rendererComment, comments);

  return <ul>{comments.length !== 0 ? rendererComment : "No Comments"}</ul>;
};

export default CommentList;
