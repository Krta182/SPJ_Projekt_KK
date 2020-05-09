import React from "react";
import styles from "./UploadForm.module.css";

class UploadForm extends React.Component {
  mySubmitHandler = (event) => {
    event.preventDefault();
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


          <button type="file" value="file" className={styles.UploadImage} >
            Add photo
          </button>

        
        </form>
      </div>
    );
  }
}

export default UploadForm;
