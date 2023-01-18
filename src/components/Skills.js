import reactnative from '../assets/img/Reactnative.png';
import vue from '../assets/img/Vue.png';
import react from '../assets/img/react.png';
import next from '../assets/img/Next.png';
import nuxt from '../assets/img/Nuxt.png';
import github from '../assets/img/github.png';
import node from '../assets/img/node.png';
import express from '../assets/img/express.png';
import firebase from '../assets/img/firebase.png';
import typescript from '../assets/img/Typescript.png';
import javascript from '../assets/img/javascript.png';
import mysql from '../assets/img/Mysql.png';
import mongo from '../assets/img/mongo.png';
import html from '../assets/img/html.png';
import tailwind from '../assets/img/Tailwind.png';
import css from '../assets/img/css.png';
import bootstrap from '../assets/img/bootstrap.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={javascript} alt="" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={react} alt="" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={reactnative} alt="" />
                  <h5>React native</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="" />
                  <h5>Vue js</h5>
                </div>
                <div className="item">
                  <img src={next} alt="" />
                  <h5>Next js</h5>
                </div>
                <div className="item">
                  <img src={nuxt} alt="" />
                  <h5>Nuxt Js</h5>
                </div>
                <div className="item">
                  <img src={github} alt="" />
                  <h5>github</h5>
                </div>
                <div className="item">
                  <img src={node} alt="" />
                  <h5>node Js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="" />
                  <h5>export Js</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="" />
                  <h5>firebase</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="" />
                  <h5>Mysql</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="" />
                  <h5>MongoDB</h5>
                </div>

                <div className="item">
                  <img src={css} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="" />
                  <h5>Tailwindcss</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
