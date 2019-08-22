import React from 'react';
import Dropzone from 'react-dropzone-uploader';

import 'react-dropzone-uploader/dist/styles.css';

const FileUpload = props => {
  const handleChangeStatus = ({ file, meta }, status) => {
    const randomNum = `${Math.floor(
      Math.random() * 100000000000000 + 1
    )}-${Math.floor(Math.random() * 10000000 + 1)}`;

    const body = new FormData();

    body.append('name', file, randomNum);

    if (status === 'done') {
      props.savePhotos({
        body,
        file,
      });
    }

    if (status === 'removed') {
      props.removePhoto(file);
    }
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      maxFiles={6}
      inputContent="Upload Image(s)"
      styles={{ dropzone: { minHeight: 250, maxHeight: 250 } }}
      accept="image/*"
    ></Dropzone>
  );
};

export default FileUpload;
