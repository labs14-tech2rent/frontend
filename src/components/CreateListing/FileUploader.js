import React, { useState } from 'react';
import Dropzone from 'react-dropzone-uploader';

import 'react-dropzone-uploader/dist/styles.css';

const FileUpload = props => {
  const [picture, setPicture] = useState([]);

  const getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    body.append('name', file);
    const url =
      'https://labstech2rentstaging.herokuapp.com/api/items/uploadProfilePicture';
    return {
      body,
      url,
      meta: {
        fileUrl: `https://labs14-tech2rent-image-upload.s3.amazonaws.com/${encodeURIComponent(
          meta.name
        )}`,
      },
    };
  };

  const handleChangeStatus = ({ meta }, status) => {
    // meta.name = `${Math.floor(Math.random() * 100000000000 + 1)}-${Math.floor(
    //   Math.random() * 10000 + 1
    // )}`;
    console.log(status, meta);
  };

  console.log(picture);
  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      getUploadParams={getUploadParams}
      maxFiles={6}
      inputContent="Upload Image(s)"
      styles={{ dropzone: { minHeight: 250, maxHeight: 250 } }}
      accept="image/*"
    ></Dropzone>
  );
};

export default FileUpload;
