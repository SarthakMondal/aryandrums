import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Testimonial.css";
import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import t1 from "../Images/t1.jpeg";
import t2 from "../Images/t2.jpeg";
import t3 from "../Images/t3.jpeg";
import t4 from "../Images/t4.jpeg";
import t5 from "../Images/t5.jpeg";
import t6 from "../Images/t6.jpeg";


function Testimonial() {
  const [reviews, setReviews] = useState([]);
  const [breaks, setBreaks] = useState([]);

  useEffect(() => {
    setReviews(
      [
        {
          id: 1,
          name: "Alex",
          review: "I appreciate you and your effort",
          img: t1
        },
        {
          id: 2,
          name: "Reyan",
          review: "You've got all the right tones",
          img: t2
        },
        {
          id: 3,
          name: "Ammanda",
          review: "You are an incredible Drummer",
          img: t3
        },
        {
          id: 4,
          name: "Hylen",
          review: "On a scale from 1 to 10, you're an 11",
          img: t4
        },
        {
          id: 5,
          name: "Salan",
          review: "You are enough to rock the Stage",
          img: t5
        },
        {
          id: 6,
          name: "Mariya",
          review: "Drums define you my Boy, Nicee",
          img: t6
        }
      ]
    );
    setBreaks(
      [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 900, itemsToShow: 3 },
        { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 4 },
        { width: 1750, itemsToShow: 5 },
      ]
    )
  }, [])

  return (
    <div className="container-fluid" id="testimonial">
      <div className="row">
        <div className="col-sm-12">
          <div className="testimonialWrap">
            <h2>What They Says</h2>
            <Carousel breakPoints={breaks} focusOnSelect={true}>
              {
                reviews.map(eachData =>
                  <div className="dataWrap d-flex flex-column justify-content-center align-items-center">
                    <img src={eachData.img} alt="person" />
                    <h3>{eachData.name}</h3>
                    <p>{eachData.review}</p>
                  </div>


                )
              }
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial