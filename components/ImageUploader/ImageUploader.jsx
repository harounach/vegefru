import React, { useState, useRef } from "react";
import classNames from "classnames";
import styles from "./ImageUploader.module.scss";

const ImageUploader = ({
  id,
  name,
  type,
  label,
  onChange,
  value,
  errorMessage,
}) => {
  const [fileName, setFileName] = useState("Select an image");
  const [fileURL, setFileURL] = useState("");

  const handlePreview = async (evt) => {
    const file = evt.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFileName(file.name);
    setFileURL(imageUrl);
  };

  const handleChange = async (evt) => {
    onChange(evt);
    await handlePreview(evt);
  };

  const previewView = (
    <img
      src={fileURL}
      alt={fileName}
      className={classNames(styles["image-uploader__preview"])}
    />
  );

  const errorView = (
    <p className={classNames(styles["image-uploader__error"])}>
      {" "}
      {errorMessage}{" "}
    </p>
  );
  return (
    <div className={classNames(styles["image-uploader"])}>
      <label
        htmlFor={id}
        className={classNames(styles["image-uploader__label"])}
      >
        {label}

        <span className="material-icons image-uploader__icon">file_upload</span>
      </label>

      <input
        id={id}
        type={type}
        className={classNames(styles["image-uploader__input"])}
        name={name}
        placeholder={label}
        value={value}
        onChange={handleChange}
      />
      {/* Preview */}
      {previewView}

      {/* Error message */}
      {errorMessage ? errorView : null}
    </div>
  );
};

export default ImageUploader;
