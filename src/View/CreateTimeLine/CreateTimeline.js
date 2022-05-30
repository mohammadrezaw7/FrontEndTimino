import React, { useRef } from "react";
import { request } from "../../helpers/Network";
import "antd/dist/antd.css";
import "antd/dist/antd.css";
import "./CreateTimeLine.css";

import Dashboard from "../dashboard/Dashboard";
import { Modal, Button } from "react-bootstrap";


export default function CreateTimeline() {

  const titleInputRef = useRef();
  const privilegePublicLevelInputRef = useRef();
  const privilegePrivateLevelInputRef = useRef();
  const descriptionInputRef = useRef();
  const startsAtInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()

    request("POST", "/api/timeline/create", {
      body: {
        title: titleInputRef.current.value,
        privilege_level: (privilegePublicLevelInputRef.current.checked ? "public" : "private"),
        description: descriptionInputRef.current.value,
        startsAt: startsAtInputRef.current.value
      },
    })
      .then((data) => {
        window.location.href = '/Timelineindex' ;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

<Dashboard >
      <div className="login-box"  >
        <h2 style={{marginBottom:"50px" , color:"rgb(72,202,228)"}}>CreateTimeLine</h2>
        <form style={{backgroundColor:"rgb(3,4,94)" , marginRight:"100px"}} onSubmit={handleSubmit}>
          <div className="user-box" style={{marginBottom:"10px"}}>
            <input ref={titleInputRef} type="text" name="title" />
              <label style={{fontSize:"15px" , marginTop:"-5px"}}>Title</label>
          </div>
          <div className="user-box">
            <input ref={descriptionInputRef} type="te" name="privilege_level" required=""/>
            <label style={{fontSize:"15px" , marginTop:"-5px"}}>Description</label>
          </div>
          <div className="user-box" style={{width:"100%"}}>
            <input ref={startsAtInputRef} type="date" name="date" />
            <label style={{fontSize:"15px" , marginTop:"-5px"}}>Date</label>
          </div>


          <div style={{width:"140%"}}>
          <p style={{color:"rgb(72,202,228)" , paddingRight:"95px"}}>Privilege Level</p>
            <div style={{ paddingRight:"50px"}}>
              <input ref={privilegePublicLevelInputRef} style={{width:"12%"}} type="radio" id="Public" checked={true} name="Privilege-Level" />
              <label style={{color:"white", paddingRight:"30px" }} htmlFor="html">Public</label>
              <input ref={privilegePrivateLevelInputRef} style={{width:"12%"}} type="radio" id="Private" name="Privilege-Level" />
              <label style={{color:"white"}} htmlFor="css">Private</label>
            </div>

          </div>
          <button style={{marginRight:"80px", backgroundColor:"rgba(3,4,94)"}} href="#" onClick={CreateTimeline}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
</Dashboard>
  );
}
