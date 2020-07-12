import React,{useState} from "react";
import styles from "./UploadedPost.module.css";
import CommentIcon from "@material-ui/icons/Comment";
import LikeIcon from "@material-ui/icons/ThumbUpAlt";


const UploadedPost = () => {
    const [like,setToLiked]=useState("Like");
    const [Commented,setToCommented]=useState("");
    const [numberOfLikes,setNumberOfLikes]=useState(0);

  const handleLike = (event) => {
    event.preventDefault();
    setToLiked("Liked");
    setNumberOfLikes();
  };
  const handleComment = (event) => {
    event.preventDefault();
  };


  return (
    <div className={styles.DisplayForm}>
      <form className={styles.uploadForm}>
        <button className={styles.LikeBtn} onClick={handleLike}> <LikeIcon></LikeIcon>{like} - {numberOfLikes} likes</button>
        <button className={styles.CommentBtn} onClick={handleComment}><CommentIcon></CommentIcon> Comment</button>
      </form>
    </div>
  );
};

export default UploadedPost;
