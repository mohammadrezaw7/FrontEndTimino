import { Button, Form } from "react-bootstrap";
import classes from "./Footer.module.css";
import { BsFillCursorFill } from "react-icons/bs";
import { useRef } from "react";
import { socket } from "../socket";
import { useDispatch } from "react-redux";
import { messageActions } from "../store/message-slice";

export default function Footer() {
  const messageInputRef = useRef();
  const dispatch = useDispatch();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (messageInputRef.current.value.length === 0) {
      alert("type something");
      return;
    }
    socket.emit("send-message", messageInputRef.current.value);
    dispatch(messageActions.sendMessage(messageInputRef.current.value));
    messageInputRef.current.value = "";
  };

  return (
    <div style={{ height: "3rem" }} className={classes.container}>
      <Form onSubmit={formSubmitHandler} className={classes.form}>
        <Form.Control ref={messageInputRef} type="text" placeholder="Message" />
        <Button type="submit">
          <BsFillCursorFill size={25} />
        </Button>
      </Form>
    </div>
  );
}
