import React, { useState } from "react";
import styles from "./UploadedPost.module.css";
import CommentIcon from "@material-ui/icons/Comment";
import LikeIcon from "@material-ui/icons/ThumbUpAlt";
import { useSelector } from "react-redux";

const UploadedPost = (props) => {
  const { currentUser } = useSelector((state) => state.users);
  const [like, setToLiked] = useState("Like");
  const [Commented, setToCommented] = useState("");
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [CommentState, setCommentState] = useState(false);
  const [commentInput, setCommentinput] = useState("");

  const handleChangeComment = (event) => {
    event.preventDefault();
    setCommentinput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentinput("");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setCommentState(!CommentState);
  };

  const handleLike = (event) => {
    event.preventDefault();
    setToLiked("Liked");
    if (like === "Like") {
      setNumberOfLikes(numberOfLikes + 1);
    }
    console.log(numberOfLikes);
  };
  const handleComment = (event) => {
    event.preventDefault();
    setCommentState(!CommentState);
    console.log(CommentState);
  };

  return (
    <div className={styles.DisplayForm}>
      <form className={styles.uploadForm}>
        <button className={styles.LikeBtn} onClick={handleLike}>
          {" "}
          <LikeIcon></LikeIcon>
          {like} - {numberOfLikes} likes
        </button>
        {CommentState ? (
          <form onSubmit={handleSubmit}>
            <input
              className={styles.commform}
              placeholder="Write you comment here..."
              type="text"
              onChange={handleChangeComment}
              value={commentInput}
            />
            <br></br>
            <button className={styles.SubmitBtn}>Submit</button>
            <button className={styles.CancelBtn} onClick={handleCancel}>
              Cancel
            </button>
          </form>
        ) : (
          <button className={styles.CommentBtn} onClick={handleComment}>
            <CommentIcon></CommentIcon> Comment{" "}
          </button>
        )}
      </form>
    </div>
  );
};

export default UploadedPost;
