import React, { useState } from "react";
import styles from "./UploadForm.module.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import UploadedPost from "../UploadedPost/UploadedPost";
import {setPosts} from "../../redux/actions";
import { useSelector } from "react-redux";

const UploadForm = () => {
  const [post, setPostState] = useState("");
  const [file, setFile] = useState("");
  const { PostValue } = useSelector((state) => state.users);


  const mySubmitHandler = (event) => {
    event.preventDefault();
      setPosts(post);
      console.log(PostValue)
      setPostState("");
  };

  const fileHandler = (event) => {
    setFile(event.target.value);
  };

  const fileUploadButton = (event) => {
    document.getElementById("fileButton").click();
    document.getElementById("fileButton").onChange = () => {
      setFile({
        fileUploadState: document.getElementById("fileButton").value,
      });
    };
  };

  const handleChangeForm = (event) => {
    setPostState(event.target.value);
    
    console.log(post);
  };
  return (
    <div>
      <div className={styles.DisplayForm}>
        <form onSubmit={mySubmitHandler}>
          <input
            type="text"
            placeholder="What's on your mind..?"
            className={styles.uploadForm}
            onChange={handleChangeForm}
            value={post}
          />

          <button className={styles.UploadFormBtn}>Upload</button>
          <input id="fileButton" type="file" hidden />
          <button
            id="fileButton"
            className={styles.UploadImage}
            onClick={fileUploadButton}
            style={{ fontSize: 1 }}
            onChange={fileHandler}
            value={file}
          >
            <AddAPhotoIcon />
          </button>
        </form>
      </div>
      <div>
        <UploadedPost></UploadedPost>
      </div>
    </div>
  );
};

export default UploadForm;
