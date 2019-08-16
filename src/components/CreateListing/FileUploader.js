import React from 'react';
import Dropzone from 'react-dropzone-uploader';

import 'react-dropzone-uploader/dist/styles.css';

const FileUpload = props => {
  console.log(props);
  const getUploadParams = ({ file, meta, fileWithMeta, Location }) => {
    const body = new FormData();
    body.append('name', file);
    const url =
      'https://labstech2rentstaging.herokuapp.com/api/items/uploadProfilePicture';
    console.log(fileWithMeta);
    return {
      Location,
      fileWithMeta,
      body,
      url,
      meta: {
        fileUrl: `https://labs14-tech2rent-image-upload.s3.amazonaws.com/${encodeURIComponent(
          meta.name
        )}`,
      },
    };
  };

  // https://labstech2rentstaging.herokuapp.com/api/users/uploadProfilePicture

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
    if (status === 'done') {
      props.setPicture(meta.fileUrl);
    }
  };

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
