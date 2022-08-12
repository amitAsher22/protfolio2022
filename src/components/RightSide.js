import React from "react";
import Avatar from "react-avatar";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
//// css
import "../css/rightSide.css";
//// images
import img from "../images/me.png";
function RightSide() {
  return (
    <div className="mainRightSide">
      <Avatar src={img} alt="me" size="90%" round={true} />
      <a className="titleRightSide">Amit Asher</a>
      <h5 className="titleDescriptionRightSide">Front End Developer</h5>
      <div className="sectionIcons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="circleLink"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          className="circleLink"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.whatsapp.com/"
          target="_blank"
          className="circleLink"
        >
          <AiOutlineWhatsApp />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          className="circleLink"
        >
          <MdEmail />
        </a>
      </div>
      <hr className="hrRightSide" />
      <div className="scroll">
        <div className="scroll2">
          <div className="section1">
            <div className="divDetails">
              <span className="orangeColor">Age :</span>
              <span>28</span>
            </div>
            <div className="divDetails">
              <span className="orangeColor">City : </span>
              <span>Herzliya</span>
            </div>
            <div className="divDetails">
              <span className="orangeColor"> experience : </span>
              <span>2+</span>
            </div>

            <div className="divDetails">
              <span className="orangeColor">Looking for job : </span>
              <span>Yes</span>
            </div>
          </div>
          <div className="Languages">
            <p className="LanguagesTitle">Languages</p>
            <div className="divDetails">
              <span>Hebrew :</span>
              <span>100%</span>
            </div>
            <hr className="linkpercentage" />
            <div className="divDetails">
              <span>English :</span>
              <span>90%</span>
            </div>
            <hr className="linkpercentage90" />
          </div>
          <div className="skills">
            <p className="LanguagesTitle">Skills</p>
            <div className="divDetails">
              <span>Html :</span>
              <span>100%</span>
            </div>
            <hr className="linkpercentage" />
            <div className="divDetails">
              <span>Css :</span>
              <span>90%</span>
            </div>
            <hr className="linkpercentage90" />
            <div className="divDetails">
              <span>JavaScript :</span>
              <span>90%</span>
            </div>
            <hr className="linkpercentage90" />
            <div className="divDetails">
              <span>React :</span>
              <span>80%</span>
            </div>
            <hr className="linkpercentage80" />
            <div className="divDetails">
              <span>Redux Toolkit+Redux :</span>
              <span>80%</span>
            </div>
            <hr className="linkpercentage70" />
            <div className="divDetails">
              <span>WordPress :</span>
              <span>90%</span>
            </div>
            <hr className="linkpercentage90" />
          </div>
          <div className="Skills">
            <p className="LanguagesTitle">Extra Skills</p>
            <div className="allSkillsRight">
              <span>Node.js ,PostgreSQL , Firebase</span>
              <span> ,Ubuntu ,Heroku ,AJAX ,Jira</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
