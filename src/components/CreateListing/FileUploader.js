import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

import 'react-dropzone-uploader/dist/styles.css';

const FileUpload = props => {
  const getUploadParams = ({ file, xhr }) => {
    const body = new FormData();
    body.append('name', file);
    return {
      url:
        'https://labstech2rentstaging.herokuapp.com/api/users/uploadProfilePicture',
    };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      maxFiles={6}
      inputContent="Upload Image(s)"
      styles={{ dropzone: { minHeight: 250, maxHeight: 250 } }}
      accept="image/*"
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
    ></Dropzone>
  );
};

export default FileUpload;
