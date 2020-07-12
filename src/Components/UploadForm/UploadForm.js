import React, { useState } from "react";
import styles from "./UploadForm.module.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useDispatch } from "react-redux";

const UploadForm = () => {
  const [post, setPost] = useState("");

  const mySubmitHandler = (event) => {
    event.preventDefault();
    setPost("");
  };

  const fileUploadButton = (event) => {
    document.getElementById("fileButton").click();
    document.getElementById("fileButton").onchange = () => {
      this.setState({
        fileUploadState: document.getElementById("fileButton").value,
      });
      event.preventDefault();
    };
  };

  const handleChangeForm = (event) => {
    setPost(event.target.value);
    console.log(post);
  };
  return (
    <div className={styles.DisplayForm}>
      <form onClick={mySubmitHandler}>
        <input
          type="text"
          placeholder="What's on your mind..?"
          className={styles.uploadForm}
          onChange={handleChangeForm}
          value={post}
        />

        <button className={styles.UploadFormBtn} >Upload</button>
        <input id="fileButton" type="file" hidden />
        <button
          className={styles.UploadImage}
          onClick={fileUploadButton}
          style={{ fontSize: 1 }}
        >
          <AddAPhotoIcon />
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
