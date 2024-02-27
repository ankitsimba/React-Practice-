import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = () => {
  const [attachmentName, setAttachmentName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleAttachmentNameChange = (e) => {
    setAttachmentName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data, for example, send it to an API

    // Reset the form fields
    setAttachmentName('');
    setDescription('');
    setFile(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Professional Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="attachmentName" className="form-label">Attachment Name:</label>
          <input
            type="text"
            className="form-control"
            id="attachmentName"
            value={attachmentName}
            onChange={handleAttachmentNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload File:</label>
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
