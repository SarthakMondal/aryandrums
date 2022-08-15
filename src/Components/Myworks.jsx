import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import "../Styles/Myworks.css";

function Myworks() {

  const [allvideos, setAllvideos] = useState([]);
  const [playvideo, setPlayvideo] = useState({});

  useEffect(() => {
    setPlayvideo(
      {
        songId: "1",
        songName: "In The End",
        drummer: "Aryan Parker",
        date: "22-05-2021",
        songUrl: "https://www.youtube.com/embed/b120oHrlVCo"
      }
    );

    setAllvideos(
      [
        {

          songId: "1",
          songName: "In The End",
          drummer: "Aryan Parker",
          date: "22-05-2021",
          songUrl: "https://www.youtube.com/embed/b120oHrlVCo"
        },
        {

          songId: "2",
          songName: "Numb",
          drummer: "Aryan Parker",
          date: "21-03-2021",
          songUrl: "https://www.youtube.com/embed/ymCwTacgCws"
        },
        {

          songId: "3",
          songName: "Somewhere I Belong",
          drummer: "Aryan Parker",
          date: "12-02-2021",
          songUrl: "https://www.youtube.com/embed/MST0X-8lsD4"
        },
        {

          songId: "4",
          songName: "Castle of Glass",
          drummer: "Aryan Parker",
          date: "22-05-2021",
          songUrl: "https://www.youtube.com/embed/DCh8fDPj6do"
        },
        {

          songId: "5",
          songName: "What I've Done",
          drummer: "Aryan Parker",
          date: "15-02-2021",
          songUrl: "https://www.youtube.com/embed/t8O3uY2T2I0"
        },
        {

          songId: "6",
          songName: "Burn It Down",
          drummer: "Aryan Parker",
          date: "12-02-2021",
          songUrl: "https://www.youtube.com/embed/6bRB8i16-iA"
        }

      ]
    )

  }, []);


  const changeSong = (song) => {
    setPlayvideo(song);
  }

  return (
    <div className="container-fluid" id="myworks">
      <div className="row">
        <div className="col-sm-7">
          <div className="videoWrap">
            <iframe src={playvideo.songUrl}></iframe>
            <h3 id="WorkH">Playing: {playvideo.songName}</h3>
          </div>
        </div>
        <div className="col-sm-5 d-flex flex-column justify-content-center align-items-center">
          <h3 id="WorkH">My Works(Scroll to View More)</h3>
          <div className="listcardWrap">
            {
              allvideos.map(eachData =>
                <div className="dataWrap">
                  <h3>Song Name: {eachData.songName}</h3>
                  <h3>Cover By: {eachData.drummer}</h3>
                  <h5>Date: {eachData.date}</h5>
                  <button className="btn btn-lg" onClick={() => changeSong(eachData)}>Listen-Song</button>
                </div>
              )

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myworks