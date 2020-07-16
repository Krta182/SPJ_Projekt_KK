import React, { useState } from "react";
import styles from "./UploadForm.module.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import UploadedPost from "../UploadedPost/UploadedPost";
import { setPosts } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { postPost } from "../../services";

const UploadForm = () => {
  const [value, setPostValue] = useState("");
  const { currentUser } = useSelector((state) => state.users);
  const [file, setFile] = useState("");
  const { posts } = useSelector((state) => state.UserPosts);
  const dispatch = useDispatch();
  const idUser = currentUser.id;

  const post = {
    value,
    idUser,
  };

  const mySubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await postPost(post);
    } catch (error) {
      console.log(error);
    }
    dispatch(setPosts(post));
    console.log(posts);
    setPostValue("");
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
    setPostValue(event.target.value);
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
            value={value}
            required
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
        <t className={styles.DisplayValue}>{value}</t>
      </div>
    </div>
  );
};

export default UploadForm;
