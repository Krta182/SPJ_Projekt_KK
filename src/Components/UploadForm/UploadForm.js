import React from "react";
import styles from "./UploadForm.module.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";


class UploadForm extends React.Component {
  mySubmitHandler = (event) => {
    event.preventDefault();
  };

  fileUploadButton = () => {
    document.getElementById("fileButton").click();
    document.getElementById("fileButton").onchange = () => {
      this.setState({
        fileUploadState: document.getElementById("fileButton").value,
      });
    };
  };
  render() {
    return (
      <div className={styles.DisplayForm}>
        <form>
          <input
            type="text"
            placeholder="What's on your mind..?"
            className={styles.uploadForm}
          />

          <button className={styles.UploadFormBtn}>Upload</button>
          <input id="fileButton" type="file" hidden />
          <button
            className={styles.UploadImage}
            onClick={this.fileUploadButton}
            style={{ fontSize: 1 }}
          >
            <AddAPhotoIcon />
          </button>
        </form>
      </div>
    );
  }
}

export default UploadForm;
