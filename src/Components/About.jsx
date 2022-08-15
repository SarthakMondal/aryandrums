import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aryan from "../Images/aryan.jpeg";
import "../Styles/About.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  library.add(fas, faFacebookF, faInstagram, faTwitter, faYoutube);

  return (
    <div className="container-fluid" id="about">
      <div className="row">
        <div className="col-sm-4">
          <div className="aboutCardWrap d-flex flex-column justify-content-center align-items-center">
            <div class="card d-flex flex-column justify-content-center align-items-center">
              <img src={aryan} class="card-img-top" alt="Aryan" />
              <div class="card-body">
                <h2 class="card-title">Aryan Parker</h2>
                <p class="card-text">Drummer | Lyricist | Performer</p>
                <div className="d-flex flex-row justify-content-center align-items-center pt-2">
                  <div className="iconWrap d-flex flex-row justify-content-center align-items-center"><a href="https://m.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></div>
                  <div className="iconWrap d-flex flex-row justify-content-center align-items-center ms-2"><a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></div>
                  <div className="iconWrap d-flex flex-row justify-content-center align-items-center ms-2"><a href="http://www.twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></div>
                  <div className="iconWrap d-flex flex-row justify-content-center align-items-center ms-2"><a href="https://m.youtube.com/" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="aboutTextWrap d-flex flex-column justify-content-center align-items-center">
            <h3>About Me</h3>
            <p>
              A drummer is a percussionist who creates music using drums. Most contemporary western bands that play rock, pop, jazz, or R&B music include a drummer for purposes including timekeeping and embellishing the musical timbre. The drummer's equipment includes a drum kit (or "drum set" or "trap set"), which includes various drums, cymbals and an assortment of accessory hardware such as pedals, standing support mechanisms, and drum sticks. Particularly in the traditional music of many countries, drummers use individual drums of various sizes and designs rather than drum kits. Some use only their hands to strike the drums. In larger ensembles, the drummer may be part of a rhythm section with other percussionists playing. These musicians provide the timing and rhythmic foundation which allow the players of melodic instruments, including voices, to coordinate their musical performance. As well as the primary rhythmic function, in some musical styles, such as world, jazz, classical, and electronica, the drummer is called upon to provide solo and lead performances, at times when the main feature of the music is the rhythmic development. Drummers tend to possess considerable stamina and hands-eyes-legs coordination.
              As well as the primary rhythmic function, in some musical styles, such as world, jazz, classical, and electronica, the drummer is called upon to provide solo and lead performances, at times when the main feature of the music is the rhythmic development. Drummers tend to possess considerable stamina and hands-eyes-legs coordination.
            </p>
            <h3>Channel Statistics</h3>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h4>50+</h4>
                <p>Drum Covers</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h4>20K+</h4>
                <p>Subscribers</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h4>5000 Hrs.+</h4>
                <p>Play Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About