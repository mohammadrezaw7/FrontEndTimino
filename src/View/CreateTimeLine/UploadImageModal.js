import { Modal, Button } from "react-bootstrap";
import { useRef } from "react";

export default function UploadImageModal(props) {
  const { onHandle, show } = props;
  const selectedFileInputRef = useRef();

  const uploadImageHandler = () => {
    var formdata = new FormData();
    formdata.append("file", selectedFileInputRef.current.files[0]);

    const fileSize = selectedFileInputRef.current.files[0].size;
    const typeFile = selectedFileInputRef.current.files[0].type.split("/")[1];
    // console.log(typeFile);
    if (
      typeFile !== "jpg" &&
      typeFile !== "jpeg" &&
      typeFile !== "png" &&
      typeFile !== "gif"
    ) {
      
      alert("Your file is not Valid");
      return;
    }

    if (fileSize < 200000) {
      alert("your file size less than 200KB");
      return;
    }

    if (fileSize > 1000000) {
      alert("your file size greater than 1MB");
      return;
    }

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://timino-app-2.iran.liara.run//upload/file", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    onHandle();
  };

  return (
    <Modal show={show} onHide={onHandle}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>Min: 200KB</p>
          <p>Max: 1MB</p>
          <p>Type: jpeg, jpg, png, gif</p>
          <input
            accept=".png, .jpeg, .jpg, .gif"
            type="file"
            ref={selectedFileInputRef}
            draggable
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHandle}>
          Close
        </Button>
        <Button variant="primary" onClick={uploadImageHandler}>
          send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
