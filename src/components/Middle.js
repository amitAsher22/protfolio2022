import React from "react";
/// css
import "../css/middle.css";
// icont react
import { FcPhone } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
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
            Full Stack Developer experienced in JavaScript based programming
            with a background in frontend and backend development. Independent
            learner, and team worker. Determined hard worker and
            solution-oriented. Experience with ensuring applications security
            and ability to interact with API and DataBases.
          </p>
          <div className="groupIconsMiddle">
            <FcPhone className="phoneCall" />
            <MdOutlineEmail className="gmailIconMiddle" />
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
            <img className="projectMiddle" src={React1} alt="project1" />
            <div className="intro">
              <button className="buttonCode">Github Code</button>
              <button className="buttonCode">View project</button>
            </div>
          </div>

          <div className="card">
            <img className="projectMiddle" src={React1} alt="project1" />
            <div className="intro">
              <button className="buttonCode">Github Code</button>
              <button className="buttonCode">View project</button>
            </div>
          </div>
          <div className="card">
            <img className="projectMiddle" src={React1} alt="project1" />
            <div className="intro">
              <button className="buttonCode">Github Code</button>
              <button className="buttonCode">View project</button>
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
    </div>
  );
}

export default Middle;
