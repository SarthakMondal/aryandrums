import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Gallary.css";
import { Modal } from 'react-bootstrap';
import i1 from "../Images/i1.jpeg";
import i2 from "../Images/i2.jpeg";
import i3 from "../Images/i3.jpeg";
import i4 from "../Images/i4.jpeg";
import i5 from "../Images/i5.jpeg";
import i6 from "../Images/i6.jpeg";

import { useState, useEffect } from 'react';

function Gallary() {
  const [imgList, setImgList] = useState([]);
  const [show, setShow] = useState(false);
  const [modalImg, setModalImg] = useState({});
  const handleClose = () => { setShow(false); }


  useEffect(() => {
    setImgList(
      [
        {
          img: i1,
          caption: "Stage Show"
        },
        {
          img: i2,
          caption: "Live Performance"
        },
        {
          img: i3,
          caption: "Drum Cover"
        },
        {
          img: i4,
          caption: "Stage Show"
        },
        {
          img: i5,
          caption: "Live Performance"
        }, {
          img: i6,
          caption: "Drum Cover"
        }
      ]
    )

  }, []);

  const setImgToModel = (img) => {
    setModalImg(img);
    setShow(true);
  }

  return (
    <div className="container-fluid" id="gallary">
      <div className="row">
        <div className="col-sm-12">
          <h2>Image Gallary</h2>
          <div className="gallaryWrap d-flex flex-wrap justify-content-center">
            {
              imgList.map(eachData =>
                <figure className="mx-2">
                  <img src={eachData.img} alt="img" onClick={() => { setImgToModel(eachData) }} />
                </figure>
              )
            }
          </div>
          <Modal show={show} onHide={handleClose}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title>{modalImg.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={modalImg.img} alt="img" id="modalImg"/>
            </Modal.Body>
          </Modal>
        </div>
      </div>

    </div>

  )
}

export default Gallary