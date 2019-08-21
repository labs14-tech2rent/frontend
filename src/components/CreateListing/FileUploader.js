import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone-uploader';

import 'react-dropzone-uploader/dist/styles.css';

const FileUpload = props => {
  // const getUploadParams = ({ file }) => {
  //   const randomNum = `${Math.floor(
  //     Math.random() * 100000000000000 + 1
  //   )}-${Math.floor(Math.random() * 10000000 + 1)}`;
  //   const body = new FormData();
  //   body.append('name', file, randomNum);
  //   const url =
  //     // 'https://labstech2rentstaging.herokuapp.com/api/items/uploadProfilePicture';
  //     'https://httpbin.org/post';

  //   const photo = {
  //     body,
  //     url,
  //     meta: {
  // fileUrl: `https://labs14-tech2rent-image-upload.s3.amazonaws.com/${encodeURIComponent(
  //   randomNum
  // )}`,
  //     },
  //   };

  //   return photo;
  // };

  const handleChangeStatus = ({ file, meta }, status) => {
    console.log(file);
    console.log(status, meta);

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
      console.log(file);
    }
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      // getUploadParams={getUploadParams}
      maxFiles={6}
      inputContent="Upload Image(s)"
      styles={{ dropzone: { minHeight: 250, maxHeight: 250 } }}
      accept="image/*"
    ></Dropzone>
  );
};

export default FileUpload;
