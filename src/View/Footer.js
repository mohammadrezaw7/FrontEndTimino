import { Button, Card, Form } from "react-bootstrap";
import classes from "./Footer.module.css";
import { BsFillCursorFill } from "react-icons/bs";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import avatar from "../assets/images/avatar.png";
import replyIcon from "../assets/images/reply-icon.png";
import closeIcon from "../assets/images/close-icon.png";

export default function Footer() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const messageInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (messageInputRef.current.value.length === 0) {
      alert("type something");
      return;
    }
    const date = new Date();
    const hour = date.getHours() === 0 ? "00" : date.getHours();
    const resultDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}-${hour}:${date.getMinutes()}`;
    const messageData = {
      text: messageInputRef.current.value,
      date: resultDate,
      id: Math.random() + date.getMinutes(),
      replyTo: userState.replyTo,
    };
    dispatch(userActions.sendMessage(messageData));
    dispatch(userActions.closeReply());
    messageInputRef.current.value = "";
  };

  if (userState.reqly) {
    return (
      <div className={classes.container}>
        <div style={{ marginRight: "6px" }}>
          <img src={avatar} alt="avatar" width="50" height="50" />
        </div>
        <Form onSubmit={formSubmitHandler} className={classes.form}>
          <div className={classes.input}>
            <Card className={classes.reqly}>
              <div style={{ display: "flex" }}>
                <img src={replyIcon} alt="reply" width="40px" height="40px" />
                <div
                  style={{
                    dispaly: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <h5>Soheil</h5>
                  <p style={{ marginLeft: "4px" }}>{userState.replyTo.text}</p>
                </div>
              </div>
              <div>
                <Button
                  onClick={() => dispatch(userActions.closeReply())}
                  style={{ background: "none", border: "none" }}
                >
                  <img src={closeIcon} height="30px" alt="close" />
                </Button>
              </div>
            </Card>
            <Form.Control
              style={{ height: "3rem" }}
              ref={messageInputRef}
              type="text"
              placeholder="Message"
            />
          </div>
          <Button type="submit">
            <BsFillCursorFill size={25} />
          </Button>
        </Form>
      </div>
    );
  }

  return (
    <div style={{ height: "3rem" }} className={classes.container}>
      <div style={{ marginRight: "6px" }}>
        <img src={avatar} alt="avatar" width="50" height="50" />
      </div>
      <Form onSubmit={formSubmitHandler} className={classes.form}>
        <Form.Control ref={messageInputRef} type="text" placeholder="Message" />
        <Button type="submit">
          <BsFillCursorFill size={25} />
        </Button>
      </Form>
    </div>
  );
}
