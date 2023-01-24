import React, { useState } from "react";

export const UploadCsv = () => {
  const [file, setFile] = useState();

  const handleFileRead = () => {
    var reader = new FileReader();
    reader.onload = function (e) {
      // The *.txt file text will be printed here
      console.log(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
  };
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={handleFileRead}>read</button>
    </div>
  );
};
