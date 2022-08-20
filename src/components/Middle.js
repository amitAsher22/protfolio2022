import React from "react";
/// css
import "../css/middle.css";
// icont react
import { FcPhone } from "react-icons/fc";

import { FcFeedback } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
/// img
import img from "../images/me.png";
import BitBucket from "../images/BitBucket.png";
import css from "../images/css.png";
import Github from "../images/Github.png";
import Heroku from "../images/Heroku.png";
import html from "../images/html.png";
import javascript from "../images/javascript.png";
import Jira from "../images/jira1.png";
import React1 from "../images/React.png";
import Redux from "../images/Redux.png";
import sass from "../images/SASS.png";
import vue from "../images/vue.png";
import vuex from "../images/vuex.png";
import fc from "../images/fc.png";
import linkdinic from "../images/linkdinic.png";
import igithub from "../images/igithub.png";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

function Middle() {
  return (
    <div className="mainMiddle">
      <div className="section1Middle">
        <div className="leftSideMiddle1">
          <h1 className="titleNameMiddle1">I’m Amit Asher</h1>
          <h1 className="jobTitleMiddle1">
            <span className="textColorMiddle">Front – End</span> Developer
          </h1>
          <p>
            Front End Developer experienced in JavaScript based programming with
            a background in frontend and backend development. Independent
            learner, and team worker. Determined hard worker and
            solution-oriented. Experience with ensuring applications security
            and ability to interact with API and DataBases.
          </p>
          <div className="groupIconsMiddle">
            <FcPhone className="phoneCall" />
          </div>
        </div>
        <div className="imgMiddle1">
          <img src={img} alt="me profile" width="80%" height="80%" />
        </div>
      </div>
      <div className="allImagesMiddle">
        <h1 className="titleSkillsMiddle">Technical Skills</h1>
        <div className="gridImagesMiddle">
          <div className="divImgMiddle">
            <img className="imgMiddle" src={html} alt="htmlimg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={css} alt="cssimg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={javascript} alt="javascriptimg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={React1} alt="React1timg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={Redux} alt="Reduximg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={Github} alt="Githubimg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={Jira} alt="Jiraimg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={vue} alt="vueimg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={vuex} alt="vueximg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={sass} alt="sassimg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={Heroku} alt="Herokuimg" />
          </div>
          <div className="divImgMiddle">
            <img className="imgMiddle" src={BitBucket} alt="BitBucketimg" />
          </div>
        </div>
      </div>
      <div className="projectsMiddle">
        <h1 className="titleSkillsMiddle">Projects</h1>
        <div className="grinProjectsMiddle">
          <div className="card">
            <img className="projectMiddle" src={project1} alt="project1" />
            <div className="intro">
              <button
                className="buttonCode"
                onClick={() =>
                  window.open("https://github.com/amitAsher22/designapp")
                }
              >
                Github Code
              </button>
              <button
                className="buttonCode"
                onClick={() => window.open("https://designmyapp.netlify.app/")}
              >
                View project
              </button>
            </div>
          </div>

          <div className="card">
            <img className="projectMiddle" src={project2} alt="project1" />
            <div className="intro">
              <button
                className="buttonCode"
                onClick={() =>
                  window.open("https://github.com/amitAsher22/buildApp")
                }
              >
                Github Code
              </button>
              <button
                className="buttonCode"
                onClick={() =>
                  window.open("https://realeasteamit.netlify.app/")
                }
              >
                View project
              </button>
            </div>
          </div>
          <div className="card">
            <img className="projectMiddle" src={project3} alt="project1" />
            <div className="intro">
              <button
                className="buttonCode"
                onClick={() =>
                  window.open("https://github.com/amitAsher22/crypto_amit")
                }
              >
                Github Code
              </button>
              <button
                className="buttonCode"
                onClick={() => window.open("https://cryptoamit.netlify.app/")}
              >
                View project
              </button>
            </div>
          </div>
          <div className="card">
            <img className="projectMiddle" src={React1} alt="project1" />
            <div className="intro">
              <button className="buttonCode">Github Code</button>
              <button className="buttonCode">View project</button>
            </div>
          </div>
        </div>
      </div>
      <div className="eductionMiddle">
        <h1 className="titleSkillsMiddle">Eduction</h1>
        <div className="allEductionMiddle">
          <div className="eduction1">
            <div className="leftEduction">
              <h1 className="titleEduction">
                Full Stack Web Development, FlashDev
              </h1>
              <p className="title2Eduction1">Jan 2021 – Dec 2021</p>
            </div>
            <div className="contactMiddle">
              , Israel Developers Institute, RG Coding , Israel Developers
              Institute, RG Coding
            </div>
          </div>
          <div className="eduction1">
            <div className="leftEduction">
              <h1 className="titleEduction">
                Full Stack Web Development,JavaScript program , Developers
                Institute
              </h1>
              <p className="title2Eduction1">Jan 2022 – Dec 2022</p>
            </div>
            <div className="contactMiddle">
              Tel Aviv, Israel Developers Institute, TLV Coding Bootcamp 2021
            </div>
          </div>
          <div>
            <div className="eduction1">
              <div className="leftEduction">
                <h1 className="titleEduction">
                  Paramedics course in emergency medicine
                </h1>
                <p className="title2Eduction">Jan 2019 – Dec 2019</p>
              </div>
              <div className="contactMiddle">
                , Israel Magen David Adom 2019 , Israel Magen David Adom 2019
              </div>
            </div>
          </div>
          <div>
            <div className="eduction1">
              <div className="leftEduction">
                <h1 className="titleEduction">
                  SEO - search engine optimization Online
                </h1>
                <p className="title2Eduction">Jan 2018 – Dec 2018</p>
              </div>
              <div className="contactMiddle">, Israel Ran Magal 201</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactMiddle">
        <h1 className="titleSkillsMiddle">Contact</h1>
        <div className="mainContact">
          <div className="socialMedia">
            <div
              onClick={() => {
                window.open("mailto:amitasher4@gmail.com");
              }}
              className="emailI"
            >
              <FcFeedback className="iconMiddle" />
              <h2 className="text1">AmitAsher4@gmail.com</h2>
            </div>
            <div
              onClick={() => {
                window.open("tel:+972523157737");
              }}
              className="emailI"
            >
              <FcPhoneAndroid className="iconMiddle" />
              <h2 className="text1">0523157737</h2>
            </div>
            <div>
              <FcHome className="iconMiddle" />
              <h2 className="text1">Herzeliya</h2>
            </div>
          </div>
          <div className="collectionIcons">
            <div
              onClick={() => {
                window.open("https://www.facebook.com/amitasherWebDeveloper");
              }}
              className="emailI"
            >
              <img src={fc} alt="fc" width="74%" />
            </div>
            <div
              onClick={() => {
                window.open("https://github.com/amitAsher22");
              }}
              className="emailI"
            >
              <img src={igithub} alt="icongi" />
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/amitasherwebdeveloper/"
                );
              }}
              className="emailI"
            >
              <img src={linkdinic} alt="iconpng" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
