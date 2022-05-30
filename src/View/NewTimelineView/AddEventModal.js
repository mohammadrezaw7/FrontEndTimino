import { Modal, Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Input, Select, AutoComplete } from "antd";
import UserCard from "../UserCard/UserCard";
import { request } from "../../helpers/Network";
import classes from "../UserCard/UserCard.module.css";


export default function AddEventModal(props) {
    const titleInputRef = useRef();
    const privilegePublicLevelInputRef = useRef();
    const privilegePrivateLevelInputRef = useRef();
    const descriptionInputRef = useRef();
    const startsAtInputRef = useRef();
    const { onHandle, show, timelineId } = props;

    const [fetchData, setFetchData] = useState([]);

    const CreateEvent = (event) => {
        event.preventDefault();
        request(
            'POST',
            '/api/'+timelineId+'/event/create',
            {
                body: {
                    title: titleInputRef.current.value,
                    privilege_level: (privilegePublicLevelInputRef.current.checked ? "public" : "private"),
                    description: descriptionInputRef.current.value,
                    date: startsAtInputRef.current.value
                },
            }
        )
        .then(data => {
            // alert success
            console.log("On Data",data);
            onHandle();
        })
        .catch(err => {
            console.log("On Error",err);
        })
    }

    return (
        <Modal show={show} onHide={onHandle}>
                    <div className="login-box" style={{position:"fixed", border:"1px solid #ADE8F4 " , margin:"100px auto"}} >

                        <h2 style={{marginBottom:"50px" , color:"rgb(72,202,228)"}}>NewEvent</h2>
                        <form style={{backgroundColor:"rgb(3,4,94)" , marginRight:"100px"}} onSubmit={CreateEvent}>
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
                            <button style={{marginRight:"80px", backgroundColor:"rgba(3,4,94)"}} href="#" onClick={AddEventModal}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </button>
                        </form>
                    </div>
        </Modal>
    );
}
