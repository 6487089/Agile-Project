import React from 'react'
import "./HomePage.css"
import Pic from "../assets/PDF.png"
import Pic1 from "../assets/General.png"
import Pic2 from "../assets/Changing.png"
import Pic3 from "../assets/Absence.png"
import Pic4 from "../assets/ExamReview.png"
import Pic5 from "../assets/Equipment.png"
import Pic6 from "../assets/MakeUpExam.png"
import Pic7 from "../assets/Timeline.png"

function HomePage() {
  return (
    <><div className='header'>
      <div className='header-left'>
        <div className="title">Hi, <span className="user">Esther Howard</span></div>
        <div className="texts">Simplifying</div>
        <div className="texts2">Document Management </div>
        <div className="texts3">for You!</div>
        <div className="texts4">
          <p>Step into ICTPaperTrail for an elegant blend of security,</p>
          <p>ease of use, 24/7 accessibility, and</p>
          <p>real-time updates!</p>
        </div>
        <div className="content">
        </div>
        <div className='header-right'>
          <div className='pic'>
            <img src={Pic}></img>
          </div>
        </div>
      </div>
    </div><div className='content'>
        <div className="content-title">
          Choose Your Document Form
        </div>
        <div className="form-field">
          <div className="form-option">
            <img src={Pic1}></img>
            <label>General Request</label>
          </div>
          <div className="form-option">
            <img src={Pic2}></img>
            <label>Group Changing</label>
          </div>
          <div className="form-option">
            <img src={Pic3}></img>
            <label>In-Class Absence</label>
          </div>
          <div className="form-option">
            <img src={Pic4}></img>
            <label>Examination Review</label>
          </div>
          <div className="form-option">
            <img src={Pic5}></img>
            <label>Borrowing Equipment</label>
          </div>
          <div className="form-option">
            <img src={Pic6}></img>
            <label>Make Up Examination</label>
          </div>
        </div>
        <div className='timeline'>
          <div className='timeline-title'>Recent Tracking Timeline</div>
          <div className="timeline1">
            <img src={Pic7}></img>
          </div>
          <div className="timeline2">
            <img src={Pic7}></img>
          </div>
        </div>
        <div className='button'>
          <button onclick="myFunction()">More</button>
        </div>
      </div></>
  )
}

export default HomePage
