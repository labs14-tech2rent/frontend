import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

// this is the supplied documentation code I just pasted in

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 8,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  backgroundColor: 'white',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
  boxSizing: 'border-box',
  objectPosition: 'center',
};

const Previews = props => {
  const [files, setFiles] = useState([]);
  console.log(files);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="preview" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <aside style={thumbsContainer}>{thumbs}</aside>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <button onClick={e => e.preventDefault()}>Add Images</button>
      </div>
    </section>
  );
};

export default Previews;
