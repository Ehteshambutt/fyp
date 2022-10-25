
import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import "./MultiImages.css";
const MultiImages = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [sendFiles, setSendFiles] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    setSendFiles(event.target.files);
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    Array.from(selectedFiles).map((file) => URL.revokeObjectURL(file))
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  const addSliderItem = () => {
    try {
      const formData = new FormData();
      for (const key of Object.keys(sendFiles)) {
        formData.append("file", sendFiles[key])
      }
      axios
        .post('api here', formData).then((q) => {
          // resetProductForm()
          window.location.reload()
          toast("Slider Added!", { type: 'success' })
        }).catch((err) => {
          console.log(err)
          console.log('workspace line 218')
        });
    }
    catch (err) {
      return err;
    }
  }
  return (
    <section className="sec mt-5">
      <label className="label pb-1">
        + Add Slider Images
        <br />
        <span className="span ">up to 1 images</span>
        <input
          className="input"
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      {selectedImages.length > 0 &&
        (selectedImages.length > 1 ? (
          <p className="error-msg">
            You can't upload more than 1 image! <br />
            <span className="apan">
              please delete <b> {selectedImages.length - 1} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn "
            onClick={() => {
              setSelectedImages([])
              alert("Slider button")
              // console.log(selectedImages);
              addSliderItem()

            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img className="img" src={image} height="90" width="90" alt="upload" />
                <button data-bs-dismiss="alert" aria-label="Close" class="fa-solid fa-xmark  style"
                  onClick={() => deleteHandler(image)}>    </button>
                <p className="para">{index + 1}</p>
              </div>
            );
          })}
      </div>

    </section>
  );
};

export default MultiImages;