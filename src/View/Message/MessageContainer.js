import { Card, Dropdown } from "react-bootstrap";
import classes from "./MessageContainer.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";

export default function MessageContainer({ message }) {
  const dispatch = useDispatch();

  const deleteMessageHandler = () =>
    dispatch(userActions.deleteMessage(message.id));

  const copyMessageHandler = () => {
    const textField = document.createElement("textarea");
    textField.innerText = message.text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const replyMessageHandler = () => {
    dispatch(userActions.replyMessage(message.id));
  };
  if (!!message.replyTo) {
    return (
      <div className={classes.container}>
        <Card style={{ borderRadius: "15px" }}>
          <Card.Header className={classes.reqly}>
            <h5>{message.replyTo.userName}</h5>
            <Card.Text>{message.replyTo.text}</Card.Text>
          </Card.Header>
          <div className={classes.card}>
            <div style={{ maxWidth: "95%" }}>
              <Card.Text className={classes.text}>{message.text}</Card.Text>
            </div>
            <Dropdown className={classes.tooltip}>
              <Dropdown.Toggle
                as={BsThreeDotsVertical}
                id="dropdown-autoclose-true"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={replyMessageHandler}>
                  Reply
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={deleteMessageHandler}>
                  Delete
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={copyMessageHandler}>
                  Copy
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card>
        <div className={classes.date}>
          <p>{message.date}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <div style={{ maxWidth: "95%" }}>
          <Card.Text className={classes.text}>{message.text}</Card.Text>
        </div>
        <Dropdown className={classes.tooltip}>
          <Dropdown.Toggle
            as={BsThreeDotsVertical}
            id="dropdown-autoclose-true"
          />
          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={replyMessageHandler}>
              Reply
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={deleteMessageHandler}>
              Delete
            </Dropdown.Item>
            {/* <Dropdown.Item href="#">Edit</Dropdown.Item> */}
            <Dropdown.Item href="#" onClick={copyMessageHandler}>
              Copy
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card>
      <div className={classes.date}>
        <p>{message.date}</p>
      </div>
    </div>
  );
}
